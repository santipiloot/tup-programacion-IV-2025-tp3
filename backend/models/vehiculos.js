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
    }
}

export default Vehiculo;