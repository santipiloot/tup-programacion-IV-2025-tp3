import { db } from "../database.js";

const Conductor = {
    getAll: async () => { 
        const sql = "SELECT * FROM conductores"
        const [rows] = await db.execute(sql)
        return rows;
    },
    create: async (nombre, apellido, dni, licencia, vencimiento_licencia) => {
        const sql = "INSERT INTO conductores (nombre, apellido, dni, licencia, vencimiento_licencia) VALUES (?, ?, ?, ?, ?)";
        const [result] = await db.execute(sql, [nombre, apellido, dni, licencia, vencimiento_licencia]);
        return result;
    },
}

export default Conductor;