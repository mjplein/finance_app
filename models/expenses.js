module.exports = function (sequelize, DataTypes) {
    var Expense = sequelize.define("Expense", {
        category_name: DataTypes.STRING,
        amount_spent: DataTypes.DECIMAL(10.2),
        where_spent: DataTypes.STRING,
        when_spent: DataTypes.DATEONLY
    });
    
    Expense.associate = function (models) {
        Expense.belongsTo(models.Category, {
            foreignKey: {
                allowNull: false
            }
        });


        Expense.belongsTo(models.Expense, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Expense;
};