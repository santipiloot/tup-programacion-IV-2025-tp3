import Usuario from "../models/usuarios.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const usuarioControlador = {
    registro: async (req, res) => {
        try {
            const { nombre, email, contrasenia } = req.body

            const usuarioExistente = await Usuario.obtenerUsuario(email);

            if (usuarioExistente) return res.status(400).json({ success: false, message: "Ese email ya esta registrado" })

            const passwordHasheada = await bcrypt.hash(contrasenia, 12);

            const usuario = await Usuario.registro(nombre, email, passwordHasheada);

            res.status(201).json({
                success: true, data: {
                    id: usuario.insertId,
                    nombre,
                    email
                }
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ success: false, message: "Error al registrar al usuario " })
        }
    },
    login: async (req, res) => {
        try {
            const { email, contrasenia } = req.body;
            const usuario = await Usuario.obtenerUsuario(email);

            if (!usuario) {
                return res.status(400).json({ success: false, message: "Email o contraseña incorrecta" });
            }

            const coincide = await bcrypt.compare(contrasenia, usuario.password_hash);
            if (!coincide) {
                return res.status(400).json({ success: false, message: "Email o contraseña incorrecta" });
            }

            const payload = { id: usuario.id, email: usuario.email }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "4h"
            });

            res.status(200).json({ success: true, token });

        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Error al intentar iniciar sesion" });
        }
    },
};

export default usuarioControlador;