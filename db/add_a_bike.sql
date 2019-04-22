insert into bikes (
    user_id,
    title,
    description,
    make,
    model,
    bike_size,
    bike_type,
    wheel_size,
    image_url
) values (
    ${user_id},
    ${title},
    ${description},
    ${make},
    ${model},
    ${bike_size},
    ${bike_type},
    ${wheel_size},
    ${image_url}
);

select * from bikes;