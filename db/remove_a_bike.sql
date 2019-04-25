delete from bikes
where user_id = $1 and bike_id = $2;

select * from bikes;