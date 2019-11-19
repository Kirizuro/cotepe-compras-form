const sql = require('mssql');

const config = {
  user: 'sa',
  password: '141018',
  database: 'master',
  server: 'localhost\\SQLEXPRESS',
  Trusted_connection: true
};

const conn =
  'Server=localhost\\SQLEXPRESS; Database=master; Trusted_connection=true;';

const getQuery = async query => {
  try {
    const con = await new sql.ConnectionPool(config);
    const result = await con.query`SELECT * from dbo.${query}`;
    console.dir(result);
    console.log('conectou');
  } catch (err) {
    console.log(err);
  }
};

const getData = () => {
  let connection = new sql.ConnectionPool(config);
  connection.query('SELECT * FROM dbo.funcionarios');
};
