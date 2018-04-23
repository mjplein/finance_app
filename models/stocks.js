module.exports = function (sequelize, DataTypes) {
    var Stock = sequelize.define("Stock", {
        id: {     type: DataTypes.INTEGER,
                  allowNull: false,
                  autoIncrement: true,
                  primaryKey: true,
        },
           stock_name: DataTypes.STRING,
        category_name: DataTypes.STRING,
         stocks_value: DataTypes.INTEGER,
        initial_value: DataTypes.INTEGER,
          risen_value: DataTypes.INTEGER,
         fallen_value: DataTypes.INTEGER
    });
    Stock.associate = function (models) {
        Stock.belongsTo(models.User, {
           
        });
    };
    return Stock;
};