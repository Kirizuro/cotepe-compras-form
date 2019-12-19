const sql = require('mssql');
const connection = require('../services/Connect');

const Querys = {
  async vendas(req, res) {
    try {
      await sql.connect(connection);
      const result = await sql.query(
        `select * from dbo.acompanhamento_App_Nome_Vendedores`
      );
      return res.json({
        result,
        status: 200
      });
    } catch (error) {
      throw error;
    }
  },

  async funcionarios(req, res) {
    try {
      await sql.connect(connection);
      const result = await sql.query(
        `select * from dbo.Acompanhamento_Tabela_de_Vendas order by Nome asc`
      );
      return res.json({
        result,
        status: 200
      });
    } catch (error) {
      throw error;
    }
  },

  async parceiros(req, res) {
    try {
      await sql.connect(connection);
      const result = await sql.query(
        `select * from dbo.Acompanhamento_App_Relação_de_PN order by CardName ASC`
      );

      return res.json({
        result,
        status: 200
      });
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Querys;
