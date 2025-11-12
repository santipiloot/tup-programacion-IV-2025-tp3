import Vehiculo from "../models/vehiculos.js";
import { formatearMinusculas } from "../middlewares/validaciones/verificar-validacion.js"

// Logica de negocio 
// Errores va en un array para manejarlos mejor en el frontend
const vehiculoControlador = {
  obtener: async (req, res) => {
    try {
      const vehiculos = await Vehiculo.obtener();
      res.status(200).json({ success: true, data: vehiculos });

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, errores: ["Error al obtener vehículos"] });
    }
  },
  crear: async (req, res) => {
    try {
      const { marca, modelo, patente, anio, capacidad_carga } = req.body;

      const marcaForm = formatearMinusculas(marca)
      const modeloForm = formatearMinusculas(modelo)
      const patenteForm = formatearMinusculas(patente)

      const verificacionPatente = await Vehiculo.obtenerPatente(patenteForm);

      if (verificacionPatente) {
        return res.status(400)
          .json({ success: false, errores: ["Ya hay un vehiculo registrado con esa patente"] });
      }

      const vehiculo = await Vehiculo.crear(marcaForm, modeloForm, patenteForm, anio, capacidad_carga);

      res.status(201).json({
        success: true,
        data: {
          id: vehiculo.insertId,
          marca: marcaForm,
          modelo: modeloForm,
          patente: patenteForm,
          anio,
          capacidad_carga
        }
      })

    } catch (error) {
      console.error(error)
      res.status(500).json({ success: false, errores: ["Error al crear el vehiculo"] })
    }
  },
  actualizar: async (req, res) => {
    try {
      const id = Number(req.params.id)
      const { marca, modelo, patente, anio, capacidad_carga } = req.body;

      const marcaForm = formatearMinusculas(marca)
      const modeloForm = formatearMinusculas(modelo)
      const patenteForm = formatearMinusculas(patente)

      const verificacionPatente = await Vehiculo.obtenerPatente(patenteForm);

      if (verificacionPatente && verificacionPatente.id !== id) {
        return res.status(400)
          .json({ success: false, errores: ["Ya hay un vehiculo registrado con esa patente"] });
      }

      await Vehiculo.actualizar(marcaForm, modeloForm, patenteForm, anio, capacidad_carga, id);

      res
        .status(200)
        .json({
          success: true,
          data: {
            id,
            marca: marcaForm,
            modelo: modeloForm,
            patente: patenteForm,
            anio,
            capacidad_carga
          }
        })

    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, errores: ["Error al actualizar el vehiculo"] })
    }
  },
  eliminar: async (req, res) => {
    try {
      const id = Number(req.params.id)

      await Vehiculo.eliminar(id)

      res.status(200).json({ success: true, data: id })

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, errores: ["Error al eliminar el vehiculo"] })
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
      res.status(500).json({ success: false, errores: ["Algo salio mal al calcular los kilometros totales del vehiculo"] })
    }
  },
  obtenerPorId: async (req, res) => {
    try {
      const id = Number(req.params.id)

      const vehiculo = await Vehiculo.obtenerPorId(id);

      res.status(200).json({ success: true, data: vehiculo });

    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, errores: ["Error al obtener el vehiculo"] })
    }
  }
};

export default vehiculoControlador;