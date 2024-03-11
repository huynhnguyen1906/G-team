const express = require("express");
const router = express.Router();
const {
	fetchBookmarks,
	addBookmark,
	deleteBookmark,
	updateBookmark,
} = require("./api");

// GET all bookmarks
router.get("/bookmarks", async (req, res) => {
	try {
		const bookmarks = await fetchBookmarks();
		res.json(bookmarks);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// POST a new bookmark
router.post("/bookmarks", async (req, res) => {
	try {
		await addBookmark(req.body);
		res.status(201).send();
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// DELETE a bookmark
router.delete("/bookmarks/:id", async (req, res) => {
	const id = req.params.id;
	try {
		await deleteBookmark(id);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

// PUT/UPDATE a bookmark
router.put("/bookmarks/:id", async (req, res) => {
	const id = req.params.id;
	try {
		await updateBookmark(id, req.body);
		res.status(204).send();
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
});

module.exports = router;
