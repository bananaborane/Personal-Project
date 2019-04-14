create table users (
    user_id serial primary key,
    user_email varchar(50),
    user_hash text,
    username varchar(50),
    city varchar(50),
    state varchar(50)
);

create table bikes (
    bike_id serial primary key,
    user_id int,
    foreign key (user_id) references users (user_id),
    title varchar(150),
    description varchar(500),
    make varchar(50),
    model varchar(50),
    bike_size varchar(15),
    bike_type varchar(20),
    wheel_size int
);

create table products (
    product_id serial primary key,
    title varchar(150),
    description varchar(500),
    size varchar(15),
    image_url text
);

create table carts (
    cart_id serial primary key,
    user_id int,
    foreign key (user_id) references users (user_id)
);

create table cart_items (
    cart_items_id serial primary key,
    cart_id int,
    foreign key (cart_id) references carts (cart_id),
    user_id int,
    foreign key (user_id) references users (user_id),
    product_id int,
    foreign key (product_id) references products (product_id),
    qty int,
    size varchar(15)
);

create table orders (
    orders_id serial primary key,
    cart_id int,
    foreign key (cart_id) references carts (cart_id),
    user_id int,
    foreign key (user_id) references users (user_id) 
);


