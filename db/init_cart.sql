insert into carts (
    user_id
) values (
    $1
);

select cart_id from carts 
where user_id = $1;
