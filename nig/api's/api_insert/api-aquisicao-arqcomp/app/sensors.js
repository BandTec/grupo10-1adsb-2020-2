function dht11(){

    minHumidity = 20;
    maxHumidity = 80;

    minTemperature = 0;
    maxTemperature = 50;

    if (minHumidity < 20 || maxHumidity > 100) {
        throw new Error('Os valores minímos e máximos para umidade são 20% e 100% respectivamente.')
    }

    if (minTemperature < 0 || maxTemperature > 50) {
        throw new Error('Os valores minímos e máximos para temperatura são 0 e 50 respectivamente.')
    }

    minTemperature = typeof minTemperature == 'undefined' ? 18 : minTemperature;
    maxTemperature = typeof maxTemperature == 'undefined' ? 25 : maxTemperature;

    minHumidity = typeof minHumidity == 'undefined' ? 20 : minHumidity;
    maxHumidity = typeof maxHumidity == 'undefined' ? 80 : maxHumidity;


    let randomHumidity = Math.floor(Math.random()*(maxHumidity-minHumidity+1)+minHumidity);
    
    let randomTemperature = Math.random() * (maxTemperature - minTemperature) + minTemperature;
    
    return [randomHumidity, randomTemperature]
}


module.exports = {dht11};
