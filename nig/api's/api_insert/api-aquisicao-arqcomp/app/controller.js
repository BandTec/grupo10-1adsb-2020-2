const express = require("express");
const { ArduinoDataTemp } = require("./newserial");
const { ArduinoDataHumidity } = require("./serialHumidity");
const db = require("./database");
const router = express.Router();


router.get("/", (request, response, next) => {
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
    averageHour: isNaN(averageHour) ? 0 : averageHour,
  });
});

router.get("/humidity", (request, response, next) => {
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
    averageHour: isNaN(averageHour) ? 0 : averageHour,
  });
});

router.get("/sendData", (request, response) => {
  let teste = Math.random()* 45;
  let temperature = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 1];
  let Humidity = ArduinoDataHumidity.List[ArduinoDataHumidity.List.length - 1];

  console.log(temperature);
  console.log(teste);
  console.log(Humidity);

  db.conectar()
    .then(() => {
      const sql = `
        INSERT into Dados_sensor(temperatura, umidade, horario_captacao)
        values (${Math.trunc(temperature[0])}, ${Math.trunc(temperature[1])}, '${agora()}');`;
      /*INSERT into Dados_sensor (temperatura, umidade, horario_captacao, id_dados)
      values (${temperature-10}, ${Humidity+20}, '${agora()}', 2);
      INSERT into Dados_sensor (temperatura, umidade, horario_captacao, id_dados)
      values (${temperature+5}, ${Humidity-20}, '${agora()}', 3);
      INSERT into Dados_sensor (temperatura, umidade, horario_captacao, id_dados)
      values (${temperature-5}, ${Humidity-20}, '${agora()}', 4);*/
      console.log(sql);
      return db.sql.query(sql).then(() => {
        console.log("Registro inserido com sucesso! \n");
      });
    })
    .catch((erro) => {
      console.error(`Erro ao tentar registrar aquisição na base: ${erro} \n`);
    })
    .finally(() => {
      db.sql.close();
    });

  response.sendStatus(200);
});


function agora() {
  const agora_d = new Date();
  return `${agora_d.getFullYear()}-${agora_d.getMonth() + 1}-${agora_d.getDate()} ${agora_d.getHours()}:${agora_d.getMinutes()}:${agora_d.getSeconds()}`;
}

module.exports = router;
