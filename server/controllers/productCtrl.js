const bcrypt = require("bcryptjs");

module.exports = {
  addToCart: async (req, res, next) => {
    console.log('line 5', req.body)
    let { id, size, qty } = req.body;
    qty = 1 * qty;
    /// DONT FORGET TO HAVE size || '' IN THE FRONT END
    /// HATS ARE ONE SIZE FITS ALL
    const { user } = req.session;
    const db = req.app.get("db");
    let cartCheck = await db.check_cart_items([user.id, user.cartId, id, size])
      .catch(err =>
        console.log(`Something happened while checking cart items: ${err}`)
      );
      console.log(cartCheck)
    if (cartCheck[0]) {
      await db.add_qty_to_cart_item([user.id, user.cartId, id, size, qty])
        .then((response) => {
          db.retrieve_total_price_of_cart([user.id, user.cartId])
          .then((ourResponse)=>{
            console.log('line 22', ourResponse)
            let theBestResponse; 
            db.retrieve_products_from_cart([user.id, user.cartId])
              .then((res)=>{
                console.log('line 26', res)
                theBestResponse = res.data;
              })
              .catch(err=>console.log(`Something happened while retrieving products from cart, ${err}`))
            user.cartCount += qty;
            console.log(ourResponse)


            return res.status(200).send({
              message: "Product quantity increased",
              userData: req.session.user,
              loggedIn: true,
              payload: response,
              payload2: ourResponse,
              payload3: theBestResponse
            });
          })
          .catch(err=>console.log(`Something happened while retrieving total price of cart: ${err}`))

        })
        .catch(err =>
          console.log(
            `Something happened when increasing product quantity: ${err}`
          )
        );

      /// MAKE SURE 'ADD TO CART BUTTON' PASSES IN A QTY OF 1
    } else {
      let response;
      db.add_to_cart([user.cartId, user.id, id, qty, size])
        .then((resp) => {
          user.cartCount += qty;
          response = resp;
          console.log('line 59',resp)
        })
        .catch(err =>
          console.log(`Something happened when adding item to cart: ${err}`)
        );
      return res.status(200).send({
        message: "Product Added to Cart",
        userData: req.session.user,
        loggedIn: true,
        payload: response
      });
    }
  },
  removeFromCart: async (req, res, next) => {
    const { id: product_id } = req.body;
    const { user } = req.session;
    const db = req.app.get("db");
    let itemToBeRemoved = await db
      .retrieve_cart_item_qty([user.id, user.cartId, product_id])
      .catch(err =>
        console.log(
          `Something happened while retrieving qty from cart items: ${err}`
        )
      );
    // captures the QTY from the item to be removed and decrements cartCount by QTY
    db.remove_from_cart([user.id, user.cartId, product_id])
      .then(() => {
        user.cartCount -= itemToBeRemoved.qty;
        return res.status(200).send({
          message: "Product Removed from Cart",
          userData: req.session.user,
          loggedIn: true
        });
      })
      .catch(err =>
        console.log(`Something happened while removing item from cart: ${err}`)
      );
  },
  incrementQty: async (req, res, next)=>{
    let { id: product_id, size, qty } = req.body;
    const { user } = req.session;
    const db = req.app.get("db");
    let qtyCheck = await db.qty_check([user.id, user.cartId, product_id, size])
    .catch(err =>
      console.log(`Something happened while checking qty: ${err}`)
    );
    if (qtyCheck[0].qty < 10){
      let ourResponse = db.add_qty_to_cart_item([user.id, user.cartId, product_id, size, qty])
      let bestResponse = await db.retrieve_products_from_cart([user.id, user.cartId])
      return res.status(200).send({
        message: 'Qty of a certain product has been increased',
        payload2: bestResponse
      })
    }
    return res.status(200).send({
      message: 'Cannot have more than a qty of 10 for a given product'
    })
  },
  decrementQty: async (req, res) => {
    const { size, qty, id: product_id } = req.body;
    const { user } = req.session;
    const db = req.app.get("db");
    let qtyCheck = await db.qty_check([user.id, user.cartId, product_id, size])
      .catch(err =>
        console.log(`Something happened while checking qty: ${err}`)
      );

    if (qtyCheck[0].qty < 1) {
      return res.status(200).send({
        message: "Cannot have a product with a quantity less than 0",
        userData: req.session.user,
        loggedIn: true
      });
    }

    if (qtyCheck[0].qty == 1) {

      let removeFromCartResponse = db.remove_from_cart([user.id, user.cartId, product_id, size])
        .catch(err=>console.log(`Something happened: ${err}`))
      let totalPriceResponse = await db.retrieve_total_price_of_cart([user.id, user.cartId])
        .catch(err=>console.log(`Something happened: ${err}`))
      let cartProductsResponse = await db.retrieve_products_from_cart([user.id, user.cartId])
        .catch(err=>console.log(`Something happened: ${err}`))

        user.cartCount -= qty;
        return res.status(200).send({
          message: "Product removed from cart",
          userData: req.session.user,
          loggedIn: true,
          payload1: removeFromCartResponse,
          payload2: totalPriceResponse,
          payload3: cartProductsResponse
        });


      // db.remove_from_cart([user.id, user.cartId, product_id, size])
      //   .then((response) => {
      //     db.retrieve_total_price_of_cart([user.id, user.cartId])
      //     .then((ourResponse)=>{
      //       user.cartCount -= qty;
      //       console.log(ourResponse)
      //       return res.status(200).send({
      //         message: "Product removed from cart",
      //         userData: req.session.user,
      //         loggedIn: true,
      //         payload: response,
      //         payload2: ourResponse
      //       });
      //     })
      //     .catch(err=>console.log(`Something happened while retrieving total price of cart: ${err}`))
      //     user.cartCount--;
      //   })
      //   .catch(err =>
      //     console.log(
      //       `Something happened while removing item from cart: ${err}`
      //     )
      //   );
    }

    if (qtyCheck[0].qty > 1) {

      let decrementQtyResponse = db.decrement_qty_from_cart_item([user.id, user.cartId, product_id, size])
        .catch(err=>console.log(`Something happened: ${err}`))
      let totalPriceResponse = await db.retrieve_total_price_of_cart([user.id, user.cartId])
        .catch(err=>console.log(`Something happened: ${err}`))
      let cartProductsResponse = await db.retrieve_products_from_cart([user.id, user.cartId])
        .catch(err=>console.log(`Something happened: ${err}`))

        user.cartCount -= qty;
        return res.status(200).send({
          message: "Product removed from cart",
          userData: req.session.user,
          loggedIn: true,
          payload1: decrementQtyResponse,
          payload2: totalPriceResponse,
          payload3: cartProductsResponse
        });


      // db.decrement_qty_from_cart_item([user.id, user.cartId, product_id, size])
      // .then((response) => {
      //   db.retrieve_total_price_of_cart([user.id, user.cartId])
      //   .then((ourResponse)=>{
      //     db.retrieve_products_from_cart([user.id, user.cartId])
      //     user.cartCount -= qty;
      //     console.log(ourResponse)
      //     return res.status(200).send({
      //       message: "Product quantity decreased",
      //       userData: req.session.user,
      //       loggedIn: true,
      //       payload: response,
      //       payload2: ourResponse
      //     });
      //   })
      //   .catch(err=>console.log(`Something happened while retrieving total price of cart: ${err}`))
      //   user.cartCount--;
      // })
      //   .catch(err =>
      //     console.log(
      //       `Something happened when decreasing product quantity: ${err}`
      //     )
      //   );
    }
  },
  displayCart: async (req, res) => {
    const { user } = req.session;
    const db = req.app.get("db");
    console.log('line 227', req.session.user.cartId)
    let productsFromCart = await db
      .retrieve_products_from_cart([user.id, user.cartId])
      .catch(err =>
        console.log(
          `Something happened while retrieving products from cart: ${err}`
        )
      );
      console.log('line 234',productsFromCart)
    if (!productsFromCart[0]) {
      return res
        .status(200)
        .send({ 
          message: "No products to display", 
          loggedIn: true,
          payload: productsFromCart,
          payload2: [{sum: 0}]
         });
    } 
    let myResponse = await db.retrieve_total_price_of_cart([user.id, user.cartId])
    .catch(err=>console.log(`Something happened while retrieving total price of the cart, ${err}`))
    console.log('line 243', myResponse)


    return res.status(200).send({
      message: "Cart is sent",
      userData: req.session.user,
      payload: productsFromCart,
      payload2: myResponse
    }); // can access DETAILS OF EACH PRODUCT with payload
  },
  displayProductsByType: (req, res) => {
    let { type } = req.body;
    // console.log(type)
    let db = req.app.get("db");
    db.display_products_by_type([type])
      .then(response => {
        return res.status(200).send({
          message: "List of products by type has been sent",
          payload: response
        });
      })
      .catch(err =>
        console.log(
          `Something happened while retrieving products by type to display: ${err}`
        )
      );
  },
  displayTheProduct: (req, res)=>{
    let { id } = req.params;
    console.log(req.params, req.session.user)
    let db = req.app.get('db');
    db.retrieve_product_by_id([id])
    .then(response =>{
      return res.status(200).send({ 
        message:'Product by id has been sent', 
        payload: response })
    })
    .catch(err=>console.log(`Something happened while retrieving THE product: ${err}`))

  },
  retrieveQty: async (res, req)=>{
    const { size, id: product_id } = req.body;
    const { user } = req.session;
    const db = req.app.get("db");
    let qtyCheck = await db.qty_check([user.id, user.cartId, product_id, size])
      .catch(err =>
        console.log(`Something happened while checking qty: ${err}`)
      );
    console.log('line 249', qtyCheck)
    if (qtyCheck[0].qty > 0){
      return res.status(200).send({
        message: 'Qty of certain product has been sent',
        userData: req.session.user,
        payload: qtyCheck
      })
    }
  },
  searchProducts: async (req, res) => {
    let { search } = req.query;
    let db = req.app.get("db");
    let searchedProducts = await db
      .search_products([search])
      .catch(err =>
        console.log(`Something happened while searching for products: ${err}`)
      );
    return res.status(200).send({
      message: "Searched products have been sent",
      payload: searchedProducts
    });
  },
  getTotalPrice: async (req, res, next)=>{
    const { user } = req.session;
    let db = req.app.get("db");
    let response = await db.retrieve_total_price_of_cart([user.id, user.cartId])
      .catch(err=>console.log(`Something happened while getting total price of cart: ${err}`))
    console.log(response[0])
    return res.status(200).send({
      message: 'total price of cart has been sent',
      payload: response
    })
  },
  checkout: async (req, res, next) => {
    const { user } = req.session;
    const db = req.app.get("db");
    let ourCart = await db.check_for_empty_cart([user.id, user.cartId]);
    if (!ourCart[0]) {
      return res
        .send(200)
        .send({
          message: "Please add a product to cart to checkout",
          loggedIn: true
        });
    }
    let userCarts = await db
      .checkout([user.id, user.cartId])
      .catch(err =>
        console.log(`Something happened while checking out: ${err}`)
      );
    console.log('line 340', userCarts)
    user.cartId = userCarts[userCarts.length - 1].cart_id; // switches the cart into the NEWEST ONE
    user.cartCount = 0;

    return res.status(200).send({
      message: "Cart has been checked out and processed into orders",
      userData: req.session.user,
      loggedIn: true
    });
  }
};
