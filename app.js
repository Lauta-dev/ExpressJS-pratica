import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';
import { router } from "./src/public/router/home.js";

const app = express();
const puerto = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(path.join(__dirname, "./src/public/"))

app.use(router)

app.set("view engine", 'ejs')
app.set("views", path.join(__dirname, "./src/public/"))

app.listen(puerto);
