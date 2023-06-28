const pool = require("../db");

const getAllTasks = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM task ORDER BY id")
        return res.status(200).json(result.rows)
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

module.exports = getAllTasks;
