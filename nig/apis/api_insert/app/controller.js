const express = require("express");
const { ArduinoDataTemp } = require("./newserial");
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

router.get("/sendData", (request, response) => {

  let temperature = ArduinoDataTemp.List[ArduinoDataTemp.List.length - 1];

  console.log(temperature);

  db.conectar()
    .then(() => {
      const sql = `
        INSERT into Dados_sensor(temperatura, umidade, horario_Captacao, fk_Sensor)
        values (${Math.trunc(temperature[0])}, ${Math.trunc(temperature[1])}, '${agora()}', 1)
        INSERT into Dados_sensor (temperatura, umidade, horario_Captacao, fk_Sensor)
        values (${Math.trunc(temperature[0])+10}, ${Math.trunc(temperature[1])-20}, '${agora()}', 2);
        INSERT into Dados_sensor (temperatura, umidade, horario_Captacao, fk_Sensor)
        values (${Math.trunc(temperature[0])*0.7+3}, ${Math.trunc(temperature[1])*1.3}, '${agora()}', 3);
        INSERT into Dados_sensor (temperatura, umidade, horario_Captacao, fk_Sensor)
        values (${Math.trunc(temperature[0])+15}, ${Math.trunc(temperature[1])-30}, '${agora()}', 4);`

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
