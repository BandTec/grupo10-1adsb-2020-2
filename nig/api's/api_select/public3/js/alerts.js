console.log(Notification.permission);

function mostrarNotificacao() {
    const notificacao = new Notification("Nova mensagem de NIG!", {
        body: "ALERTA DE INCÊNDIO!!!",
        icon: 'https://image.flaticon.com/icons/png/128/426/426833.png',
    });
    notificacao.onclick = () =>{
        window.location.href = "../../index.html"
    }
}

if (Notification.permission === "granted") {
    mostrarNotificacao();
}else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            mostrarNotificacao();
        }
    })
}

function alert_analytics(valorTemperatura, valorUmidade, sensor_gleba, tela) {
    if (sensor_gleba == 1) {
        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60){
            status_gleba_oeste.src="../../images/status/alerta1.png"
            if(tela == 'home_frame'){
                oeste.style.border = '#ad6300 1px solid'
            }
            //alerta 1 temp
        } else if (valorTemperatura >= 45 && valorUmidade < 60){
            status_gleba_oeste.src="../../images/status/alerta_critico.png"
            if(tela == 'home_frame'){
                oeste.style.border = '#570000 1px solid'
            }
            //Crítico temp 
        } else if (valorUmidade <= 25){
            status_gleba_oeste.src="../../images/status/alerta_critico.png"
            if(tela == 'home_frame'){
                oeste.style.border = '#570000 1px solid'
            }
            //Crítico umid
        } else if (valorUmidade > 25 && valorUmidade <= 35){
            status_gleba_oeste.src="../../images/status/alerta1.png"
            if(tela == 'home_frame'){
                oeste.style.border = '#ad6300 1px solid'
            }
            //alerta 1 umid
        } else if (valorUmidade > 35 && valorUmidade <= 50){
            status_gleba_oeste.src="../../images/status/atencao.png"
            if(tela == 'home_frame'){
                oeste.style.border = '#ffbd59 1px solid'
            }
            //atenção umid
        } else if (valorUmidade > 50 && valorUmidade <= 60){
            status_gleba_oeste.src="../../images/status/pouco_risco.png"
            if(tela == 'home_frame'){
                oeste.style.border = '#008037 1px solid'
            }
            //pouco risco
        } else if (valorUmidade > 60){
            status_gleba_oeste.src="../../images/status/ideal.png"
            if(tela == 'home_frame'){
                oeste.style.border = '#008aff 1px solid'
            }
            //ideal
        }
        
    }
    if (sensor_gleba == 2) {
        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60){
            status_gleba_sul.src="../../images/status/alerta1.png"
            if(tela == 'home_frame'){
                sul.style.border = '#ad6300 1px solid'
            }
            //alerta 1 temp
        } else if (valorTemperatura >= 45 && valorUmidade < 60){
            status_gleba_sul.src="../../images/status/alerta_critico.png"
            if(tela == 'home_frame'){
                sul.style.border = '#570000 1px solid'
            }
            //Crítico temp 
        } else if (valorUmidade <= 25){
            status_gleba_sul.src="../../images/status/alerta_critico.png"
            if(tela == 'home_frame'){
                sul.style.border = '#570000 1px solid'
            }
            //Crítico umid
        } else if (valorUmidade > 25 && valorUmidade <= 35){
            status_gleba_sul.src="../../images/status/alerta1.png"
            if(tela == 'home_frame'){
                sul.style.border = '#ad6300 1px solid'
            }
            //alerta 1 umid
        } else if (valorUmidade > 35 && valorUmidade <= 50){
            status_gleba_sul.src="../../images/status/atencao.png"
            if(tela == 'home_frame'){
                sul.style.border = '#ffbd59 1px solid'
            }
            //atenção umid
        } else if (valorUmidade > 50 && valorUmidade <= 60){
            status_gleba_sul.src="../../images/status/pouco_risco.png"
            if(tela == 'home_frame'){
                sul.style.border = '#008037 1px solid'
            }
            //pouco risco
        } else if (valorUmidade > 60){
            status_gleba_sul.src="../../images/status/ideal.png"
            if(tela == 'home_frame'){
                sul.style.border = '#008aff 1px solid'
            }
            //ideal
        }
        
    }
    if (sensor_gleba == 3) {
        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60){
            status_gleba_norte.src="../../images/status/alerta1.png"
            if(tela == 'home_frame'){
                norte.style.border = '#ad6300 1px solid'
            }
            //alerta 1 temp
        } else if (valorTemperatura >= 45 && valorUmidade < 60){
            status_gleba_norte.src="../../images/status/alerta_critico.png"
            if(tela == 'home_frame'){
                norte.style.border = '#570000 1px solid'
            }
            //Crítico temp 
        } else if (valorUmidade <= 25){
            status_gleba_norte.src="../../images/status/alerta_critico.png"
            if(tela == 'home_frame'){
                norte.style.border = '#570000 1px solid'
            }
            //Crítico umid
        } else if (valorUmidade > 25 && valorUmidade <= 35){
            status_gleba_norte.src="../../images/status/alerta1.png"
            if(tela == 'home_frame'){
                norte.style.border = '#ad6300 1px solid'
            }
            //alerta 1 umid
        } else if (valorUmidade > 35 && valorUmidade <= 50){
            status_gleba_norte.src="../../images/status/atencao.png"
            if(tela == 'home_frame'){
                norte.style.border = '#ffbd59 1px solid'
            }
            //atenção umid
        } else if (valorUmidade > 50 && valorUmidade <= 60){
            status_gleba_norte.src="../../images/status/pouco_risco.png"
            if(tela == 'home_frame'){
                norte.style.border = '#008037 1px solid'
            }
            //pouco risco
        } else if (valorUmidade > 60){
            status_gleba_norte.src="../../images/status/ideal.png"
            if(tela == 'home_frame'){
                norte.style.border = '#008aff 1px solid'
            }
            //ideal
        }
        
    }
    if (sensor_gleba == 4) {
        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60){
            status_gleba_leste.src="../../images/status/alerta1.png"
            if(tela == 'home_frame'){
                leste.style.border = '#ad6300 1px solid'
            }
            //alerta 1 temp
        } else if (valorTemperatura >= 45 && valorUmidade < 60){
            status_gleba_leste.src="../../images/status/alerta_critico.png"
            if(tela == 'home_frame'){
                leste.style.border = '#570000 1px solid'
            }
            //Crítico temp 
        } else if (valorUmidade <= 25){
            status_gleba_leste.src="../../images/status/alerta_critico.png"
            if(tela == 'home_frame'){
                leste.style.border = '#570000 1px solid'
            }
            //Crítico umid
        } else if (valorUmidade > 25 && valorUmidade <= 35){
            status_gleba_leste.src="../../images/status/alerta1.png"
            if(tela == 'home_frame'){
                leste.style.border = '#ad6300 1px solid'
            }
            //alerta 1 umid
        } else if (valorUmidade > 35 && valorUmidade <= 50){
            status_gleba_leste.src="../../images/status/atencao.png"
            if(tela == 'home_frame'){
                leste.style.border = '#ffbd59 1px solid'
            }
            //atenção umid
        } else if (valorUmidade > 50 && valorUmidade <= 60){
            status_gleba_leste.src="../../images/status/pouco_risco.png"
            if(tela == 'home_frame'){
                leste.style.border = '#008037 1px solid'
            }
            //pouco risco
        } else if (valorUmidade > 60){
            status_gleba_leste.src="../../images/status/ideal.png"
            if(tela == 'home_frame'){
                leste.style.border = '#008aff 1px solid'
            }
            //ideal
        }
        
    }
}