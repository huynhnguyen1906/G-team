const urlList = document.querySelector(".urlList");
const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const title = document.querySelector(".linkTitle");
	const url = document.querySelector(".linkInput");
	const description = document.querySelector(".linkDescription");
	const titleValue = title.value.trim();
	const urlValue = url.value.trim();
	const descriptionValue = description.value.trim();
	const bookmarkData = {
		title: titleValue,
		url: urlValue,
		createAt: new Date(),
		description: descriptionValue || null,
	};

	try {
		await fetch("/api/bookmarks", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(bookmarkData),
		});
		console.log("Bookmark added successfully!");
		window.location.reload();
	} catch (error) {
		console.error("Error adding bookmark: ", error);
	}
});

document.addEventListener("DOMContentLoaded", async () => {
	try {
		const response = await fetch("/api/bookmarks");
		const bookmarks = await response.json();
		bookmarks.forEach((bookmark) => {
			const html = `
            <ul class="urlItem" data-id="${bookmark.id}"> 
                <li class="title">${bookmark.data.title}</li>
                <li class="itemUrl">
                    <a class="url" href="${bookmark.data.url}">${
				bookmark.data.url
			}</a>
                </li>
                ${
									bookmark.data.description
										? `<li class="description">${bookmark.data.description}</li>`
										: ""
								}
                <li><button class="delete" data-id="${
									bookmark.id
								}">Delete</button></li>
                <li><button class="edit" data-id="${
									bookmark.id
								}">Edit</button></li>
            </ul>`;
			urlList.insertAdjacentHTML("beforeend", html);
		});
	} catch (error) {
		console.error("Error fetching bookmarks: ", error);
	}
});

urlList.addEventListener("click", async (e) => {
	if (e.target.classList.contains("delete")) {
		const bookmarkId = e.target.getAttribute("data-id");
		try {
			await fetch(`/api/bookmarks/${bookmarkId}`, {
				method: "DELETE",
			});
			console.log("Bookmark deleted successfully!");
			e.target.parentElement.parentElement.remove();
		} catch (error) {
			console.error("Error deleting bookmark: ", error);
		}
	}
});
