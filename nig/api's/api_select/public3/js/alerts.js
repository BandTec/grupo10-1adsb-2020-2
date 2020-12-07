function alert_analytics(valorTemperatura, valorUmidade, sensor_gleba) {
    if (sensor_gleba == 1) {
        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60){
            status_gleba_oeste.src="../../images/status/alerta1.png"
            //alerta 1 temp
        } else if (valorTemperatura >= 45 && valorUmidade < 60){
            status_gleba_oeste.src="../../images/status/alerta_critico.png"
            //Crítico temp 
        } else if (valorUmidade <= 25){
            status_gleba_oeste.src="../../images/status/alerta_critico.png"
            //Crítico umid
        } else if (valorUmidade > 25 && valorUmidade <= 35){
            status_gleba_oeste.src="../../images/status/alerta1.png"
            //alerta 1 umid
        } else if (valorUmidade > 35 && valorUmidade <= 50){
            status_gleba_oeste.src="../../images/status/atencao.png"
            //atenção umid
        } else if (valorUmidade > 50 && valorUmidade <= 60){
            status_gleba_oeste.src="../../images/status/pouco_risco.png"
            //pouco risco
        } else if (valorUmidade > 60){
            status_gleba_oeste.src="../../images/status/ideal.png"
            //ideal
        }
        
    }
    if (sensor_gleba == 2) {
        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60){
            status_gleba_sul.src="../../images/status/alerta1.png"
            //alerta 1 temp
        } else if (valorTemperatura >= 45 && valorUmidade < 60){
            status_gleba_sul.src="../../images/status/alerta_critico.png"
            //Crítico temp 
        } else if (valorUmidade <= 25){
            status_gleba_sul.src="../../images/status/alerta_critico.png"
            //Crítico umid
        } else if (valorUmidade > 25 && valorUmidade <= 35){
            status_gleba_sul.src="../../images/status/alerta1.png"
            //alerta 1 umid
        } else if (valorUmidade > 35 && valorUmidade <= 50){
            status_gleba_sul.src="../../images/status/atencao.png"
            //atenção umid
        } else if (valorUmidade > 50 && valorUmidade <= 60){
            status_gleba_sul.src="../../images/status/pouco_risco.png"
            //pouco risco
        } else if (valorUmidade > 60){
            status_gleba_sul.src="../../images/status/ideal.png"
            //ideal
        }
        
    }
    if (sensor_gleba == 3) {
        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60){
            status_gleba_norte.src="../../images/status/alerta1.png"
            //alerta 1 temp
        } else if (valorTemperatura >= 45 && valorUmidade < 60){
            status_gleba_norte.src="../../images/status/alerta_critico.png"
            //Crítico temp 
        } else if (valorUmidade <= 25){
            status_gleba_norte.src="../../images/status/alerta_critico.png"
            //Crítico umid
        } else if (valorUmidade > 25 && valorUmidade <= 35){
            status_gleba_norte.src="../../images/status/alerta1.png"
            //alerta 1 umid
        } else if (valorUmidade > 35 && valorUmidade <= 50){
            status_gleba_norte.src="../../images/status/atencao.png"
            //atenção umid
        } else if (valorUmidade > 50 && valorUmidade <= 60){
            status_gleba_norte.src="../../images/status/pouco_risco.png"
            //pouco risco
        } else if (valorUmidade > 60){
            status_gleba_norte.src="../../images/status/ideal.png"
            //ideal
        }
        
    }
    if (sensor_gleba == 4) {
        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60){
            status_gleba_leste.src="../../images/status/alerta1.png"
            //alerta 1 temp
        } else if (valorTemperatura >= 45 && valorUmidade < 60){
            status_gleba_leste.src="../../images/status/alerta_critico.png"
            //Crítico temp 
        } else if (valorUmidade <= 25){
            status_gleba_leste.src="../../images/status/alerta_critico.png"
            //Crítico umid
        } else if (valorUmidade > 25 && valorUmidade <= 35){
            status_gleba_leste.src="../../images/status/alerta1.png"
            //alerta 1 umid
        } else if (valorUmidade > 35 && valorUmidade <= 50){
            status_gleba_leste.src="../../images/status/atencao.png"
            //atenção umid
        } else if (valorUmidade > 50 && valorUmidade <= 60){
            status_gleba_leste.src="../../images/status/pouco_risco.png"
            //pouco risco
        } else if (valorUmidade > 60){
            status_gleba_leste.src="../../images/status/ideal.png"
            //ideal
        }
        
    }
}