module.exports = function (sequelize, DataTypes) {
    var Expenses = sequelize.define("expense", {
        category_name: DataTypes.STRING,
         amount_spent: DataTypes.DECIMAL(10.2),
          where_spent: DataTypes.STRING,
           when_spent: DataTypes.DATEONLY
    });
    Expenses.associate = function (models) {
        Expenses.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Expenses;
};