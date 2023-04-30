//### Tuve problemas con __dirname, lo solucione con esto ####
import path from "path"
const __dirname = path.resolve()
//##########################################################\\

// INICIA APP EXPRESS
import express from 'express'
const app = express()
const port = 3000

// Enviar un HTML a la raiz del enrutamiento
app.get('/', (req, res) => {
  res.sendFile("./static/index.html", {
    root: __dirname
  })
})

app.get('/user', (req, res) => res.send("user"))
app.get('/dash', (req, res) => res.send("dash"))
app.get('/root', (req, res) => res.send("root"))


// La funcion muestra un mensaje si no se encuentra la ruta que se inglesa en la URL del navegador.
app.use((req, res) => {
  res.sendFile("./static/page_not_found.html", {
    root: __dirname
  })
})

app.listen(port, () => console.log(`App lanzada en: http://localhost:${port}`))
