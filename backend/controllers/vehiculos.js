import Vehiculo from "../models/vehiculos.js";

const vehiculoController = {
  getAll: async (req, res) => {
    try {
      const vehiculos = await Vehiculo.getAll();
      res.status(200).json({ success: true, data: vehiculos });

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al obtener vehículos" });
    }
  },
  create: async (req, res) => {
    try {
      const { marca, modelo, patente, anio, capacidad_carga } = req.body;

      const vehiculo = await Vehiculo.create(marca, modelo, patente, anio, capacidad_carga);

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
      res.status(500).json({ message: "Error al crear el vehiculo" })
    }
  },
  update: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const { marca, modelo, patente, anio, capacidad_carga } = req.body;

      await Vehiculo.update(marca, modelo, patente, anio, capacidad_carga, id);

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
        .json({ message: "Error al actualizar el vehiculo" })
    }
  }
};

export default vehiculoController;