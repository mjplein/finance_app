module.exports = function (sequelize, DataTypes) {
    var Budget = sequelize.define("Budget", {
        // id: {        type: DataTypes.INTEGER,
        //         allowNull: false,
        //     autoIncrement: true,
        //        primaryKey: true,
        // },
           category_name: DataTypes.STRING,
          category_value: DataTypes.INTEGER,
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