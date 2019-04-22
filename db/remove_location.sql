update users
set city = '', state = ''
where user_email = $2 and user_id = $1; 