module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Categorie", {
                  food: DataTypes.INTEGER,
        transportation: DataTypes.INTEGER,
                  rent: DataTypes.INTEGER,
                 other: DataTypes.INTEGER,
               leisure: DataTypes.INTEGER
   });
    Category.associate = function (models) {
        Category.hasMany(models.Expense, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        });
    };
    return Category;
};