console.log("Hello from index.js");

async function fetchData() {
	const response = await fetch("/api/test");
	const data = await response.json();

	const p = document.querySelector("p");
	p.textContent = data;
}

fetchData().catch((error) => {
	console.error("Error:", error);
});
