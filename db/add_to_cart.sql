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
)