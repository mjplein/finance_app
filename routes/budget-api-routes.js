var db = require("../models");

module.exports = function(app) {
    app.get("/api/budget", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        db.Budget.findAll({
              where: query,
            include: [db.User]
        }).then(function(dbBudget) {
            res.json(dbBudget);
        });
    });

    app.get("/api/budget/:id", function(req, res) {
        db.Budget.findOne({
            where: {
                id: req.params.id
            },
            include: [db.User]
        }).then(function(dbBudget) {
            res.json(dbBudget);
        });
    });

    app.post("/api/budget", function(req, res) {
        db.Budget.create(req.body).then(function(dbBudget) {
            res.json(dbBudget);
        });
    });

    app.put("/api/budget", function(req, res) {
        db.Budget.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbBudget) {
                res.json(dbBudget);
            });
    });
}