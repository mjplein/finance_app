module.exports = function (sequelize, DataTypes) {
    var Expense = sequelize.define("Expense", {
        id: {     type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        category_name: DataTypes.STRING,
        amount_spent: DataTypes.DECIMAL(10.2),
        where_spent: DataTypes.STRING,
        when_spent: DataTypes.DATEONLY
    });
    
    Expense.associate = function (models) {
        Expense.belongsTo(models.User, { 
        });

        Expense.hasMany(models.Category, {
        });
    };
    return Expense;
};