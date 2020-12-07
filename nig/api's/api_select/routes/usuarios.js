const express = require('express');
const router = express.Router();
const sequelize = require('../models').sequelize;
const Funcionario = require('../models').Funcionario;

let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/autenticar', function (req, res, next) {

	console.log('Recuperando usuário por email e senha \n');

	var email = req.body.email; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.senha; // depois de .body, use o nome (name) do campo em seu formulário de login	

	let instrucaoSql = `select * from Funcionario where email='${email}' and senha='${senha}' \n`;

	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {

		model: Funcionario

	}).then(resultado => {

		console.log(`Encontrados: ${resultado.length} \n`);

		if (resultado.length == 1) {

			sessoes.push(resultado[0].dataValues.email);

			console.log('sessoes: ', sessoes);

			res.json(resultado[0]);

		} else if (resultado.length == 0) {

			res.status(403).send('email e/ou senha inválido(s) \n');

		} else {

			res.status(403).send('Mais de um usuário com o mesmo email e senha! \n');
		}

	}).catch(erro => {

		console.error(erro);

		res.status(500).send(erro.message);

	});
});

/* Cadastrar usuário */
router.post('/cadastrar', function (req, res, next) {

	console.log('Criando um usuário \n');

	Funcionario.create({
		nome: req.body.nome,
		sobrenome: req.body.sobrenome,
		telefone: req.body.telefone,
		email: req.body.email,
		senha: req.body.senha,
		// uf: req.body.uf,
		cidade: req.body.cidade,
		cpf: req.body.cpf,
		login: req.body.login

	}).then(resultado => {

		console.log(`Registro criado: ${resultado} \n`)

		res.send(resultado);

	}).catch(erro => {

		console.error(erro);

		res.status(500).send(erro.message);
	});
});


/* Verificação de usuário */
router.get('/sessao/:email', function (req, res, next) {

	let email = req.body.email;

	console.log(`Verificando se o usuário ${email} tem sessão \n`);

	let tem_sessao = false;

	for (let u = 0; u < sessoes.length; u++) {

		if (sessoes[u] == email) {

			tem_sessao = true;

			break;
		}
	}

	if (tem_sessao) {

		let mensagem = `Usuário ${email} possui sessão ativa! \n`;

		console.log(mensagem);

		res.send(mensagem);


	} else {
		res.sendStatus(403);

	}

});


/* Logoff de usuário */
router.get('/sair/:email', function (req, res, next) {

	let email = req.body.email;

	console.log(`Finalizando a sessão do usuário ${email} \n`);

	let nova_sessoes = []

	for (let u = 0; u < sessoes.length; u++) {

		if (sessoes[u] != email) {

			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;

	res.send(`Sessão do usuário ${email} finalizada com sucesso! \n`);
});


/* Recuperar todos os usuários */
router.get('/', function (req, res, next) {

	console.log('Recuperando todos os usuários \n');

	Funcionario.findAndCountAll().then(resultado => {

		console.log(`${resultado.count} registros \n`);

		res.json(resultado.rows);

	}).catch(erro => {

		console.error(erro);

		res.status(500).send(erro.message);

	});
});

module.exports = router;
