const express = require("express");

const app = express();
const port = 8080;
const hostname = "localhost";
const configViewEngine = require("./src/config/viewEngine");
const webRoutes = require("./src/routers/web");
const apiRoutes = require("./src/routers/api");

configViewEngine(app);

app.use(express.json());

app.use("/", webRoutes);
app.use("/api", apiRoutes);

app.listen(port, hostname, () => {
	console.log(`App running on http://${hostname}:${port}/`);
});
