select sum(products.price*cart_items.qty) from cart_items
join products on cart_items.product_id = products.product_id
where user_id = $1 and cart_id = $2;
