insert into orders (
    user_id,
    cart_id
) values (
    $1,
    $2
)

insert into carts (
    user_id
) values (
    $1
)

select cart_id from carts 
where user_id = $1;

-- do we have to delete from carts table?

