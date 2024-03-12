const cards = document.querySelectorAll(".profileCard .card");
cards.forEach(function (card) {
	card.addEventListener("click", function () {
		this.style.transform =
			this.style.transform === "rotateY(180deg)"
				? "rotateY(0)"
				: "rotateY(180deg)";
	});
});

const matchBtn = document.querySelectorAll(".match");

matchBtn.forEach(function (btn) {
	btn.addEventListener("click", function () {
		window.location.href = "/chat-new";
	});
});
