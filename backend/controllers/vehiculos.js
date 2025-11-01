import Vehiculo  from "../models/vehiculos.js";

const vehiculoController = {
  getAll: async (req, res) => {
    try {
      const vehiculos = await Vehiculo.getAll();
      res.status(200).json({success: true, data: vehiculos});

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener vehículos' });
    }
  }
};

export default vehiculoController;