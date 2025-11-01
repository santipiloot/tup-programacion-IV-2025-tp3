import express from "express"
import conductorController from "../controllers/conductores.js"

const router = express.Router();

router.get("/", conductorController.getAll)
router.post("/", conductorController.create)

export default router;