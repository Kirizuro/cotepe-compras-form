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
<<<<<<< HEAD
    } catch (error) {
      throw error;
=======
    } catch (err) {
      throw err;
>>>>>>> 05df81d676ba986e8219d23602e318b2f0f99e86
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
<<<<<<< HEAD
    } catch (error) {
      throw error;
=======
    } catch (err) {
      throw err;
>>>>>>> 05df81d676ba986e8219d23602e318b2f0f99e86
    }
  },

  async parceiros(req, res) {
    try {
      await sql.connect(connection);
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
<<<<<<< HEAD
      throw error;
=======
      throw err;
>>>>>>> 05df81d676ba986e8219d23602e318b2f0f99e86
    }
  }
};

module.exports = Querys;
