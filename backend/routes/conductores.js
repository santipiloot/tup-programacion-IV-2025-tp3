import express from "express"
import conductorControlador from "../controllers/conductores.js"
import { validarBody } from "../middlewares/validaciones/conductores-validacion.js";
import { verificarValidaciones, validarId } from "../middlewares/validaciones/verificar-validacion.js";

const router = express.Router();

router.get("/", conductorControlador.obtenerTodos)
router.get("/kilometros/:id", [validarId, verificarValidaciones], conductorControlador.obtenerKm);
router.post("/", [validarBody , verificarValidaciones], conductorControlador.crear)
router.put("/:id", [validarId, validarBody , verificarValidaciones], conductorControlador.actualizar)
router.delete("/:id", [validarId,verificarValidaciones], conductorControlador.eliminar)

export default router;