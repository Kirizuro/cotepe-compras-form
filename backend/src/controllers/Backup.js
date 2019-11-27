const sql = require('mssql');

const Backup = {
  async inserir(req, res) {
    try {
      const response = await req.body.params;
      return await res.json(response);
      return await res.json(req.body);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = Backup;
