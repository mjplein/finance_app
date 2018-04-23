CREATE DATABASE finance_db;
USE finance_db;
CREATE TABLE expenses (
	category_name VARCHAR(255),
    amount_spent DECIMAL (10,2),
    where_spent VARCHAR(255),
    when_spent DATE
);

-- BUDGET TABLE:
--          category_name: DataTypes.STRING,
--         category_value: DataTypes.INTEGER,
--       desired_spending: DataTypes.INTEGER

-- CATEGORY TABLE:
--          category_name: DataTypes.STRING

-- EXPENSE TABLE: 
--         category_name: DataTypes.STRING,
--          amount_spent: DataTypes.DECIMAL(10.2),
--           where_spent: DataTypes.STRING,
--            when_spent: DataTypes.DATEONLY

-- STOCK TABLE:
--            stock_name: DataTypes.STRING,
--         category_name: DataTypes.STRING,
--          stocks_value: DataTypes.INTEGER,
--         initial_value: DataTypes.INTEGER,
--           risen_value: DataTypes.INTEGER,
--          fallen_value: DataTypes.INTEGER

-- USER TABLE: 
--         userName: {
--             type: DataTypes.STRING,
--             allowNull: false
--         },
--         password: {
--             type: DataTypes.STRING,
--             allowNull: false
--         },
--         email: {
--             type: DataTypes.STRING,
--             allowNull: false
--         },
--         priorities: {
--             type: DataTypes.STRING
--         }
