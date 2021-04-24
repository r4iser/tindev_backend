require('dotenv').config()
const express = require('express');
const routes = require('./routes.js');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_CLUSTER = process.env.DB_CLUSTER
const DB_DATABASE = process.env.DB_DATABASE
const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.jcd8i.mongodb.net/${DB_DATABASE}?retryWrites=true&w=majority`
mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(db => console.log("Conectado com sucesso ao banco de dados."))
  .catch(err => console.log(">> ERROR: ",err));

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);