const pool = require("../db")

const getTaskById = async (req, res) => {
    try {
        const { id } = req.params
        if (!parseInt(id)) throw Error("id should be a number")
        const result = await pool.query("SELECT * FROM task WHERE id= $1", [id])
        if (result.rows.length === 0) throw Error("task not found")
        res.status(200).json(result.rows[0])

    } catch (error) {
        res.status(400).json({ error: error.message })
    }
};

module.exports = getTaskById;
