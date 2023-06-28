const pool = require("../db");

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("DELETE FROM task WHERE id=$1", [id])
        if (result.rowCount === 0) throw Error("something is failed")

        return res.status(200).send("task deleted")

    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
};

module.exports = deleteTask;
