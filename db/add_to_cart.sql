insert into cart_items (
    cart_id,
    user_id,
    product_id,
    qty,
    size
) values (
    $1,
    $2,
    $3,
    $4,
    $5
);

select * from cart_items
where user_id = $2 and cart_id = $1;
