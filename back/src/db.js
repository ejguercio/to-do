const { Pool } = require("pg");
require("dotenv").config();
//const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

// const pool = new Pool({
//     user: DB_USER,
//     password: DB_PASSWORD,
//     host: DB_HOST,
//     port: DB_PORT,
//     database: DB_NAME
// })
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
})

pool.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to database");
    }
})
module.exports = pool;
