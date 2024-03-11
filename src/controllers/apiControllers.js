const { app } = require("../config/firebase-config");
const { getFirestore } = require("@firebase/firestore");

const db = getFirestore(app);

async function testApi() {
	return "Hello from the server!";
}

module.exports = {
	testApi,
};
