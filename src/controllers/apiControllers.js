const { app } = require("../config/firebase-config");
const {
	getFirestore,
	doc,
	collection,
	addDoc,
	getDocs,
	query,
	where,
} = require("@firebase/firestore");

const db = getFirestore(app);

const createHobby = async (url, title, description, tags, userId) => {
	const tagObject = tags.reduce((obj, tag, index) => {
		obj[`tag${index + 1}`] = tag;
		return obj;
	}, {});

	const hobbyData = {
		img: url,
		title: title,
		description: description,
		tags: tagObject,
		userId: doc(db, "users", userId),
	};

	await addDoc(collection(db, "hobbies"), hobbyData);
};
const getHobbiesByUserId = async (userId) => {
	const userRef = doc(db, "users", userId);
	const q = query(collection(db, "hobbies"), where("userId", "==", userRef));
	const querySnapshot = await getDocs(q);
	const hobbies = querySnapshot.docs.map((doc) => doc.data());
	return hobbies;
};

module.exports = {
	createHobby,
	getHobbiesByUserId,
};
