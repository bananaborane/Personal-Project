select users.user_id, users.username, users.city, users.state, bikes.bike_id, bikes.title, bikes.description, bikes.make, bikes.model, bikes.bike_size, bikes.bike_type, bikes.wheel_size
from bikes
join users on users.user_id = bikes.user_id;