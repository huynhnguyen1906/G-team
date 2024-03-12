window.onload = function () {
	const main = document.querySelector(".main");
	fetch("/api/hobbies")
		.then((response) => response.json())
		.then((data) => {
			data.forEach((hobby) => {
				const html = `
                <div class="profileCard">
                    <div class="topText">
                        <span></span>
                        <p>${hobby.title}</p>
                        <div class="gradationText"></div>
                    </div>
                    <div class="card">
                        <div class="profileContent">
                            <div class="profileImg">
                                <img src="${hobby.img}" alt="" />
                            </div>
                            <div class="profileInfo">
                                <div class="userIcon">
                                    <img src="${hobby.userAvatar}" alt="icon" width="80" height="80"/>
                                </div>
                                <div class="bio">
                                    <div class="profileTag">
                                        <div class="tag">${hobby.tags.tag1}</div>
                                        <div class="tag">${hobby.tags.tag2}</div>
                                    </div>
                                    <div class="name">${hobby.userName}<span>さん</span></div>
                                    <div class="desTitle">${hobby.title}</div>
                                    <div class="des">${hobby.description}</div>
                                </div>
                            </div>
                        </div>
                        <div class="bioDesCard">
                            <div class="title">${hobby.title}</div>
                            <div class="des">${hobby.Description}</div>
                        </div>
                    </div>
                    <div class="buttonBox">
                        <div class="like"></div>
                        <div class="match">話してみる？</div>
                    </div>
                </div>
            `;
				main.innerHTML += html;
			});
		})
		.catch((error) => console.error("Error:", error));
};

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
