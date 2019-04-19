update users
set city = null, state = null
where user_email = $2 and user_id = 1; 