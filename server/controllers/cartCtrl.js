const bcrypt = require('bcryptjs');

module.exports = {
    addToCart: async (req, res, next)=>{
        const { id: product_id, size, qty } = req.body;
        qty = 1*qty;
                /// DONT FORGET TO HAVE size || '' IN THE FRONT END
                    /// HATS ARE ONE SIZE FITS ALL
        const { user } = req.session;
        const db = req.app.get("db");
        let cartCheck = await db.check_cart_items([user.id, user.cartId, product_id]);
        if (cartCheck[0]){
            db.add_qty_to_cart_item([user.id, user.cartId, product_id, qty])
            .then(()=>{
                user.cartCount+=qty;
                return res.status(200).send({ message: 'Product quantity increased', loggedIn: true })})
            .catch(err=>console.log(`Something happened when increasing product quantity: ${err}`))

                /// MAKE SURE 'ADD TO CART BUTTON' PASSES IN A QTY OF 1

        } else {
            db.add_to_cart([user.cartId, user.id, product_id, qty, size])
            .then(()=>{
                user.cartCount+=qty;
            })
            .catch(err=>console.log(`Something happened when adding item to cart: ${err}`))
            return res.status(200).send({ message: 'Product Added to Cart', loggedIn: true });
        }
    },
    removeFromCart: async (req, res, next)=>{
        const { id: product_id } = req.body;
        const { user } = req.session;
        const db = req.app.get('db');
        let itemToBeRemoved = await db.retrieve_cart_item_qty([user.id, user.cartId, product_id]);
        db.remove_from_cart([user.id, user.cartId, product_id])
        .then(()=>{
            user.cartCount-=itemToBeRemoved.qty;
            return res.status(200).send({ message: 'Product Removed from Cart', loggedIn: true })
        })
        .catch(err=>console.log(`Something happened while removing item from cart: ${err}`))
    },
    decrementQty: async (req, res)=>{
        const { id: product_id } = req.body;
        const { user } = req.session;
        const db = req.app.get("db");
        let qtyCheck = await db.qty_check([user.id, user.cartId, product_id]);


        if (qtyCheck[0].qty < 1){
            return res.status(200).send({ message:'Cannot have a product with a quantity less than 0', loggedIn: true })
        }
        if (qtyCheck[0].qty == 1){
            db.remove_from_cart([user.id, user.cartId, product_id])
            .then(()=>{
                user.cartCount--;
                return res.status(200).send({ message: 'Product Removed from Cart', loggedIn: true })
            })
            .catch(err=>console.log(`Something happened while removing item from cart: ${err}`))
        }
        if (qtyCheck[0].qty > 1){

            db.decrement_qty_from_cart_item([user.id, user.cartId, product_id, qty])
            .then(()=>{
                return res.status(200).send({ message: 'Product quantity decreased', loggedIn: true 
            })})
            .catch(err=>console.log(`Something happened when decreasing product quantity: ${err}`))
        }

        
    },
    displayCart: (req, res)=>{},
    checkout: (req, res, next)=>{
        const { id: product_id } = req.body;
        const { user } = req.session;
        const db = req.app.get("db");
        db.checkout([user.user_id, user.cart_id])
        .then((res)=>{
            res.status(200).send({ message: 'Cart has been checked out and processed into orders', loggedIn: true })
        })
        .catch(err=>console.log(`Something happened while checking out: ${err}`))
    }
}


