const express = require('express');
const sql = require('mssql');
const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');

dotenv.config();

const config = {
  user: 'sa',
  password: '141018',
  database: 'master',
  server: 'localhost\\SQLEXPRESS',
  Trusted_connection: true
};

const routes = require('./Routes');

routes.use(bodyParser.urlencoded({ extended: false }));
routes.use(bodyParser.json());

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
