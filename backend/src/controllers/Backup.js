const sql = require('mssql');

const Backup = {
  async inserir(req, res) {
    try {
      const body = await req.body;

      await sql.connect('mssql://sa:141018@localhost/master');
      const result = await sql.query(
        `INSERT INTO dbo.backupForm (
          quem,
          empresa,
          local,
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
          '${body.empresa}',
          '${body.local}',
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
      console.log(body);
      return res.json({
        body: body,
        status: 200
      });
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = Backup;
