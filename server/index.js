import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
const PORT=8000
//components
import connection from "./database/db.js";
import Router from "./routes/route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router);
connection();

app.listen(PORT, () => {
  console.log(`The server is running on localhost:https:${PORT}`);
});
// Db
