require('dotenv').config();
const { SERVER_PORT, CONNECTION_STRING, SECRET } = process.env;
const express = require('express');
const app = express();
const session = require('express-session')
const massive = require('massive');
const authCtrl = require('./controllers/authCtrl')
const PORT = 3005;
const checkForSession = require('./middlewares/checkForSession');
const productCtrl = require('./controllers/productCtrl');
const marketplaceCtrl = require('./controllers/marketplaceCtrl');


app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    app.listen(SERVER_PORT, ()=>{console.log(`server is currently listening to port: ${SERVER_PORT}`)})
    console.log('db connected, you may now try for requests');
});

app.use(session({
    resave: true,
    saveUninitialized: false,
    secret: SECRET,
    cookie: {
        maxAge: 1000*60*60*24
    }
}))


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


app.post('/collections/addtocart', productCtrl.addToCart)
app.post('/collections/decrementqty', productCtrl.decrementQty)
app.put('/auth/addlocation', authCtrl.addLocation);
app.delete('/auth/deletelocation/:id', authCtrl.deleteLocation)
app.get('/auth/logout', authCtrl.logout)







