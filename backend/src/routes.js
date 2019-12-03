const express = require('express');

const routes = express.Router();

const Querys = require('./controllers/Querys');
const Backup = require('./controllers/Backup');

routes.get('/vendas', Querys.vendas);
routes.get('/funcionarios', Querys.funcionarios);
routes.get('/parceiros', Querys.parceiros);
routes.get('/backupShow', Backup.mostrar);
routes.post('/backup', Backup.inserir);

module.exports = routes;
