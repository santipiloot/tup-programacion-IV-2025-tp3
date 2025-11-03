import express from "express"
import conductorControlador from "../controllers/conductores.js"

const router = express.Router();

router.get("/", conductorControlador.obtenerTodos)
router.get("/kilometros/:id", conductorControlador.obtenerKm);
router.post("/", conductorControlador.crear)
router.put("/:id", conductorControlador.actualizar)
router.delete("/:id", conductorControlador.eliminar)

export default router;