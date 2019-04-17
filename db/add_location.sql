update users
set city = $2, state = $3
where user_email = $1; 