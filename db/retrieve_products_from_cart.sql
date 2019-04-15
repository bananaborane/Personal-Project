select products.product_id, products.title, products.description, products.size, products.image_url, products.type
from products
join cart_items on products.product_id = cart_items.product_id
where user.id = $1, cart_id = $2;