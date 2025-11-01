import { db } from "../database.js"

const Viaje = {
    getAll: async () => {
        const sql = "SELECT * FROM viajes"
        const [rows] = await db.execute(sql)
        return rows;
    }
}

export default Viaje