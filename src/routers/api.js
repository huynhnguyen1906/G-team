const express = require("express");
const router = express.Router();
const { testApi } = require("../controllers/apiControllers");

// GET all bookmarks
router.get("/test", async (req, res) => {
	try {
		const mes = await testApi();
		res.json(mes);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
