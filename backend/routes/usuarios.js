import express from "express"
import usuarioControlador from "../controllers/usuarios.js"
import { validarNombre, validarEmail, validarContrasenia } from "../middlewares/validaciones/usuarios-validacion.js";
import { verificarValidaciones } from "../middlewares/validaciones/verificar-validacion.js";

const router = express.Router();

router.post("/registro", [validarNombre, validarEmail, validarContrasenia, verificarValidaciones], usuarioControlador.registro)
router.post("/login",[validarEmail, validarContrasenia, verificarValidaciones], usuarioControlador.login)

export default router;