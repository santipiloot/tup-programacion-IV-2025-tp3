import Usuario from "../models/usuarios.js";
import bcrypt from "bcrypt";

const usuarioControlador = {
    registro: async (req, res) => {
        try {
            const { nombre, email, contrasenia } = req.body

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
    }
}

export default usuarioControlador;