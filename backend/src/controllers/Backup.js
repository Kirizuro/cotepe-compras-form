const sql = require('mssql');

const Backup = {
  async inserir(req, res) {
    try {
      const body = await req.body;

      await sql.connect('mssql://sa:141018@localhost/master');
      /*
      const backup = await sql.query(
        `INSERT INTO dbo.teste (
          teste
        )
        values (

        )`
      );*/
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
      //console.log(mainInsert);
      //console.log(backup);
      return res.json({
        body: body,
        status: 200
      });
    } catch (error) {
      console.log(error);
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
      console.log(error);
    }
  }
};

module.exports = Backup;
