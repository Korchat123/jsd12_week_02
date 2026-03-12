SELECT * FROM users;
SELECT * FROM address;
SELECT ad.home_address,u.first_name,u.last_name FROM address ad JOIN users u ON ad.username=u.username WHERE u.username='BY01208';
SELECT * FROM address ad JOIN users u ON ad.username=u.username WHERE u.username='BY01208';
