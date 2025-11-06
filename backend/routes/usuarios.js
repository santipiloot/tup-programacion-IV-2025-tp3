import express from "express"
import usuarioControlador from "../controllers/usuarios.js"

const router = express.Router();

router.post("/registro", usuarioControlador.registro)
router.post("/login", usuarioControlador.login)

export default router;