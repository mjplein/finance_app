module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("user", {
        name: {
                 type: DataTypes.STRING,
            allowNull: false
        },
        userName: DataTypes.STRING,
        password: DataTypes.STRING,

    });

    User.associate = function (models) {
        User.hasMany(models.Budget)
    }
}