import { param, validationResult } from "express-validator";

export const validarId = param("id").isInt({ min: 1 });

// Middleware verifaciones
export const verificarValidaciones = (req, res, next) => {
  const validacion = validationResult(req);
  if (!validacion.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Falla de validacion",
      errores: validacion.array(),
    });
  }
  next();
};

export const formatearMinusculas = (dato) => {
  if (typeof dato === "string") {
    return dato.toLowerCase().trim()
  } else {
    return dato;
  }
};