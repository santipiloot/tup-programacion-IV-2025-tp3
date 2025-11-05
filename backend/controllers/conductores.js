import Conductor from "../models/conductores.js"

const conductorControlador = {
  obtenerTodos: async (req, res) => {
    try {
      const conductores = await Conductor.obtenerTodos();
      res.status(200).json({ success: true, data: conductores });

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, mesage: "Error al obtener los conductores" });
    }
  },
  crear: async (req, res) => {
    try {
      const { nombre, apellido, dni, licencia, vencimiento_licencia } = req.body;

      const verificacionDni = await Conductor.obtenerDni(dni);

      if (verificacionDni.length > 0) {
        return res.status(400)
          .json({ success: false, message: "Ya hay un conductor registrado con ese DNI" });
      }

      const conductor = await Conductor.crear(nombre, apellido, dni, licencia, vencimiento_licencia);

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
  actualizar: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const { nombre, apellido, dni, licencia, vencimiento_licencia } = req.body;

      const verificacionDni = await Conductor.obtenerDni(dni);

      if (verificacionDni.length > 0) {
        return res.status(400)
          .json({ success: false, message: "Ya hay un conductor registrado con ese DNI" });
      }
      
      await Conductor.actualizar(nombre, apellido, dni, licencia, vencimiento_licencia, id);

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
        .json({ success: false, message: "Error al actualizar el conductor" })
    }
  },
  eliminar: async (req, res) => {
    try {
      const id = Number(req.params.id)

      Conductor.eliminar(id)

      res.status(200).json({ success: true, data: id })

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error al eliminar el conductor" })
    }
  },
  obtenerKm: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const kilometros = await Conductor.obtenerKm(id)

      if (!kilometros) {
        return res.status(200).json({ success: true, data: 0 })
      }

      res.status(200).json({ success: true, data: kilometros })

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Algo salio mal al mostrar los kilometros totales del conductor" })
    }
  }
}

export default conductorControlador