module.exports = function (sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
        desired_spending: DataTypes.INTEGER
    });
    
    Budget.associate = function (models) {
        Budget.belongsTo(models.User, { 
             allowNull: false,
            //  foreignKey: 'UserId'
        
        });
    };
    return Budget;
};