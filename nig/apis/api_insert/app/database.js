var configuracoes = {
    server: "bd-grupo10.database.windows.net",
    user: "nig",
    password: "#Gfgrupo10",
    database: "bd-grupo10",
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
