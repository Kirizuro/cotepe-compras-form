const sql = require('mssql');
const connection = require('../services/Connect');

const Backup = {
  async inserir(req, res) {
    try {
      const body = await req.body;

      const pv = parseInt(body.pv);

      await sql.connect('mssql://sa:141018@localhost/master');

      const pvExist = await sql.query(`SELECT pv FROM dbo.pvs`);

      /*
      const backup = await sql.query(
        `INSERT INTO dbo.teste (
          teste
        )
        values (

          )`
        );*/
      if (pv === pvExist.recordset.length) {
        console.log('pv existe, portanto ele criou dentro do sap');
      } else {
        console.log('pv nao existe, portanto ele nao criou');
      }
      console.log(pv);
      console.log(pvExist.recordset.length);
      /*
      const mainInsert = await sql.query(
        `INSERT INTO dbo.backupForm (
          quem,
          parceiro,
          data,
          funcionarios,
          horas,
          horaExtra,
          viagem,
          veiculos,
          terceiros,
          terceirosFunc,
          crea
        )
        values (
          '${body.quem}',
          '${body.parceiro}',
          '${body.data}',
          '${body.funcionarios}',
          ${body.horas},
          '${body.horasExtras}',
          '${body.viagem}',
          '${body.veiculos}',
          '${body.terceiros}',
          '${body.terceirosFunc}',
          ${body.crea}
          )`
      );
      */
      //console.log(mainInsert);
      //console.log(backup);
      return res.json({
        body: body,
        status: 200
      });
    } catch (error) {
      throw error;
    }
  },

  async mostrar(req, res) {
    try {
      await sql.connect('mssql://sa:141018@localhost/master');

      const result = await sql.query(
        `SELECT * FROM dbo.backupForm ORDER BY id ASC`
      );

      return res.json({
        result,
        status: 200
      });
    } catch (error) {
      throw error;
    }
  },

  async pv(req, res) {
    try {
      await sql.connect(connection);

      const pvExist = await sql.query(
        `SELECT Projeto FROM dbo.[Acompanhanento_Lista_de_PV's] order by Projeto desc`
      );

      return res.json({
        message: pvExist,
        status: 200
      });
    } catch (error) {
      throw error;
    }
  }
};

module.exports = Backup;
