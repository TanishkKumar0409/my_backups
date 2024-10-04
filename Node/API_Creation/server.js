import express from "express"
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const PORT = process.env.PORT;

const App = express();

App.use(bodyParser.json());

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const staticPath = path.join(__dirname, "src/");

App.use(express.static(staticPath));


App.get("/a", (req, res) => {
  return res.end("hello");
});
App.get("/b", (req, res) => {
  return res.send("hello");
});

App.listen(PORT, () => {
  console.log(`Server Start at http://localhost:${PORT}`);
});
