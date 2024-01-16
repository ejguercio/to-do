const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const routes = require("./routes/index");

const server = express();
//MIDDLEWARES
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://to-do-one-gold.vercel.app/'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});; //comunicar front y back
server.use(morgan("dev"));
server.use(express.json());

server.use("/", routes)

module.exports = server;
