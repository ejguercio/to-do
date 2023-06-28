const pool = require("../db");

const putTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        if (!id || !title || !description) throw Error("missing data")
        const result = await pool.query("UPDATE task SET title=$1, description=$2 WHERE id=$3 RETURNING *",
            [title, description, id])
        if (result.rows.length === 0) throw Error("task not founded")
        return res.status(200).send("task updated")
        
    } catch (error) {
        return res.status(400).json({error: error.message})
    }

};

module.exports = putTask;
