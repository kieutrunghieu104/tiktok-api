const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const path = require("path");
const routers = require("./routes");

const app = express();

const PORT = 3000;

// Static
app.use(express.static(path.join(__dirname, "public")));
// HTTP Logger
app.use(morgan("combined"));
// Template Engine
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// middleware
app.use(express.urlencoded());
app.use(express.json());

routers(app);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});