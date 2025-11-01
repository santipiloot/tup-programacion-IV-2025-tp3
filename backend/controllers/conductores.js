import Conductor from "../models/conductores.js"

const conductorController = {
    getAll: async (req, res) => {
        try {
            const conductores = await Conductor.getAll();
            res.status(200).json({ success: true, data: conductores });

        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, mesage: "Error al obtener los conductores" });
        }
    },
    create: async (req, res) => {
        try {
            const { nombre, apellido, dni, licencia, vencimiento_licencia } = req.body;

            const conductor = await Conductor.create(nombre, apellido, dni, licencia, vencimiento_licencia);

            res.status(201).json({
                success: true,
                data: {
                    id: conductor.insertId,
                    nombre,
                    apellido,
                    dni,
                    licencia,
                    vencimiento_licencia
                }
            })

        } catch (error) {
            console.error(error)
            res.status(500).json({ success: false, message: "Error al crear el conductor" })
        }
    },
    update: async (req, res) => {
        try {
            const id = Number(req.params.id)
            const { nombre, apellido, dni, licencia, vencimiento_licencia } = req.body;

            await Conductor.update(nombre, apellido, dni, licencia, vencimiento_licencia, id);

            res
                .status(200)
                .json({
                    success: true,
                    data: {
                        id,
                        nombre,
                        apellido,
                        dni,
                        licencia,
                        vencimiento_licencia
                    }
                })

        } catch (error) {
            console.error(error);
            res
                .status(500)
                .json({ success: false, message: "Error al actualizar el conductor"})
        }
    },
    delete: async (req, res) => {
    try {
      const id = Number(req.params.id)

      Conductor.delete(id)

      res.status(200).json({ success: true, data: id })

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error al eliminar el conductor" })
    }
  },
}

export default conductorController