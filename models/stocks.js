module.exports = function (sequelize, DataTypes) {
    var Stocks = sequelize.define("stock", {category_name: DataTypes.STRING});
    Stocks.associate = function (models) {
        Stocks.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Stocks;
};