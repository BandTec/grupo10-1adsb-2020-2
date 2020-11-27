var express = require('express');
const contato = require('../models').Contato;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// INSERÇÃO DO CONTATO 

router.post('/contato', function(req, res, next){

  console.log('Inserindo comentario \n');

  contato.create({
    email: req.body.email_cont,
    nome: req.body.nome_cont,
    mensagem: req.body.mensagem_cont 
  }).then(resultado =>{

    res.send(console.log("Comentário gerando com sucesso!"));
    
    res.send(resultado);

  }).catch(erro =>{

    res.send("Erro: falha no envio do comentário" + erro);

    res.status(666).send(erro.message);
  })
});
module.exports = router;
