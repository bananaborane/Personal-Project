select products.product_id, products.title, products.description, products.image_url, products.type, products.price, cart_items.qty, cart_items.size
from products
join cart_items on products.product_id = cart_items.product_id
where user_id = $1 and cart_id = $2;