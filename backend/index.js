import express from "express";
import { conectarDB } from "./database.js";
import vehiculosRoutes from "./routes/vehiculos.js"

conectarDB();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  // Responder con string
  res.send("Hola mundo!");
});

app.use('/vehiculos', vehiculosRoutes);

app.listen(port, () => {
    console.log(`La app esta funcionando en el puerto ${port}`);
})