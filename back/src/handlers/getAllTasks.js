const pool = require("../db");
const pageSize = 4;

const getAllTasks = async (req, res) => {
    try {
        // Parámetros de paginación
        // Si no hubiese query page devolvemos la primer pagina
        const { page = 1 } = req.query;
        const offset = (page - 1) * pageSize;

        // Consulta con paginación
        const result = await pool.query("SELECT * FROM task ORDER BY id OFFSET $1 LIMIT $2", [offset, pageSize]);

        // Consulta para contar el total de tareas
        const totalCountResult = await pool.query("SELECT COUNT(*) FROM task");
        const totalCount = parseInt(totalCountResult.rows[0].count, 10);

        return res.status(200).json({ taksPerPage: result.rows, totalTaks: totalCount });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

module.exports = getAllTasks;
