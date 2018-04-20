module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {

        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        priorities: {
            type: DataTypes
        }
    });

    User.associate = function (models) {
        User.hasMany(models.Budget, {
            onDelete: "cascade"
        });
    };

    User.associate = function (models) {
        User.hasMany(models.Expenses, {
            onDelete: "cascade"
        });
    };

    User.associate = function (models) {
        User.hasMany(models.Stocks, {
            onDelete: "cascade"
        });
    }
    User.associate = function (models) {
        User.hasMany(models.Categories, {
            onDelete: "cascade"
        });

    };
    
    return User;
};