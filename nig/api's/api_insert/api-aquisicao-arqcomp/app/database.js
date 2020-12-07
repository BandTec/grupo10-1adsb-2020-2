var configuracoes = {
    server: "nigteste.database.windows.net",
    user: "nigteste",
    password: "#Grupo10",
    database: "bd-nig-testes",
    options: {
      encrypt: true,
      enableArithAbort: true,
    },
    pool: {
      max: 5,
      min: 1,
      idleTimeoutMillis: 90000,
      connectionTimeout: 5000,
    },
};

var sql = require("mssql");
sql.on("error", (err) => {
  console.error(`Erro de Conexão: ${err}`);
});

function conectar() {
  sql.close();
  return sql.connect(configuracoes);
}

module.exports = {
  conectar: conectar,
  sql: sql,
};
