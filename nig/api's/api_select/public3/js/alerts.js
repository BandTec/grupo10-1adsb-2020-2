console.log(Notification.permission);

if (Notification.permission === "granted") {
    mostrarNotificacao();
} else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            mostrarNotificacao();
        }
    })
}
/*
const notificacaoFogo = new Notification("Nova mensagem de NIG!", {
    body: "ALERTA DE INCÊNDIO!!!",
    icon: 'https://image.flaticon.com/icons/png/128/426/426833.png',
});

const notificacaoAlerta = new Notification("Nova mensagem de NIG!", {
    body: "ALERTA DE RISCO!!!",
    icon: 'https://image.flaticon.com/icons/png/128/497/497738.png',
});

function mostrarNotificacao() {
    notificacaoAlerta;
    notificacao.onclick = () =>{
        window.location.href = "../../index.html"
    }
}

https://image.flaticon.com/icons/png/128/497/497738.png ICONE DE ALERTA
*/


function alert_analytics(valorTemperatura, valorUmidade, sensor_gleba, tela) {

    if (sensor_gleba == 1) {

        const notificacaoFogoGleba1 = new Notification("Nova mensagem de NIG!", {
            body: "ALERTA DE INCÊNDIO NA GLEBA 1!!!",
            icon: 'https://image.flaticon.com/icons/png/128/426/426833.png',
        });

        const notificacaoAlertaGleba1 = new Notification("Nova mensagem de NIG!", {
            body: "ALERTA DE RISCO NA GLEBA 1!!!",
            icon: 'https://image.flaticon.com/icons/png/128/497/497738.png',
        });

        notificacaoAlertaGleba1.onclick = () => {
            window.location.href = "../../index.html"
        }
        notificacaoFogoGleba1.onclick = () => {
            window.location.href = "../../index.html"
        }

        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60) {
            status_gleba_oeste.src = "../../images/status/alerta1.png"
            if (tela == 'home_frame') {
                oeste.style.border = '#ad6300 1px solid'
            }
            //alerta 1 temp
            notificacaoAlertaGleba1;
        } else if (valorTemperatura >= 45 && valorUmidade < 60) {
            status_gleba_oeste.src = "../../images/status/alerta_critico.png"
            if (tela == 'home_frame') {
                oeste.style.border = '#570000 1px solid'
            }
            //Crítico temp 
            notificacaoFogoGleba1;
        } else if (valorUmidade <= 25) {
            status_gleba_oeste.src = "../../images/status/alerta_critico.png"
            if (tela == 'home_frame') {
                oeste.style.border = '#570000 1px solid'
            }
            //Crítico umid
            notificacaoFogoGleba1;
        } else if (valorUmidade > 25 && valorUmidade <= 35) {
            status_gleba_oeste.src = "../../images/status/alerta1.png"
            if (tela == 'home_frame') {
                oeste.style.border = '#ad6300 1px solid'
            }
            //alerta 1 umid
            notificacaoFogoGleba1;
        } else if (valorUmidade > 35 && valorUmidade <= 50) {
            status_gleba_oeste.src = "../../images/status/atencao.png"
            if (tela == 'home_frame') {
                oeste.style.border = '#ffbd59 1px solid'
            }
            //atenção umid
            notificacaoAlertaGleba1;
        } else if (valorUmidade > 50 && valorUmidade <= 60) {
            status_gleba_oeste.src = "../../images/status/pouco_risco.png"
            if (tela == 'home_frame') {
                oeste.style.border = '#008037 1px solid'
            }
            //pouco risco
        } else if (valorUmidade > 60) {
            status_gleba_oeste.src = "../../images/status/ideal.png"
            if (tela == 'home_frame') {
                oeste.style.border = '#008aff 1px solid'
            }
            //ideal
        }

    }
    if (sensor_gleba == 2) {

        const notificacaoFogoGleba2 = new Notification("Nova mensagem de NIG!", {
            body: "ALERTA DE INCÊNDIO NA GLEBA 2!!!",
            icon: 'https://image.flaticon.com/icons/png/128/426/426833.png',
        });

        const notificacaoAlertaGleba2 = new Notification("Nova mensagem de NIG!", {
            body: "ALERTA DE RISCO NA GLEBA 2!!!",
            icon: 'https://image.flaticon.com/icons/png/128/497/497738.png',
        });

        notificacaoAlertaGleba2.onclick = () => {
            window.location.href = "../../index.html"
        }
        notificacaoFogoGleba2.onclick = () => {
            window.location.href = "../../index.html"
        }
        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60) {
            status_gleba_sul.src = "../../images/status/alerta1.png"
            if (tela == 'home_frame') {
                sul.style.border = '#ad6300 1px solid'
            }
            //alerta 1 temp
            notificacaoAlertaGleba2;
        } else if (valorTemperatura >= 45 && valorUmidade < 60) {
            status_gleba_sul.src = "../../images/status/alerta_critico.png"
            if (tela == 'home_frame') {
                sul.style.border = '#570000 1px solid'
            }
            //Crítico temp 
            notificacaoFogoGleba2;
        } else if (valorUmidade <= 25) {
            status_gleba_sul.src = "../../images/status/alerta_critico.png"
            if (tela == 'home_frame') {
                sul.style.border = '#570000 1px solid'
            }
            //Crítico umid
            notificacaoAlertaGleba2;
        } else if (valorUmidade > 25 && valorUmidade <= 35) {
            status_gleba_sul.src = "../../images/status/alerta1.png"
            if (tela == 'home_frame') {
                sul.style.border = '#ad6300 1px solid'
            }
            //alerta 1 umid
            notificacaoAlertaGleba2;
        } else if (valorUmidade > 35 && valorUmidade <= 50) {
            status_gleba_sul.src = "../../images/status/atencao.png"
            if (tela == 'home_frame') {
                sul.style.border = '#ffbd59 1px solid'
            }
            //atenção umid
            notificacaoFogoGleba2;
        } else if (valorUmidade > 50 && valorUmidade <= 60) {
            status_gleba_sul.src = "../../images/status/pouco_risco.png"
            if (tela == 'home_frame') {
                sul.style.border = '#008037 1px solid'
            }
            //pouco risco
        } else if (valorUmidade > 60) {
            status_gleba_sul.src = "../../images/status/ideal.png"
            if (tela == 'home_frame') {
                sul.style.border = '#008aff 1px solid'
            }
            //ideal
        }

    }
    if (sensor_gleba == 3) {

        const notificacaoFogoGleba3 = new Notification("Nova mensagem de NIG!", {
            body: "ALERTA DE INCÊNDIO NA GLEBA 3!!!",
            icon: 'https://image.flaticon.com/icons/png/128/426/426833.png',
        });

        const notificacaoAlertaGleba3 = new Notification("Nova mensagem de NIG!", {
            body: "ALERTA DE RISCO NA GLEBA 3!!!",
            icon: 'https://image.flaticon.com/icons/png/128/497/497738.png',
        });

        notificacaoAlertaGleba3.onclick = () => {
            window.location.href = "../../index.html"
        }
        notificacaoFogoGleba3.onclick = () => {
            window.location.href = "../../index.html"
        }

        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60) {
            status_gleba_norte.src = "../../images/status/alerta1.png"
            if (tela == 'home_frame') {
                norte.style.border = '#ad6300 1px solid'
            }
            //alerta 1 temp
            notificacaoAlertaGleba3;
        } else if (valorTemperatura >= 45 && valorUmidade < 60) {
            status_gleba_norte.src = "../../images/status/alerta_critico.png"
            if (tela == 'home_frame') {
                norte.style.border = '#570000 1px solid'
            }
            //Crítico temp 
            notificacaoFogoGleba3;
        } else if (valorUmidade <= 25) {
            status_gleba_norte.src = "../../images/status/alerta_critico.png"
            if (tela == 'home_frame') {
                norte.style.border = '#570000 1px solid'
            }
            //Crítico umid
            notificacaoFogoGleba3;
        } else if (valorUmidade > 25 && valorUmidade <= 35) {
            status_gleba_norte.src = "../../images/status/alerta1.png"
            if (tela == 'home_frame') {
                norte.style.border = '#ad6300 1px solid'
            }
            //alerta 1 umid
            notificacaoAlertaGleba3;
        } else if (valorUmidade > 35 && valorUmidade <= 50) {
            status_gleba_norte.src = "../../images/status/atencao.png"
            if (tela == 'home_frame') {
                norte.style.border = '#ffbd59 1px solid'
            }
            //atenção umid
            notificacaoAlertaGleba3;
        } else if (valorUmidade > 50 && valorUmidade <= 60) {
            status_gleba_norte.src = "../../images/status/pouco_risco.png"
            if (tela == 'home_frame') {
                norte.style.border = '#008037 1px solid'
            }
            //pouco risco
        } else if (valorUmidade > 60) {
            status_gleba_norte.src = "../../images/status/ideal.png"
            if (tela == 'home_frame') {
                norte.style.border = '#008aff 1px solid'
            }
            //ideal
        }

    }
    if (sensor_gleba == 4) {

        const notificacaoFogoGleba4 = new Notification("Nova mensagem de NIG!", {
            body: "ALERTA DE INCÊNDIO NA GLEBA 4!!!",
            icon: 'https://image.flaticon.com/icons/png/128/426/426833.png',
        });

        const notificacaoAlertaGleba4 = new Notification("Nova mensagem de NIG!", {
            body: "ALERTA DE RISCO NA GLEBA 4!!!",
            icon: 'https://image.flaticon.com/icons/png/128/497/497738.png',
        });

        notificacaoAlertaGleba4.onclick = () => {
            window.location.href = "../../index.html"
        }
        notificacaoFogoGleba4.onclick = () => {
            window.location.href = "../../index.html"
        }

        if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60) {
            status_gleba_leste.src = "../../images/status/alerta1.png"
            if (tela == 'home_frame') {
                leste.style.border = '#ad6300 1px solid'
            }
            //alerta 1 temp
            notificacaoAlertaGleba4;
        } else if (valorTemperatura >= 45 && valorUmidade < 60) {
            status_gleba_leste.src = "../../images/status/alerta_critico.png"
            if (tela == 'home_frame') {
                leste.style.border = '#570000 1px solid'
            }
            //Crítico temp 
            notificacaoFogoGleba4;
        } else if (valorUmidade <= 25) {
            status_gleba_leste.src = "../../images/status/alerta_critico.png"
            if (tela == 'home_frame') {
                leste.style.border = '#570000 1px solid'
            }
            //Crítico umid
            notificacaoFogoGleba4;
        } else if (valorUmidade > 25 && valorUmidade <= 35) {
            status_gleba_leste.src = "../../images/status/alerta1.png"
            if (tela == 'home_frame') {
                leste.style.border = '#ad6300 1px solid'
            }
            //alerta 1 umid
            notificacaoAlertaGleba4;
        } else if (valorUmidade > 35 && valorUmidade <= 50) {
            status_gleba_leste.src = "../../images/status/atencao.png"
            if (tela == 'home_frame') {
                leste.style.border = '#ffbd59 1px solid'
            }
            //atenção umid
            notificacaoAlertaGleba4;
        } else if (valorUmidade > 50 && valorUmidade <= 60) {
            status_gleba_leste.src = "../../images/status/pouco_risco.png"
            if (tela == 'home_frame') {
                leste.style.border = '#008037 1px solid'
            }
            //pouco risco
        } else if (valorUmidade > 60) {
            status_gleba_leste.src = "../../images/status/ideal.png"
            if (tela == 'home_frame') {
                leste.style.border = '#008aff 1px solid'
            }
            //ideal
        }

    }
}