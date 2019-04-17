select user_id, user_email, user_hash from users
where username = $1;