module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {
                  food: DataTypes.INTEGER,
        transportation: DataTypes.INTEGER,
                  rent: DataTypes.INTEGER,
                 other: DataTypes.INTEGER,
               leisure: DataTypes.INTEGER, 
   },
   {tableName: "Categories"}
);
    Category.associate = function (models) {
        Category.hasMany(models.Expense, {
            onDelete: "no action"
        });
    };
    return Category;
};