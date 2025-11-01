import { db } from "../database.js";

const Vehiculo = {
    getAll: async () => {
        const sql = "SELECT * FROM vehiculos";
        const [rows] = await db.execute(sql)
        return rows;
    }
}

export default Vehiculo;