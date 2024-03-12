const loginWithGoogleBtn = document.querySelector(".google_all");
// Fetch Firebase configuration from server
fetch("/api/firebase-config")
	.then((response) => response.json())
	.then((config) => {
		firebase.initializeApp(config);

		var provider = new firebase.auth.GoogleAuthProvider();

		loginWithGoogleBtn.addEventListener("click", function () {
			firebase
				.auth()
				.signInWithPopup(provider)
				.then(function (result) {
					const user = result.user;
					console.log("Login successful:", user);

					sessionStorage.setItem("user", JSON.stringify(user));
				})
				.catch(function (error) {
					console.log(error);
				});
		});
	});
