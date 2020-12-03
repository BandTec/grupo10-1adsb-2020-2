var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Leitura = require('../models').Dados_sensor;

/* Recuperar as últimas N leituras */
router.get('/ultimas/:id_Sensor', function (req, res, next) {

	// quantas são as últimas leituras que quer? 8 está bom?
	const limite_linhas = 7;

	var id_Sensor = req.params.id_Sensor;

	console.log(`Recuperando as ultimas ${limite_linhas} leituras`);

	const instrucaoSql = `select top ${limite_linhas} 
						temperatura, 
						umidade, 
						horario_Captacao as momento_grafico
						from Dados_sensor
						where id_Sensor = ${id_Sensor}
						order by id_Sensor desc`;
// FORMAT(momento,'HH:mm:ss') as momento_grafico
	sequelize.query(instrucaoSql, {
		model: Leitura,
		mapToModel: true
	})
		.then(resultado => {
			console.log(`Encontrados: ${resultado.length}`);
			res.json(resultado);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
});


// tempo real (último valor de cada leitura)
/*router.get('/tempo-real', function (req, res, next) {
	
	console.log(`Recuperando a ultima leitura`);

	const instrucaoSql = `select top 4 temperatura, umidade, FORMAT(momento,'HH:mm:ss') as momento_grafico, id_Sensor from leitura order by id desc`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});
  
});
*/

router.get('/tempo-real/:id_Sensor', function (req, res, next) {
	console.log('Recuperando caminhões');

	//var id_Sensor = req.body.id_Sensor; // depois de .body, use o nome (name) do campo em seu formulário de login
	
	var id_Sensor = req.params.id_Sensor;

	// FORMAT(momento,'HH:mm:ss') as momento_grafico,
	let instrucaoSql = `select top 1 temperatura, umidade, id_Sensor from Dados_sensor where id_Sensor = ${id_Sensor} order by id_Sensor desc`;

	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {

			res.json(resultado[0]);

		}).catch(erro => {

			console.error(erro);

			res.status(500).send(erro.message);
		});
});

// estatísticas (max, min, média, mediana, quartis etc)
router.get('/estatisticas', function (req, res, next) {

	console.log(`Recuperando as estatísticas atuais`);

	const instrucaoSql = `select 
							max(temperatura) as temp_maxima, 
							min(temperatura) as temp_minima, 
							avg(temperatura) as temp_media,
							max(umidade) as umidade_maxima, 
							min(umidade) as umidade_minima, 
							avg(umidade) as umidade_media 
						from Dados_sensor`;

	sequelize.query(instrucaoSql, { type: sequelize.QueryTypes.SELECT })
		.then(resultado => {
			res.json(resultado[0]);
		}).catch(erro => {
			console.error(erro);
			res.status(500).send(erro.message);
		});

});


module.exports = router;
