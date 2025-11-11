import { body } from "express-validator";

export const validarBody = [
  body("marca")
    .isAlpha("es-ES", { ignore: " " }).withMessage("El nombre de la marca no puede llevar caracteres especiales")
    .notEmpty().withMessage("La marca no puede estar vacia")
    .isLength({ min: 2 }).withMessage("El nombre de la marca es demasiado corto"),
  body("modelo")
    .isAlphanumeric("es-ES", { ignore: " " }).withMessage("El modelo no puede tener caracteres especiales")
    .notEmpty().withMessage("El modelo no puede estar vacio")
    .isLength({ min: 2 }).withMessage("El modelo es demasiado corto"),
  body("patente")
    .isAlphanumeric("es-ES", { ignore: " " }).withMessage("La patente no puede contener caracteres especiales")
    .notEmpty().withMessage("La patente no puede estar vacia")
    .isLength({ min: 5 }).withMessage("La patente es muy corta"),
  body("anio")
    .notEmpty()
    .isInt({ min: 1990 }).withMessage("El año del auto es erroneo")
    .custom((value) => {
      const hoy = new Date().getFullYear();
      const año = value;

      if (año > hoy) {
        throw new Error("El año del auto es erroneo");
      }
      return true;
    }),
  body("capacidad_carga")
    .notEmpty()
    .isFloat({ min: 50, max: 2000 }).withMessage("La capacidad de carga es invaldia")
];