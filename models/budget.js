module.exports = function (sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
           category_name: DataTypes.STRING,
          category_value: DataTypes.INTEGER,
        desired_spending: DataTypes.INTEGER
    });
    
    Budget.associate = function (models) {
        Budget.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Budget;
};