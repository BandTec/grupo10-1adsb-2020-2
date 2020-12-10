process.env.NODE_ENV = 'production';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Contato = require("./models").Contato;

const indexRouter = require('./routes/index');
const usuariosRouter = require('./routes/usuarios');
const leiturasRouter = require('./routes/leituras');
const sequelize = require('./models').sequelize;

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);

app.post('/contato', function(req,res){

    let email = req.body.email_Contato;
    let nome = req.body.nome_Contato;
    let mensagem = req.body.mensagem_Contato;

    let instrucaoSql = `insert into Contato(email_Contato,nome_Contato, mensagem_Contato) values('${email}', '${nome}', '${mensagem}');`;

    console.log("Inserindo contato \n");
    sequelize.query(instrucaoSql, {
        model: Contato
    }).then(resultado => {
        console.log(`Inseridos : ${resultado.length} \n`);
        
        res.sendFile(__dirname + "/public/index.html");

    }).catch(erro => {
        console.error(erro);
        res.status(126).send(erro.message);
    })
});

module.exports = app;

    /*
    Contato.create({
        email: req.body.email_Contato,
        nome: req.body.nome_Contato,
        mensagem: req.body.mensagem_Contato
    }).then(function(){
        // res.send(console.log("Comentário gerado com sucesso!"));

        res.sendFile(__dirname + "/public3/index.html");

    }).catch(function(erro){

        res.send("Erro: falha no envio do comentário!" +erro)
    })*/