import Vehiculo from "../models/vehiculos.js";

const vehiculoControlador = {
  obtenerTodos: async (req, res) => {
    try {
      const vehiculos = await Vehiculo.obtenerTodos();
      res.status(200).json({ success: true, data: vehiculos });

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error al obtener vehículos" });
    }
  },
  crear: async (req, res) => {
    try {
      const { marca, modelo, patente, anio, capacidad_carga } = req.body;

      const vehiculo = await Vehiculo.crear(marca, modelo, patente, anio, capacidad_carga);

      res.status(201).json({
        success: true,
        data: {
          id: vehiculo.insertId,
          marca,
          modelo,
          patente,
          anio,
          capacidad_carga
        }
      })

    } catch (error) {
      console.error(error)
      res.status(500).json({ success: false, message: "Error al crear el vehiculo" })
    }
  },
  actualizar: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const { marca, modelo, patente, anio, capacidad_carga } = req.body;

      await Vehiculo.actualizar(marca, modelo, patente, anio, capacidad_carga, id);

      res
        .status(200)
        .json({
          success: true,
          data: {
            id,
            marca,
            modelo,
            patente,
            anio,
            capacidad_carga
          }
        })

    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: "Error al actualizar el vehiculo" })
    }
  },
  eliminar: async (req, res) => {
    try {
      const id = Number(req.params.id)

      Vehiculo.eliminar(id)

      res.status(200).json({ success: true, data: id })

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error al eliminar el vehiculo" })
    }
  },
  obtenerKm: async (req, res) => {
    try {
      const id = Number(req.params.id);
      const kilometros = await Vehiculo.obtenerKm(id)

      if (!kilometros) {
        return res.status(200).json({ success: true, data: 0 })
      }

      res.status(200).json({ success: true, data: kilometros })

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Algo salio mal al calcular los kilometros totales del vehiculo" })
    }
  }
};

export default vehiculoControlador;