import express from "express";
import vehiculoController from "../controllers/vehiculos.js";

const router = express.Router();

router.get("/", vehiculoController.getAll);
router.post("/", vehiculoController.create);
router.put("/:id", vehiculoController.update);
router.delete("/:id", vehiculoController.delete);

export default router;