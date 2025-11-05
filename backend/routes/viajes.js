import express from "express"
import viajeControlador from "../controllers/viajes.js"
import { verificarValidaciones, validarId } from "../middlewares/validaciones/verificar-validacion.js";
import { validarBody, validarQuerys } from "../middlewares/validaciones/viajes-validacion.js";


const router = express.Router()

router.get("/", [validarQuerys, verificarValidaciones], viajeControlador.obtener)
router.post("/", [validarBody, verificarValidaciones], viajeControlador.crear);
router.put("/:id", [validarId, validarBody, verificarValidaciones], viajeControlador.actualizar);
router.delete("/:id", [validarId, verificarValidaciones], viajeControlador.eliminar);

export default router;