const express = require('express');

const routes = express.Router();

const Querys = require('./controllers/Querys');
const Backup = require('./controllers/Backup');

routes.get('/vendas', Querys.vendas);
routes.get('/funcionarios', Querys.funcionarios);
routes.post('/backup', Backup.inserir);

module.exports = routes;
