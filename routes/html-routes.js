var path = require("path");

module.exports = function(app) {

    //Index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"))
    });

    app.get("/users", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/users.html"));
    });

    //Budget HTML route
    app.get("/budget", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/budget.html"))
    });

    app.get("/categories", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/categories.html"));
    });

    app.get("/expenses", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/expenses.html"));
    });

    app.get("/stocks", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stocks.html"));
    });
};