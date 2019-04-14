const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { email, password, username } = req.body;
    const db = req.app.get("db");
    const accountArr = await db.find_user_by_email([email]);
    if (accountArr[0]) {
      return res.status(200).send({ message: "Email already in use." });
    }
    const anotherAccountArr = await db.find_user_by_username([username]);
    if(anotherAccountArr[0]){
      return res.status(200).send({ message: "Username already in use." })
    }
        // email and username 'filters' with the code above

    const salt = bcrypt.genSaltSync(10);
    const pepper = bcrypt.hashSync(password, salt);
    let newAccArr = await db.create_user([email, pepper, username]);\
    let newCart = await db.init_cart(newAccArr[0].user_id);
    // running another async request to the db after first one
    req.session.user =  {
      email: newAccArr[0].user_email, 
      id: newAccArr[0].user_id, 
      username: newAccArr[0].username,
      cartId: newCart[newCart.length-1].cart_id,
      cartCount: 0
      };
        // places them in a session after registering by adding them to the req.session object
        // initializes new cart after registering

    res.status(200).send({
      message: "logged in",
      userData: req.session.user,
      loggedIn: true
    });
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    const accountArr = await db.find_user_by_email([email]);
    if (!accountArr[0]){
        return res.status(200).send({ message:'Email not found' });

    }
    const result = bcrypt.compareSync(password, accountArr[0].user_hash); // checks if passwords match up, evaluates to true or false
    if(!result){ // if result is false and IS THEN FLIPPED TO TRUE, then code below runs
        return res.status(401).send({ message: 'incorrect password, who dis?' })
    }
    let newCart = async db.init_cart(accountArr[0].user_id)
    req.session.user = { 
      email: accountArr[0].user_email, 
      id: accountArr[0].user_id, 
      username: accountArr[0].username,
      cartId: newCart[newCart.length-1].cart_id,
      cartCount: 0
      };
          // places them in session after logging in
          // initializes new cart after logging in

    res.status(200).send({ 
      message: 'login successful', 
      loggedIn: true })
  },
  userData: (req, res) => {
      if(req.session.user){
          res.status(200).send(req.session.user)
      } else {
          res.status(401).send('Please log in')
      }
  },
  addLocation: (req, res)=>{
    const { email, city, state } = req.body;
    if ( city == '' || state == '' ){
      return res.status(400).send({ message:'Please enter a valid city/state' })
    }
    const db = req.app.get("db");
    db.add_location([email, city, state])
    .then(response=>{
      console.log(response);
      res.status(200).send({
        message: "user location updated, thank you",
        userData: req.session.user,
        loggedIn: true
      });
    })
    .catch(err=> console.log('Error occurred while adding location', err)
  },
  logout: (req, res)=>{
    req.session.destroy();
    res.redirect('http://localhost:4000/#/shop')
    }
}






