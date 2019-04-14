update table users
set city = $2, state = $3
where users.user_email = $1; 