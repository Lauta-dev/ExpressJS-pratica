import express from "express";
import { fileURLToPath } from 'url';
import path from 'path';

import { router } from "./router/home.js";
import { accons } from "./router/accons.js";

const app = express();
const puerto = 4000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", 'ejs')
app.set("views", path.join(__dirname, "views"))

app.use(router)
app.use(accons)

app.listen(puerto);
