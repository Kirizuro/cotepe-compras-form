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
  },

  async parceiros(req, res) {
    try {
      await sql.connect('mssql://claudio:Io985641cl@@SRVSAP/COTEPE_Producao');
      //await sql.connect('mssql://sa:141018@localhost/master');
      //const result = await sql.query(`select * from dbo.parceiros`);
      const result = await sql.query(
        `select * from dbo.COTEPE_PARCEIRODENEGOCIO_CNPJ order by Nome ASC`
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
      console.log(error);
    }
  }
};

module.exports = Querys;
