var db = require("../models");

module.exports = function(app) {
    app.get("/api/expenses", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        db.Expense.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbExpense) {
            res.json(dbExpense);
        });
    });

    
}