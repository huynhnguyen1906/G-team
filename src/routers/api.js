const express = require("express");
const router = express.Router();
const { firebaseConfig } = require("../config/firebase-config");

router.get("/firebase-config", (req, res) => {
	res.json(firebaseConfig);
});

module.exports = router;
