var path = require("path");

module.exports = function(app) {

    //Index route loads view.html
    app.get("/login", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/indexLogin.html"))
    });

    app.get("/dashboard", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    //Budget HTML route
    // app.get("/budget", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/budget.html"))
    // });

    // app.get("/categories", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/categories.html"));
    // });

    app.get("/budget", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/indexBudget.html"));
    });

    app.get("/analytics", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/indexAnalytics.html"));
    });

    // app.get("/stocks", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/stocks.html"));
    // });
};