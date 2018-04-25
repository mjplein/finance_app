module.exports = function (sequelize, DataTypes) {
    var Expense = sequelize.define("Expense", {
               amount: DataTypes.DECIMAL(10.2),
          description: DataTypes.STRING,
          expenseType: DataTypes.BOOLEAN
    });
    
    Expense.associate = function (models) {
        Expense.belongsTo(models.User, { 
           foreignKey: {
            allowNull: false}
        });
    //     Expense.belongsTo(models.Category, {  ------When we integrate categories, this would be uncommented, not just "dead code"
    //         allowNull: false
    // })
    };

    return Expense;
};