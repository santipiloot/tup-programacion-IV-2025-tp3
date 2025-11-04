import Vehiculo from "../models/vehiculos.js";
import Viaje from "../models/viajes.js";

const viajeControlador = {
    obtenerTodos: async (req, res) => {
        try {
            const viajes = await Viaje.obtenerTodos();
            res.status(200).json({ success: true, data: viajes });

        } catch (error) {
            console.error(error);
            res.status(500).json({ succes: false, message: "Error al obtener los viajes" })
        }
    },
    crear: async (req, res) => {
        try {
            const { vehiculo_id, conductor_id, fecha_salida, fecha_llegada, origen, destino,
                kilometros, observaciones } = req.body;

            const viaje = await Viaje.crear(vehiculo_id, conductor_id, fecha_salida, fecha_llegada, origen, destino, kilometros, observaciones);

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
    actualizar: async (req, res) => {
        try {
            const id = Number(req.params.id)
            const { vehiculo_id, conductor_id, fecha_salida, fecha_llegada, origen, destino, kilometros, observaciones } = req.body;

            await Viaje.actualizar(vehiculo_id, conductor_id, fecha_salida, fecha_llegada, origen, destino, kilometros, observaciones, id)
        
            res.status(200).json({success: true, data: {
                id,
                vehiculo_id,
                conductor_id,
                fecha_llegada,
                fecha_salida,
                origen,
                destino,
                kilometros,
                observaciones
            }})

        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Error al actualizar el viaje" })
        }
    }
}

export default viajeControlador;