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

    app.get("/api/expenses/:id", function(req, res) {
        db.Expense.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function(dbExpense) {
            res.json(dbExpense);
        });
    });
    
    app.post("/api/expenses", function(req, res) {
        db.Expense.create(req.body).then(function(dbExpense) {
            res.json(dbExpense);
        });
    });

    app.put("/api/expenses", function(req, res) {
        db.Expense.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbExpense) {
                res.json(dbExpense);
            });
    });
};