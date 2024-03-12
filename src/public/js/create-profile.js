const userIcon = document.querySelector(".profile_icon");
const userName = document.querySelector(".name");

const user = JSON.parse(sessionStorage.getItem("user"));

if (user) {
	userIcon.src = user.photoURL;
	userName.value = user.displayName;
	console.log(user);
}

const imageUpload = document.querySelector(".image_upload");
const imageSelect = document.querySelector(".image_select");

const imageSelectText = document.querySelector(".image_select p");

imageUpload.addEventListener("change", function (e) {
	const reader = new FileReader();
	reader.onload = function (e) {
		const currentImage = imageSelect.querySelector("img");
		if (currentImage) {
			imageSelect.removeChild(currentImage);
		}

		const img = document.createElement("img");
		img.src = e.target.result;
		imageSelect.appendChild(img);
	};
	reader.readAsDataURL(e.target.files[0]);
	imageSelectText.style.display = "none";
});

imageSelect.addEventListener("click", function () {
	imageUpload.click();
});

const hobbySelect = document.querySelector(".hobby_select");

hobbySelect.addEventListener("click", function () {
	const span = hobbySelect.querySelector("span");
	if (span) {
		span.style.display = "none";
	}
});
