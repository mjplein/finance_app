module.exports = function (sequelize, DataTypes) {
    var Expenses = sequelize.define("expense", {category_name: DataTypes.STRING});
    Expenses.associate = function (models) {
        Expenses.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Expenses;
};