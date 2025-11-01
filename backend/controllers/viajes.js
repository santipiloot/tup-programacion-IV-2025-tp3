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
    },
    create: async (req, res) => {
        try {
            const { vehiculo_id, conductor_id, fecha_salida, fecha_llegada, origen, destino,
                kilometros, observaciones } = req.body;

            const viaje = await Viaje.create(vehiculo_id, conductor_id, fecha_salida, fecha_llegada, origen, destino, kilometros, observaciones);

            res.status(201).json({
                success: true,
                data: {
                    id: viaje.insertId,
                    vehiculo_id,
                    conductor_id,
                    fecha_salida,
                    fecha_llegada,
                    origen,
                    destino,
                    kilometros,
                    observaciones
                }
            })

        } catch (error) {
            console.error(error)
            res.status(500).json({ success: false, message: "Error al crear el viaje" })
        }
    },
}

export default viajeController