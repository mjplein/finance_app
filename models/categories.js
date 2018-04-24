module.exports = function (sequelize, DataTypes) {
    var Category = sequelize.define("Category", {   
category_name: DataTypes.STRING
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