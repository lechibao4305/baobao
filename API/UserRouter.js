const express = require("express");
const userRoutes = express.Router();
// Load User model
const User = require("./User.model.js");
const csrf = require("csurf");
const csrfProtection = csrf();
userRoutes.use(csrfProtection);
userRoutes.get("/Login", function(req, res, next) {
  res.render("Login", { csrfToken: req.csrfToken() });
});

module.exports = userRoutes;
