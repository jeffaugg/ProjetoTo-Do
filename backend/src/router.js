const express = require('express');
const tasksController = require('./controllers/tasksController');
const router = express.Router();

router.get('/tasks', tasksController.getAll);


module.exports = router;
// estou exportando o router para que o server.js possa importar ele e usar as rotas que eu definir aqui