const { app } = require("../config/firebase-config");
const {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	query,
	orderBy,
	deleteDoc,
	doc,
	updateDoc,
	getDoc,
} = require("@firebase/firestore");

const db = getFirestore(app);
const bookmarksRef = collection(db, "bookmarks");

async function fetchBookmarks() {
	const q = query(bookmarksRef, orderBy("createAt"));
	try {
		const querySnapshot = await getDocs(q);
		const bookmarks = [];
		querySnapshot.forEach((doc) => {
			bookmarks.push({
				id: doc.id,
				data: doc.data(),
			});
		});
		return bookmarks;
	} catch (error) {
		console.error("Error getting documents: ", error);
		throw error;
	}
}

async function addBookmark(bookmarkData) {
	try {
		await addDoc(bookmarksRef, bookmarkData);
		console.log("Document successfully written!");
	} catch (error) {
		console.error("Error writing document: ", error);
		throw error;
	}
}

async function deleteBookmark(bookmarkId) {
	try {
		await deleteDoc(doc(db, "bookmarks", bookmarkId));
		console.log("Document successfully deleted!");
	} catch (error) {
		console.error("Error deleting document: ", error);
		throw error;
	}
}

async function updateBookmark(bookmarkId, updatedData) {
	try {
		await updateDoc(doc(db, "bookmarks", bookmarkId), updatedData);
		console.log("Document successfully updated!");
	} catch (error) {
		console.error("Error updating document: ", error);
		throw error;
	}
}
module.exports = {
	fetchBookmarks,
	addBookmark,
	deleteBookmark,
	updateBookmark,
};
