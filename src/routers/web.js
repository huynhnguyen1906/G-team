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

router.get("/profile", (req, res) => {
	res.render("profile.ejs");
});

router.get("/create-profile", (req, res) => {
	res.render("create-profile.ejs");
});
router.get("/notification", (req, res) => {
	res.render("notification.ejs");
});
module.exports = router;
