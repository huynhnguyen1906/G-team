const cards = document.querySelectorAll(".profileCard .card");
cards.forEach(function (card) {
	card.addEventListener("click", function () {
		this.style.transform =
			this.style.transform === "rotateY(180deg)"
				? "rotateY(0)"
				: "rotateY(180deg)";
		console.log("ass");
	});
});
