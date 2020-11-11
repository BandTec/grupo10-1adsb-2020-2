const express = require('express');
const { ArduinoDataTemp } = require('./serialTemp')
const { ArduinoDataHumidity } = require('./serialHumidity')
const db = require('./database')
const router = express.Router();


router.get('/temperature', (request, response, next) => {

    let sum = ArduinoDataTemp.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoDataTemp.List.length).toFixed(2);
	let sumHour = ArduinoDataTemp.ListHour.reduce((a, b) => a + b, 0);
	let averageHour = (sumHour / ArduinoDataTemp.ListHour.length).toFixed(2);
    
    response.json({
        data: ArduinoDataTemp.List,
        total: ArduinoDataTemp.List.length,
        average: isNaN(average) ? 0 : average,
		dataHour: ArduinoDataTemp.ListHour,
		totalHour: ArduinoDataTemp.ListHour.length,
		averageHour: isNaN(averageHour) ? 0 : averageHour
    });

});

router.get('/humidity', (request, response, next) => {

    let sum = ArduinoDataHumidity.List.reduce((a, b) => a + b, 0);
    let average = (sum / ArduinoDataHumidity.List.length).toFixed(2);
	let sumHour = ArduinoDataHumidity.ListHour.reduce((a, b) => a + b, 0);
	let averageHour = (sumHour / ArduinoDataHumidity.ListHour.length).toFixed(2);

    response.json({
        data: ArduinoDataHumidity.List,
        total: ArduinoDataHumidity.List.length,
        average: isNaN(average) ? 0 : average,
		dataHour: ArduinoDataHumidity.ListHour,
		totalHour: ArduinoDataHumidity.ListHour.length,
		averageHour: isNaN(averageHour) ? 0 : averageHour
    });

});

router.post('/sendData', (request, response) => {
    temperature = ArduinoDataTemp.List[ArduinoDataTemp.List.length -1];
    umidade = ArduinoDataHumidity.List[ArduinoDataHumidity.List.length -1];

    // ENVIAR DADOS DE TEMPERATURA

    var sql = "INSERT INTO temperatura (type, temp) VALUES ('temperatura',?)";

    db.query(sql,temperature, function(err, result) {
        if (err) throw err;
        console.log("Número de registros de temperatura inseridos: " + result.affectedRows);
      });
      
    // ENVIAR DADOS DE UMIDADE

    var sql2 = "INSERT INTO umidade (type, umid) VALUES ('umidade',?)";

    db.query(sql2, umidade, function(err, result) {
        if (err) throw err;
        console.log("Número de registros de umidade inseridos: " + result.affectedRows);
        // console.log(umidade);
      });

    response.sendStatus(200);
})


module.exports = router;