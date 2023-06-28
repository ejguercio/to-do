const pool = require("../db");

const postTask = async (req, res) => {
    try {
        const { title, description } = req.body
        if(!title || !description) throw Error ("missing data")
        await pool.query("INSERT INTO task (title, description) VALUES ($1, $2)", [
            title,
            description,
        ]);
        return res.status(200).json({message: "task created"})
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }

};

module.exports = postTask;
