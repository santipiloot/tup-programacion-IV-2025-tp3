import express from "express"
import viajeController from "../controllers/viajes.js"

const router = express.Router()

router.get("/", viajeController.getAll)
router.post("/", viajeController.create);

export default router;