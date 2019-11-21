const express = require('express');

const routes = express.Router();

const Querys = require('./controllers/Querys');

routes.get('/vendas', Querys.vendas);
routes.get('/funcionarios', Querys.funcionarios);

module.exports = routes;
