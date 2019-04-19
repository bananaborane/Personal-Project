update cart_items
set qty = qty - 1
where user_id = $1 and cart_id = $2 and product_id = $3 and size = $4;

select * from cart_items
where user_id = $1 and cart_id = $2;