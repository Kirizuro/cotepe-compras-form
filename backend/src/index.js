const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const routes = require('./Routes');

const config = {
  user: 'sa',
  password: '141018',
  database: 'master',
  server: 'localhost\\SQLEXPRESS',
  Trusted_connection: true
};

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
