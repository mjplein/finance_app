module.exports = function (sequelize, DataTypes) {
    var Categories = sequelize.define("Categorie", {
                  food: DataTypes.INTEGER,
        transportation: DataTypes.INTEGER,
                  rent: DataTypes.INTEGER,
                 other: DataTypes.INTEGER,
               leisure: DataTypes.INTEGER
   });
    Categories.associate = function (models) {
        Categories.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Categories;
};