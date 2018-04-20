CREATE DATABASE finance_db;
USE finance_db;
CREATE TABLE expenses (
	category_name VARCHAR(255),
    amount_spent DECIMAL (10,2),
    where_spent VARCHAR(255),
    when_spent DATE
);

