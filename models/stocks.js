module.exports = function (sequelize, DataTypes) {
    var Stocks = sequelize.define("Stock", {
           stock_name: DataTypes.STRING,
        category_name: DataTypes.STRING,
         stocks_value: DataTypes.INTEGER,
        initial_value: DataTypes.INTEGER,
          risen_value: DataTypes.INTEGER,
         fallen_value: DataTypes.INTEGER
    });
    Stocks.associate = function (models) {
        Stocks.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Stocks;
};