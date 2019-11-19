const express = require('express');
const sql = require('mssql');

const config = require('./server');

const conn = require('./server');
const quere = 'select * from dbo.funcionarios';

const app = express();

const getQuery = async query => {
  try {
    await sql.connect('mssql://sa:141018@localhost/master');
    const result = await sql.query(`select * from dbo.${query}`);
    console.dir(result);
  } catch (err) {
    console.log(err);
  }
};

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    message: getQuery('vendas')
  });
});

router.post('/', (req, res) => {
  res.json({
    message: getQuery('vendas')
  });
});

app.use(express.json());
app.use('/', router);

const port = 3000;
app.listen(port);
console.log('API Funcionando');
