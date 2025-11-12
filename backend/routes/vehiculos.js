import express from "express";
import vehiculoControlador from "../controllers/vehiculos.js";
import { validarBody  } from "../middlewares/validaciones/vehiculos-validacion.js";
import { verificarValidaciones, validarId } from "../middlewares/validaciones/verificar-validacion.js";

const router = express.Router();

router.get("/", vehiculoControlador.obtener);
router.get("/:id", [validarId, verificarValidaciones], vehiculoControlador.obtenerPorId)
router.get("/kilometros/:id", [validarId, verificarValidaciones], vehiculoControlador.obtenerKm);
router.post("/", [validarBody , verificarValidaciones], vehiculoControlador.crear);
router.put("/:id", [validarId, validarBody, verificarValidaciones], vehiculoControlador.actualizar);
router.delete("/:id", [validarId, verificarValidaciones], vehiculoControlador.eliminar);

export default router;