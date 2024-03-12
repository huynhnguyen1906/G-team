const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.render("index.ejs");
});

router.get("/signup", (req, res) => {
	res.render("signup.ejs");
});

router.get("/home", (req, res) => {
	res.render("home.ejs");
});

module.exports = router;
