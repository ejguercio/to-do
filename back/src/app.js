const express = require("express");
const morgan = require("morgan");
const cors =require("cors")
const routes = require("./routes/index");

const server = express();
//MIDDLEWARES
server.use(cors()); //comunicar front y back
server.use(morgan("dev"));
server.use(express.json());

server.use("/", routes)

module.exports = server;
