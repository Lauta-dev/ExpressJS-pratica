//### Tuve problemas con __dirname, lo solucione con esto ####
import path from "path";
const __dirname = path.resolve();
//##########################################################\\

// RUTAs DEL EQUIPO
let tmp = "/tmp/img-vscode";
let descargas = "/home/lautaro/Descargas"
//##########################################################\\

// INICIA APP EXPRESS
import express from "express";
import { isBoxedPrimitive } from "util/types";
const app = express();
const port = 3000;



// Enviar un HTML a la raiz del enrutamiento
app.get("/", (req, res) => {
  res.sendFile("./static/html/index.html", {
    root: __dirname,
  });
});

app.get("/user", (req, res) => res.send("user"));
app.get("/dash", (req, res) => res.send("dash"));
app.get("/root", (req, res) =>
  res.sendFile("./static/html/cuenta.html", { root: __dirname })
);

// METODOS HTTP
// get = enviar | post = guardar en servidor | put = modificar | delete = eliminar un elemento

app.get("/productos", (req, res) => res.send("Lista de productos:"));
app.post("/productos", (req, res) => res.send("Creando productos"));
app.put("/productos", (req, res) => res.send("Actualizando productos"));
app.delete("/productos", (req, res) => res.send("Eliminando productos"));
app.patch("/productos", (req, res) => res.send("Actualizando unos productos"));

app.get("/sonido", (req, res) => res.sendFile(`${tmp}/a.png`));
app.get("/sync", (req, res) => res.sendFile(`${descargas}/a.png`));

// http response

// enviar json
app.get("/home", (req, res) =>
  res.json({
    name: "lautaro",
    lastname: "ruben",
    ago: "21",
    addres: {
      postal: 4004,
      street: "Greet street 1241",
    },
  })
);

app.get("/toto", (req, res) => res.sendStatus(204)); // mandar un codigo de estado

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// reques body
app.post("/juegos", (req, res) => {
  // imprimir el body de la peticion http
  console.log(req.body)
  res.send("PlayStation")
});



app.listen(port, () => console.log(`App lanzada en: http://localhost:${port}`));
//##########################################################\\
// La funcion muestra un mensaje si no se encuentra la ruta que se inglesa en la URL del navegador.
// se tiene que agrear al final de script
app.use((req, res) =>
  res
    .status(404)
    .sendFile("./static/html/page_not_found.html", { root: __dirname })
);
