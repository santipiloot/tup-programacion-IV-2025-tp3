import { body, query } from "express-validator";

// Validaciones con mensajes

export const validarBody = [
  body("vehiculo_id")
    .notEmpty().withMessage("El vehiculo es obligatorio")
    .isInt({ min: 1 }).withMessage("El ID del vehiculo debe ser positivo")
    .toInt(),
  body("conductor_id")
    .notEmpty().withMessage("El conductor es obligatorio")
    .isInt({ min: 1 }).withMessage("El ID del conductor debe ser positivo")
    .toInt(),
  body("fecha_salida")
    .notEmpty().withMessage("La fecha de salida es obligatoria")
    .isISO8601().withMessage("El formato de la fecha debe ser año-mes-dia")
    .custom((value) => { // Validacion personalizada vista en clase
      const salida = new Date(value);
      const hoy = new Date();
      const limite = new Date();
      limite.setDate(hoy.getDate() + 7);
      if (salida > limite) {
        throw new Error("La fecha de salida puede ser maximo una semana desde el dia de hoy");
      }

      const hace30Dias = new Date(); // Para evitar que carguen "viajes" olvidados
      hace30Dias.setDate(hoy.getDate() - 30);

      if (salida < hace30Dias) {
        throw new Error("La fecha de salida ya supero los 30 dias");
      }

      return true;
    }),
  body("fecha_llegada")
    .notEmpty().withMessage("La fecha de llegada es obligatoria")
    .isISO8601().withMessage("El formato de la fecha debe ser año-mes-dia")
    .custom((value, { req }) => {
      const salida = new Date(req.body.fecha_salida);
      const llegada = new Date(value);
      if (llegada < salida) {
        throw new Error("La fecha de llegada no puede ser anterior a la de salida");
      }
      return true;
    }),
  body("origen")
    .notEmpty().withMessage("El origen no puede estar vacio")
    .isAlpha("es-ES", { ignore: " " }).withMessage("El origen solo puede tener letras y espacios")
    .isLength({ min: 2, max: 50 }).withMessage("El origen debe tener entre 2 y 50 caracteres"),
  body("destino")
    .notEmpty().withMessage("El destino no puede estar vacio")
    .isAlpha("es-ES", { ignore: " " }).withMessage("El destino solo puede contener letras y espacios")
    .isLength({ min: 2, max: 50 }).withMessage("El destino debe tener entre 2 y 50 caracteres"),
  body("kilometros")
    .notEmpty().withMessage("La cantidad de kilometros es obligatoria")
    .isFloat({ min: 1 }).withMessage("Los kilometros no pueden ser 0 o menor")
    .toFloat(),
  body("observaciones")
    .notEmpty().withMessage("Las observaciones son obligatorias")
    .isAlphanumeric("es-ES", { ignore: " .,-/" }).withMessage("Las observaciones no pueden tener caracteres especiales")
    .isLength({ max: 255 }).withMessage("Las observaciones no pueden superar los 255 caracteres"),
];

export const validarQuerys = [
  query("conductor")
    .optional()
    .isInt({ min: 1 }).withMessage("El parámetro conductor debe ser un numero entero válido")
    .toInt(),

  query("vehiculo")
    .optional()
    .isInt({ min: 1 }).withMessage("El parametro vehiculo debe ser un numero entero válido")
    .toInt(),
];
