module.exports = function (sequelize, DataTypes) {
    var Budget = sequelize.define("budget", {category_name: DataTypes.STRING});
    Budget.associate = function (models) {
        Budget.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Budget;
};