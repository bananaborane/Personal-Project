require('dotenv').config();
const { SERVER_PORT, CONNECTION_STRING, SECRET, SECRET_STRIPE } = process.env;
const express = require('express');
const socket = require('socket.io')
const app = express();
const http = require('http').Server(app)
// const server = require('http').createServer(app);
const io = socket(http);
// module.exports.io
const session = require('express-session')
const massive = require('massive');
const authCtrl = require('./controllers/authCtrl')
const PORT = 3005;
const checkForSession = require('./middlewares/checkForSession');
const productCtrl = require('./controllers/productCtrl');
const marketplaceCtrl = require('./controllers/marketplaceCtrl');
const stripe = require('stripe')(SECRET_STRIPE)

// app.use(express.static(__dirname + '/public'))

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    http.listen(SERVER_PORT, ()=>{console.log(`server is currently listening to port: ${SERVER_PORT}`)})
    console.log('db connected, you may now try for requests');
});


// const io = socket(server);

app.use( express.static( `${__dirname}/../build` ) );
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });

io.on('connection', function(socket){
    console.log('an user has connected');
    io.emit('WELCOME', { greeting: 'welcome to marketplace chat'})

    socket.on('ENTER', function(data){
        console.log(`User ${data.id} has joined`)
        io.emit('LOG_ID', data)
    })

    socket.on('SEND_MESSAGE', function(msg){
        console.log('message: ' + msg.message)
        io.emit('RECEIVE_MESSAGE', msg)
    })

    socket.on('SEND_DM', function(msg){
        console.log('direct message: ' + msg.message)
        console.log(`a convo between ${msg.myId} and ${msg.theirId}`)
        io.emit('RECIEVE_DM', msg)
    })


    socket.on('disconnect', function(){
      console.log('an user has disconnected');
    });
});



// io.on('connection', function (socket) {
//     socket.emit('news', { hello: 'world' });
//     socket.on('my other event', function (data) {
//       console.log(data);
//     });
//   });

// io.on('connection', (socket) => {
//     console.log(socket.id);

//     socket.on('SEND_MESSAGE', function(data){
//         io.emit('RECEIVE_MESSAGE', data);
//     })
// });
  

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SECRET,
    cookie: {
        maxAge: 1000*60*60*24
    }
}))

app.get(`/retrievesession`, authCtrl.retrieveSession)
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/collections', productCtrl.displayProductsByType)
app.post('/displaycart', productCtrl.displayCart)
app.get('/collections/mens/:id', productCtrl.displayTheProduct)
app.get('/collections/womens/:id', productCtrl.displayTheProduct)
app.get('/collections/headwear/:id', productCtrl.displayTheProduct)
app.get('/collections/footwear/:id', productCtrl.displayTheProduct)
app.get('/collections/misc/:id', productCtrl.displayTheProduct)



app.use(checkForSession) // checkForSession middleware has to be below login/register


app.get('/shop/collections/marketplace/:id', marketplaceCtrl.displayTheBike)
app.get('/displaybikes', marketplaceCtrl.displayBikes)
app.get('/collections/gettotalprice', productCtrl.getTotalPrice)
app.get('/auth/logout', authCtrl.logout)
app.put('/auth/addlocation', authCtrl.addLocation);
app.put('/checkout', productCtrl.checkout)
app.post('/addabiketomarketplace', marketplaceCtrl.addBike)
app.post('/collections/incrementqty', productCtrl.incrementQty)
app.post('/collections/product/retrieveqty', productCtrl.retrieveQty)
app.post('/collections/addtocart', productCtrl.addToCart)
app.post('/collections/decrementqty', productCtrl.decrementQty)
app.delete('/auth/removelocation/:id', authCtrl.deleteLocation)
app.delete('/removebikefrommarketplace/:id', marketplaceCtrl.removeBike)

app.post(`/stripecharge`, async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: req.body.totalPrice*100,
        currency: "usd",
        description: "pinkbike charge",
        source: req.body.stripeToken
      }); 

      res.json({status});
    } catch (err) {
        console.log(`Something happened with stripe checkout on server side: ${err}`)
      res.status(500).end();
    }
  })







