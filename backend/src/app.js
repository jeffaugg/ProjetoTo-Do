const express = require('express');
const router = require('./router');

const app = express();

app.use(router); // está dizendo que o app vai usar o router sempre

module.exports = app;


