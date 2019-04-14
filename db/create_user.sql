insert into users (
    user_email,
    user_hash,
    username,
    city,
    state
) values (
    $1,
    $2,
    $3,
    '',
    ''
)
returning user_id, user_email, username;

