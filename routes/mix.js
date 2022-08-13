const { Router } = require("express");
const mixRoute = Router();
const { MixController } = require("../controllers");

mixRoute.get("/", MixController.getMixes);
mixRoute.get("/add", MixController.createPage);
mixRoute.post("/add", MixController.create);
mixRoute.get("/edit/:id", MixController.editPage);
mixRoute.post("/edit/:id", MixController.edit);
mixRoute.get("/delete/:id", MixController.delete);

module.exports = mixRoute;