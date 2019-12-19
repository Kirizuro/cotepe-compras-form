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
      const result = await sql.query(`select * from dbo.funcionarios`);
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
      //await sql.connect('mssql://sa:141018@localhost/master');
      //const result = await sql.query(`select * from dbo.parceiros`);
      const result = await sql.query(
        `select * from dbo.Acompanhamento_App_Relação_de_PN order by CardName ASC`
      );

      /*const result = await sql.query(`select * from dbo.Acompanhamento_Parceiros_de_Negocio_Endereco as adress,
                                        dbo.Acompanhamento_Parceiros_de_Negocio_CNPJ_EI as cnpj
                                        where adress.CardCode = cnpj.CardCode order by CardName ASC`);
                                        */
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
