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
        INSERT into Dados_sensor(temperatura, umidade, horario_Captacao)
        values (${Math.trunc(temperature[0])}, ${Math.trunc(temperature[1])}, '${agora()}')
        INSERT into Dados_sensor (temperatura, umidade, horario_Captacao)
        values (${Math.trunc(temperature[0])*0.2}, ${Math.trunc(temperature[1])*0.4}, '${agora()}');
        INSERT into Dados_sensor (temperatura, umidade, horario_Captacao)
        values (${Math.trunc(temperature[0])*0.7+3}, ${Math.trunc(temperature[1])*1.3}, '${agora()}');
        INSERT into Dados_sensor (temperatura, umidade, horario_Captacao)
        values (${Math.trunc(temperature[0])*0.2+2}, ${Math.trunc(temperature[1])*0.3}, '${agora()}');`

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
