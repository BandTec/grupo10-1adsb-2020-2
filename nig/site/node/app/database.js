var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    port     : '3306',
    user     : 'nig_teste',
    password : 'urubu100', // 'nagrant' or '0v4T5Ug64!'
    database : 'sensor'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Conectado com sucesso!')
});

module.exports = connection;
