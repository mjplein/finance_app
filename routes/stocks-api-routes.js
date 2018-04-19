var db = require("../models");

module.exports = function(app) {
    app.get("/api/stocks", function(req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        db.Stock.findAll({
            where: query,
            include: [db.User]
        }).then(function(dbStock) {
            res.json(dbStock);
        });
    });

    app.get("/api/stocks/:id", function(req, res) {
        db.Stock.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Stock]
        }).then(function(dbStock) {
            res.json(dbStock);
        });
    });

    app.post("/api/stocks", function(req, res){
        db.Stock.create(req.body).then(function(dbStock) {
            res.json(dbStock);
        });
    });

    app.put("/api/stocks", function(req,res) {
        db.Stock.update(
            req.body,
                {
                    where: {
                        id: req.bodyid
                    }
                }).then(function(dbStock) {
                    res.json(dbStock);
                });
    });
};