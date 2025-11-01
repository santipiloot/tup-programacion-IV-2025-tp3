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
    update: async (nombre, apellido, dni, licencia, vencimiento_licencia, id) => {
        const sql = "UPDATE conductores SET nombre=?, apellido=?, dni=?, licencia=?, vencimiento_licencia=? WHERE id=?";
        await db.execute(sql, [nombre, apellido, dni, licencia, vencimiento_licencia, id])
    },
    delete: async (id) => { 
        await db.execute("DELETE FROM conductores WHERE id=?", [id]);
    }
}

export default Conductor;