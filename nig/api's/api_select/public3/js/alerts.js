console.log(Notification.permission);

if (Notification.permission === "granted") {
  mostrarNotificacao;
} else if (Notification.permission !== "denied") {
  Notification.requestPermission.then((permission) => {
    if (permission === "granted") {
      mostrarNotificacao;
    }
  });
}

function alert_analytics(valorTemperatura, valorUmidade, sensor_gleba, tela) {

  // GLEBA  OESTE
  if (sensor_gleba == 1) {
    if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60) {
      
      //alerta 1 temp
      status_gleba_oeste.src = "../../images/status/alerta1.png";
      
      if (tela == "home_frame") {
        oeste.style.border = "#ad6300 1px solid";
      }
      
    } else if (valorTemperatura >= 45 && valorUmidade < 60) {
      
      //Crítico temp
      status_gleba_oeste.src = "../../images/status/alerta_critico.png";
      
      if (tela == "home_frame") {
        oeste.style.border = "#570000 1px solid";
      }
      
    const notificacaoFogoGleba1 = new Notification("Nova mensagem de NIG!", 
      {
        body: "ALERTA CRÍTICO NA GLEBA OESTE!",
        icon: "https://image.flaticon.com/icons/png/128/426/426833.png",
      });

      setTimeout(() => notificacaoFogoGleba1.close(), 5000);
    
    } else if (valorUmidade <= 25) {
      
      //Crítico umid
      status_gleba_oeste.src = "../../images/status/alerta_critico.png";
      
      if (tela == "home_frame") {
        oeste.style.border = "#570000 1px solid";
      }
      
    const notificacaoFogoGleba1 = new Notification("Nova mensagem de NIG!", 
      {
        body: "ALERTA CRÍTICO NA GLEBA OESTE!",
        icon: "https://image.flaticon.com/icons/png/128/426/426833.png",
      });

      setTimeout(() => notificacaoFogoGleba1.close(), 5000);
    
    } else if (valorUmidade > 25 && valorUmidade <= 35) {
      
      //alerta 1 umid
      status_gleba_oeste.src = "../../images/status/alerta1.png";
      
      if (tela == "home_frame") {
        oeste.style.border = "#ad6300 1px solid";
      }
      
    } else if (valorUmidade > 35 && valorUmidade <= 50) {
      
      //atenção umid
      status_gleba_oeste.src = "../../images/status/atencao.png";
      
      if (tela == "home_frame") {
        oeste.style.border = "#ffbd59 1px solid";
      }
      
    } else if (valorUmidade > 50 && valorUmidade <= 60) {
      
      //pouco risco
      status_gleba_oeste.src = "../../images/status/pouco_risco.png";
      
      if (tela == "home_frame") {
        oeste.style.border = "#008037 1px solid";
      }
      
    } else if (valorUmidade > 60) {
      
      //ideal
      status_gleba_oeste.src = "../../images/status/ideal.png";
      
      if (tela == "home_frame") {
        oeste.style.border = "#008aff 1px solid";
      }
      
    }
  }
  // FIM GLEBA OESTE

  // GLEBA  SUL
  if (sensor_gleba == 2) {
    if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60) {
      
      //alerta 1 temp
      status_gleba_sul.src = "../../images/status/alerta1.png";
      
      if (tela == "home_frame") {
        sul.style.border = "#ad6300 1px solid";
      }
      
    } else if (valorTemperatura >= 45 && valorUmidade < 60) {
      
      //Crítico temp
      status_gleba_sul.src = "../../images/status/alerta_critico.png";
      
      if (tela == "home_frame") {
        sul.style.border = "#570000 1px solid";
      }
      
    const notificacaoFogoGleba2 = new Notification("Nova mensagem de NIG!", 
      {
        body: "ALERTA CRÍTICO NA GLEBA SUL!",
        icon: "https://image.flaticon.com/icons/png/128/426/426833.png",
      });

      setTimeout(() => notificacaoFogoGleba2.close(), 5000);
    
    } else if (valorUmidade <= 25) {
      
      //Crítico umid
      status_gleba_sul.src = "../../images/status/alerta_critico.png";
      
      if (tela == "home_frame") {
        sul.style.border = "#570000 1px solid";
      }
      
    const notificacaoFogoGleba2 = new Notification("Nova mensagem de NIG!", 
      {
        body: "ALERTA CRÍTICO NA GLEBA SUL!",
        icon: "https://image.flaticon.com/icons/png/128/426/426833.png",
      });

      setTimeout(() => notificacaoFogoGleba2.close(), 5000);
    
    } else if (valorUmidade > 25 && valorUmidade <= 35) {
      
      //alerta 1 umid
      status_gleba_sul.src = "../../images/status/alerta1.png";
      
      if (tela == "home_frame") {
        sul.style.border = "#ad6300 1px solid";
      }
      
    } else if (valorUmidade > 35 && valorUmidade <= 50) {
      
      //atenção umid
      status_gleba_sul.src = "../../images/status/atencao.png";
      
      if (tela == "home_frame") {
        sul.style.border = "#ffbd59 1px solid";
      }
      
    } else if (valorUmidade > 50 && valorUmidade <= 60) {
      
      //pouco risco
      status_gleba_sul.src = "../../images/status/pouco_risco.png";
      
      if (tela == "home_frame") {
        sul.style.border = "#008037 1px solid";
      }
      
    } else if (valorUmidade > 60) {
      
      //ideal
      status_gleba_sul.src = "../../images/status/ideal.png";
      
      if (tela == "home_frame") {
        sul.style.border = "#008aff 1px solid";
      }
      
    }
  }
  // FIM GLEBA SUL

  // GLEBA  NORTE
  if (sensor_gleba == 3) {
    if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60) {
      
      //alerta 1 temp
      status_gleba_norte.src = "../../images/status/alerta1.png";
      
      if (tela == "home_frame") {
        norte.style.border = "#ad6300 1px solid";
      }
      
    } else if (valorTemperatura >= 45 && valorUmidade < 60) {
      
      //Crítico temp
      status_gleba_norte.src = "../../images/status/alerta_critico.png";
      
      if (tela == "home_frame") {
        norte.style.border = "#570000 1px solid";
      }
      
    const notificacaoFogoGleba3 = new Notification("Nova mensagem de NIG!", 
      {
        body: "ALERTA CRÍTICO NA GLEBA NORTE!",
        icon: "https://image.flaticon.com/icons/png/128/426/426833.png",
      });

      setTimeout(() => notificacaoFogoGleba3.close(), 5000);
    
    } else if (valorUmidade <= 25) {
      
      //Crítico umid
      status_gleba_norte.src = "../../images/status/alerta_critico.png";
      
      if (tela == "home_frame") {
        norte.style.border = "#570000 1px solid";
      }
      
    const notificacaoFogoGleba3 = new Notification("Nova mensagem de NIG!", 
      {
        body: "ALERTA CRÍTICO NA GLEBA NORTE!",
        icon: "https://image.flaticon.com/icons/png/128/426/426833.png",
      });

      setTimeout(() => notificacaoFogoGleba3.close(), 5000);
    
    } else if (valorUmidade > 25 && valorUmidade <= 35) {
      
      //alerta 1 umid
      status_gleba_norte.src = "../../images/status/alerta1.png";
      
      if (tela == "home_frame") {
        norte.style.border = "#ad6300 1px solid";
      }
      
    } else if (valorUmidade > 35 && valorUmidade <= 50) {
      
      //atenção umid
      status_gleba_norte.src = "../../images/status/atencao.png";
      
      if (tela == "home_frame") {
        norte.style.border = "#ffbd59 1px solid";
      }
      
    } else if (valorUmidade > 50 && valorUmidade <= 60) {
      
      //pouco risco
      status_gleba_norte.src = "../../images/status/pouco_risco.png";
      
      if (tela == "home_frame") {
        norte.style.border = "#008037 1px solid";
      }
      
    } else if (valorUmidade > 60) {
      
      //ideal
      status_gleba_norte.src = "../../images/status/ideal.png";
      
      if (tela == "home_frame") {
        norte.style.border = "#008aff 1px solid";
      }
      
    }
  }
  // FIM GLEBA NORTE

  // GLEBA  LESTE
  if (sensor_gleba == 4) {
    if (valorTemperatura >= 40 && valorTemperatura <= 45 && valorUmidade < 60) {
      
      //alerta 1 temp
      status_gleba_leste.src = "../../images/status/alerta1.png";
      
      if (tela == "home_frame") {
        leste.style.border = "#ad6300 1px solid";
      }
      
    } else if (valorTemperatura >= 45 && valorUmidade < 60) {
      
      //Crítico temp
      status_gleba_leste.src = "../../images/status/alerta_critico.png";
      
      if (tela == "home_frame") {
        leste.style.border = "#570000 1px solid";
      }
      
    const notificacaoFogoGleba4 = new Notification("Nova mensagem de NIG!", 
      {
        body: "ALERTA CRÍTICO NA GLEBA LESTE!",
        icon: "https://image.flaticon.com/icons/png/128/426/426833.png",
      });

      setTimeout(() => notificacaoFogoGleba4.close(), 5000);
    
    } else if (valorUmidade <= 25) {
      
      //Crítico umid
      status_gleba_leste.src = "../../images/status/alerta_critico.png";
      
      if (tela == "home_frame") {
        leste.style.border = "#570000 1px solid";
      }
      
    const notificacaoFogoGleba4 = new Notification("Nova mensagem de NIG!", 
      {
        body: "ALERTA CRÍTICO NA GLEBA LESTE!",
        icon: "https://image.flaticon.com/icons/png/128/426/426833.png",
      });

      setTimeout(() => notificacaoFogoGleba4.close(), 5000);
    
    } else if (valorUmidade > 25 && valorUmidade <= 35) {
      
      //alerta 1 umid
      status_gleba_leste.src = "../../images/status/alerta1.png";
      
      if (tela == "home_frame") {
        leste.style.border = "#ad6300 1px solid";
      }
      
    } else if (valorUmidade > 35 && valorUmidade <= 50) {
      
      //atenção umid
      status_gleba_leste.src = "../../images/status/atencao.png";
      
      if (tela == "home_frame") {
        leste.style.border = "#ffbd59 1px solid";
      }
      
    } else if (valorUmidade > 50 && valorUmidade <= 60) {
      
      //pouco risco
      status_gleba_leste.src = "../../images/status/pouco_risco.png";
      
      if (tela == "home_frame") {
        leste.style.border = "#008037 1px solid";
      }
      
    } else if (valorUmidade > 60) {
      
      //ideal
      status_gleba_leste.src = "../../images/status/ideal.png";
      
      if (tela == "home_frame") {
        leste.style.border = "#008aff 1px solid";
      }
      
    }
  }
  //   FIM GLEBA LESTE
}
