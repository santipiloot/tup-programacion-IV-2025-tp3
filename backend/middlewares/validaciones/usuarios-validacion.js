import { body } from "express-validator";

export const validarEmail = [
    body("email")
        .notEmpty()
        .matches("^[a-zA-Z0-9.@]+$")
        .isEmail()
]

export const validarContrasenia = [
    body("contrasenia")
        .notEmpty()
        .isStrongPassword({
            minLength: 8, // Minimo de 8 caracteres
            minLowercase: 1, // Al menos una letra en minusculas
            minUppercase: 0, // Letras mayusculas opcionales
            minNumbers: 1, // Al menos un número
            minSymbols: 0, // Símbolos opcionales
        })];

export const validarNombre = [
    body("nombre")
        .notEmpty()
        .isAlpha("es-ES", { ignore: " " })
        .isLength({ min: 2 }),
]
