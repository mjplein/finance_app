var db = require("../models");

module.exports = function(app) {
    app.get("/api/category", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        db.Category.findAll({
              where: query,
            include: [db.Category]
        }).then(function(dbCategory) {
            res.json(dbCategory);
        });
    });

    app.get("/api/category/:id", function(req, res) {
        db.Category.findOne({
            where: {
                id:req.params.id
            },
            include: [db.User]
        }).then(function(dbCategory) {
            res.json(dbCategory);
        });
    });

    app.post("/api/category", function(req, res) {
        db.Category.create(req.body).then(function(dbCategory) {
            res.json(dbCategory);
        });
    });

    app.put("/api/category", function(req, res) {
        db.Category.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function(dbCategory) {
                res.json(dbCategory);
            });
    });
};