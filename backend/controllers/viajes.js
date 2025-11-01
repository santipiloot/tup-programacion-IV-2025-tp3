import Viaje from "../models/viajes.js";

const viajeController = {
    getAll: async (req, res) => {
        try {
            const viajes = await Viaje.getAll();
            res.status(200).json({ success: true, data: viajes });

        } catch (error) {
            console.error(error);
            res.status(500).json({ succes: false, message: "Error al obtener los viajes" })
        }
    }
}

export default viajeController