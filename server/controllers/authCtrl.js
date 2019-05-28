const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { email, password, username } = req.body;
    const db = req.app.get("db");
    const accountArr = await db.find_user_by_email([email])
      .catch(err=>console.log(`Something happened while finding user by email: ${err}`))
    if (accountArr[0]) {.0
      return res.status(200).send({ message: "Email already in use." });
    }
    const anotherAccountArr = await db.find_user_by_username([username])
      .catch(err=>console.log(`Something happened while finding user by username: ${err}`))
    if(anotherAccountArr[0]){
      return res.status(200).send({ message: "Username already in use." })
    }
        // email and username 'filters' with the code above

    const salt = bcrypt.genSaltSync(10);
    const pepper = bcrypt.hashSync(password, salt);
    let newAccArr = await db.create_user([email, pepper, username])
      .catch(err=>console.log(`Something happened while creating user: ${err}`))

    let arrayOfCarts = await db.init_cart(newAccArr[0].user_id)   
      .catch(err=>console.log(`Something happened while initializing a new cart: ${err}`)); // returns an ARRAY of carts
    // running another async request to the db after first one
    req.session.user =  {
      email: newAccArr[0].user_email, 
      id: newAccArr[0].user_id, 
      username: newAccArr[0].username,
      cartId: arrayOfCarts[arrayOfCarts.length-1].cart_id,
      cartCount: 0
      };
        // places them in a session after registering by adding them to the req.session object
        // initializes new cart after registering

    return res.status(200).send({
      message: "Register successful, welcome",
      userData: req.session.user,
      loggedIn: true
    });
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    const db = req.app.get("db");
    const accountArr = await db.find_user_by_email([email])
      .catch(err=>console.log(`Something happened while finding user by email: ${err}`))
    console.log(accountArr[0])
    if (!accountArr[0]){
        return res.status(200).send({ message:'Email not found' });

    }
    const result = bcrypt.compareSync(password, accountArr[0].user_hash); // checks if passwords match up, evaluates to true or false
    if(!result){ // if result is false and IS THEN FLIPPED TO TRUE, then code below runs
        return res.status(401).send({ message: 'incorrect email & password combo, who dis?' })
    }

    let arrayOfCarts = await db.init_cart(accountArr[0].user_id)
      .catch(err=>console.log(`Something happened while initializing a new cart: ${err}`));
    // returns an ARRAY of carts
    req.session.user = { 
      email: accountArr[0].user_email, 
      id: accountArr[0].user_id, 
      username: accountArr[0].username,
      cartId: arrayOfCarts[arrayOfCarts.length-1].cart_id,
      cartCount: 0
      };
          // places them in session after logging in
          // initializes new cart after logging in

    return res.status(200).send({ 
      message: 'Login successful',
      userData: req.session.user ,
      loggedIn: true 
    })
  },
  userData: (req, res) => {
      if(req.session.user){
          res.status(200).send(req.session.user)
      } else {
          res.status(401).send('Please log in and/or register')
      }
  },
  retrieveSession: (req, res)=>{
    return res.status(200).send(req.session.user);
  },
  addLocation: (req, res)=>{
    console.log(req.session.user)
    const { city, state } = req.body;
    const { email } = req.session.user;
    if ( city == '' || state == '' ){
      return res.status(400).send({ message:'Please enter a valid city/state' })
    }
    const db = req.app.get("db");
    db.add_location([email, city, state])
    .then(response=>{
      console.log(response);
      return res.status(200).send({
        message: "User location updated, thank you",
        userData: req.session.user,
        loggedIn: true
      });
    })
    .catch(err=> console.log('Error occurred while adding location', err))
  },
  deleteLocation: (req, res)=>{
    console.log(req.params)
    let { id: user_id } = req.params;
    const { email } = req.session.user;
    const db = req.app.get('db');
    db.remove_location([user_id, email])
    .then(response=>{
      console.log(response);
      return res.status(200).send({
        message: "Current user location was removed, thank you",
        userData: req.session.user,
        loggedIn: true
      })
    })
    .catch(err=>console.log(`Error occurred while removing location, ${err}`))
  },
  logout: (req, res)=>{
    req.session.destroy();
    // res.redirect('http://localhost:3000/#/shop'); // should replace the redirect URL to CURRENT
    return res.status(200).send({ message: 'Logout successful, please come again', userData: null, loggedIn: false })
    }
}






