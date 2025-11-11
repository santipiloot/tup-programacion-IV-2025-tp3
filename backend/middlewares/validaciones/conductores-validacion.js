import { body } from "express-validator";

export const validarBody = [
  body("nombre")
    .isAlpha("es-ES", { ignore: " " }).withMessage("El nombre no puede tener caracteres especiales")
    .notEmpty().withMessage("El nombre no puede estar vacio")
    .isLength({ min: 2 }).withMessage("El nombre es muy corto"),
  body("apellido")
    .isAlpha("es-ES", { ignore: " " }).withMessage("El apellido no puede tener caracteres especiales")
    .notEmpty().withMessage("El apellido no puede estar vacio")
    .isLength({ min: 2 }).withMessage("El apellido es muy corto"),
  body("dni")
    .notEmpty().withMessage("El DNI no puede estar vacio")
    .isInt().withMessage("El DNI deben ser solos numeros")
    .isLength({ min: 6, max: 9 }).withMessage("El DNI debe tener entre 6 y 9 caracteres"),
  body("licencia")
    .notEmpty().withMessage("La licencia no puede estar vacio")
    .isAlphanumeric("es-ES").withMessage("La licencia no puede tener caracteres especiales")
    .isLength({ min: 1 }),
  body("vencimiento_licencia")
    .notEmpty().withMessage("La fecha de la licencia no puede estar vacia")
    .isISO8601() // Esto es para que use el formate año, mes, dia
    .custom((value) => { // Esto lo vimos en clase de los custom asi que me ayude con videos de youtube
      const hoy = new Date();
      const fecha = new Date(value);
      if (fecha < hoy) {
        throw new Error("La licencia esta vencida");
      }
      return true;
    }),
];