import express from "express"
import viajeControlador from "../controllers/viajes.js"

const router = express.Router()

router.get("/", viajeControlador.obtener)
router.post("/", viajeControlador.crear);
router.put("/:id", viajeControlador.actualizar);
router.delete("/:id", viajeControlador.eliminar);

export default router;