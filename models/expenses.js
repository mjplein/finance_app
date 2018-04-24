module.exports = function (sequelize, DataTypes) {
    var Expense = sequelize.define("Expense", {
               amount: DataTypes.DECIMAL(10.2),
          description: DataTypes.STRING,
          expenseType: DataTypes.BOOLEAN
    });
    
    Expense.associate = function (models) {
        Expense.belongsTo(models.User, { 
            allowNull: false
        }),
        Expense.belongsTo(models.Category, {
            allowNull: false
    })
    };

    return Expense;
};