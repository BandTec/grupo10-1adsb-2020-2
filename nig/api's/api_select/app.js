process.env.NODE_ENV = 'production';

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const contato = require("./models").Contato;

const indexRouter = require('./routes/index');
const usuariosRouter = require('./routes/usuarios');
const leiturasRouter = require('./routes/leituras');
const { json } = require('sequelize');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public3')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/leituras', leiturasRouter);
app.post('/contato', function(req,res){
    console.log("Inserindo contato \n");
    contato.create({
        email: req.body.email_cont,
        nome: req.body.nome_cont,
        mensagem: req.body.mensagem_cont
    }).then(function(){
        // res.send(console.log("Comentário gerado com sucesso!"));
        res.sendFile(__dirname + "/public3/index.html");
    }).catch(function(erro){
        res.send("Erro: falha no envio do comentário!" +erro)
    })
});

module.exports = app;
