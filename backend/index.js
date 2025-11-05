import express from "express";
import { conectarDB } from "./database.js";
import vehiculosRoutes from "./routes/vehiculos.js"
import conductoresRoutes from "./routes/conductores.js";
import viajesRoutes from "./routes/viajes.js";
import usuariosRoutes from "./routes/usuarios.js";
import authConfig  from "./middlewares/auth.js";

conectarDB();

const app = express();
const port = 3000;

app.use(express.json());

authConfig();

app.get("/", (req, res) => {
  // Responder con string
  res.send("Hola mundo!");
});

app.use("/vehiculos", vehiculosRoutes);
app.use("/conductores", conductoresRoutes)
app.use("/viajes", viajesRoutes)
app.use("/usuarios", usuariosRoutes)

app.listen(port, () => {
    console.log(`La app esta funcionando en el puerto ${port}`);
})