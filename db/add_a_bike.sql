insert into bikes (
    user_id,
    title,
    description,
    make,
    model,
    bike_size,
    bike_type,
    wheel_size
) values (
    ${user_id},
    ${title},
    ${description},
    ${make},
    ${model},
    ${bike_size},
    ${bike_type},
    ${wheel_size}
);

select * from bikes;