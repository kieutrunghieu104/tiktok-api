import express from "express";
import morgan from "morgan";
import { engine } from "express-handlebars";
import path from "path";
import { fileURLToPath } from "url";
import routers from "./routes/index.js";
import * as db from "./config/db/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Connect to DB
db.connect();

// api
routers(app);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});