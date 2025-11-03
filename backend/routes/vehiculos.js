import express from "express";
import vehiculoControlador from "../controllers/vehiculos.js";

const router = express.Router();

router.get("/", vehiculoControlador.obtenerTodos);
router.get("/kilometros/:id", vehiculoControlador.obtenerKm);
router.post("/", vehiculoControlador.crear);
router.put("/:id", vehiculoControlador.actualizar);
router.delete("/:id", vehiculoControlador.eliminar);

export default router;