const sql = require('mssql');

const config = {
  user: process.env.MSSQLCON_USER,
  password: process.env.MSSQLCON_PASSWORD,
  database: process.env.MSSQLCON_DATABASE,
  server: process.env.MSSQLCON_SERVER,
  Trusted_connection: true
};

module.exports = configCon = `mssql://${config.user}:${config.password}@${config.server}/${config.database}`;
