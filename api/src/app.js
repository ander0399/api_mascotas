const express = require('express');
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const usuarios = require("./routes/usuarios");
const mascotas = require("./routes/mascotas");

const server = express();

server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cors());
server.use(morgan("dev"));
server.use(express.json());

server.use('/usuarios',usuarios);
server.use('/mascotas',mascotas);



module.exports = server;