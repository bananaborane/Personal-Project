update cart_items
set qty = qty + $4
where user_id = $1, cart_id = $2, product_id = $3;