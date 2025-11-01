import { db } from "../database.js";

const Vehiculo = {
    getAll: async () => {
        const sql = "SELECT * FROM vehiculos";
        const [rows] = await db.execute(sql)
        return rows;
    },
    create: async (marca, modelo, patente, anio, capacidad_carga) => {
        const sql = "INSERT INTO vehiculos (marca, modelo, patente, anio, capacidad_carga) VALUES (?, ?, ?, ?, ?)";
        const [result] = await db.execute(sql, [marca, modelo, patente, anio, capacidad_carga]);
        return result;
    },
    update: async (marca, modelo, patente, anio, capacidad_carga, id) => {
        const sql = "UPDATE vehiculos SET marca=?, modelo=?, patente=?, anio=?, capacidad_carga=? WHERE id=?";
        await db.execute(sql, [marca, modelo, patente, anio, capacidad_carga, id])
    }, 
    delete: async (id) => { 
        await db.execute("DELETE FROM vehiculos WHERE id=?", [id]);
    }, 
    getTotalKm: async(id) => {
        const sql = "SELECT SUM(kilometros) AS total_km FROM viajes WHERE vehiculo_id=?"
        const [rows] = await db.execute(sql, [id])
        return rows[0].total_km 
    }
}

export default Vehiculo;