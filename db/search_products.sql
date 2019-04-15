select * from products
where title like "%" || $1 || "%" or description like "%" || $1|| "%" or type like "%" || $1 || "%"


-- double pipes (||) are the concatentation operator
