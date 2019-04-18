update cart_items
set qty = qty + $5
where user_id = $1, cart_id = $2, product_id = $3, size = $4;

select * from cart_items
where user_id = $1 and cart_id = $2;
