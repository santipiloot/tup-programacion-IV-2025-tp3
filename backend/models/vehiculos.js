import { db } from "../database.js";

const Vehiculo = {
    obtenerTodos: async () => {
        const sql = "SELECT * FROM vehiculos";
        const [rows] = await db.execute(sql)
        return rows;
    },
    crear: async (marca, modelo, patente, anio, capacidad_carga) => {
        const sql = "INSERT INTO vehiculos (marca, modelo, patente, anio, capacidad_carga) VALUES (?, ?, ?, ?, ?)";
        const [result] = await db.execute(sql, [marca, modelo, patente, anio, capacidad_carga]);
        return result;
    },
    actualizar: async (marca, modelo, patente, anio, capacidad_carga, id) => {
        const sql = "UPDATE vehiculos SET marca=?, modelo=?, patente=?, anio=?, capacidad_carga=? WHERE id=?";
        const [result] = await db.execute(sql, [marca, modelo, patente, anio, capacidad_carga, id])
        return result
    }, 
    eliminar: async (id) => { 
        await db.execute("DELETE FROM vehiculos WHERE id=?", [id]);
    }, 
    obtenerKm: async(id) => {
        const sql = "SELECT SUM(kilometros) AS total_km FROM viajes WHERE vehiculo_id=?"
        const [rows] = await db.execute(sql, [id])
        return rows[0].total_km 
    },
    obtenerPatente: async (patente) => {
        const [rows] = await db.execute("SELECT * FROM vehiculos WHERE patente=?", [patente])
        return rows[0]
    }
}

export default Vehiculo;