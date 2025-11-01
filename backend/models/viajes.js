import { db } from "../database.js"

const Viaje = {
    getAll: async () => {
        const sql = "SELECT * FROM viajes"
        const [rows] = await db.execute(sql)
        return rows;
    },
    create: async (vehiculo_id, conductor_id, fecha_salida, fecha_llegada, origen, destino, kilometros, obervaciones) => {
        const params = [vehiculo_id, conductor_id, fecha_salida, fecha_llegada, origen, destino, kilometros, obervaciones]

        const sql = "INSERT INTO viajes (vehiculo_id, conductor_id, fecha_salida, fecha_llegada, origen, destino, kilometros, observaciones) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        const [result] = await db.execute(sql, params);
        return result;
    }
}

export default Viaje