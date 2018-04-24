module.exports = function (sequelize, DataTypes) {
    var Expense = sequelize.define("Expense", {
         amount_spent: DataTypes.DECIMAL(10.2),
          where_spent: DataTypes.STRING,
           when_spent: DataTypes.DATEONLY
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