select * from cart_items
where user_id = $1, cart_id = $2;