import express from "express";
import vehiculoController from "../controllers/vehiculos.js";

const router = express.Router();

router.get("/", vehiculoController.getAll);

export default router;