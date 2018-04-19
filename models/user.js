module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user", {
        name: {
                 type: DataTypes.STRING,
            allowNull: false
        },
        userName: {
            type: DataTypes.STRING,
       allowNull: false
   },
        password: {
            type: DataTypes.STRING,
       allowNull: false
   }
    });

    User.associate = function (models) {
        User.hasMany(models.Budget, {
            onDelete: "cascade"
        });
    };

    User.associate = function(models) {
        User.hasMany(models.Expenses, {
            onDelete: "cascade"
        });
    };
    User.associate = function (models) {
        User.hasMany (models.Stocks, {
            onDelete: "cascade"
        });
    };
    return User;
};