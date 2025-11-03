import express from "express"
import viajeControlador from "../controllers/viajes.js"

const router = express.Router()

router.get("/", viajeControlador.obtenerTodos)
router.post("/", viajeControlador.crear);

export default router;