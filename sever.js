const express = require("express");
//import express form 'express';
const app = express();
const port = 8080;
const hostname = "localhost";
const configViewEngine = require("./src/config/viewEngine");
const db = require("./src/config/firebase-config");
console.log(db);
configViewEngine(app);

app.get("/", (req, res) => {
	res.render("index.ejs");
});

app.listen(port, hostname, () => {
	console.log(`App running on http://${hostname}:${port}/`);
});
