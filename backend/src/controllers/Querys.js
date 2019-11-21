const sql = require('mssql');

const Querys = {
  async vendas(req, res) {
    try {
      await sql.connect('mssql://sa:141018@localhost/master');
      const result = await sql.query(`select * from dbo.vendas`);
      return res.json({
        result,
        status: 200
      });
    } catch (err) {
      console.log(err);
    }
  },

  async funcionarios(req, res) {
    try {
      await sql.connect('mssql://sa:141018@localhost/master');
      const result = await sql.query(`select * from dbo.funcionarios`);
      return res.json({
        result,
        status: 200
      });
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports = Querys;
