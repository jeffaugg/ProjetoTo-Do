const express = require('express');
const router = require('./router');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json()); // está dizendo que o app vai usar o express.json sempre que receber uma requisição
app.use(router); // está dizendo que o app vai usar o router sempre

module.exports = app;


