var aberto_financeiro = false;

function calculo_financeiro() {
    var area = Number(inp_area.value);
    var arduino = 100;

    var instalar = ((area / 5) * arduino) * 1.05;   // 5 = distancia de cada arduino 
    //1.05 = taxa da instalação isso represente 5%
    var qtArduino = (area / 5);
    document.getElementById('resp').style.display = "block"; // PS. pensei desta tela sair de traz de onde esta o input e ir para o lado
    resp.classList.add(`aparecer`)
    instalacao.innerHTML = `R$ ${instalar.toFixed(2)}`;
    quantid.innerHTML = Math.round(qtArduino + 0.4)
}

function calc_financeiro() {
    if (!aberto_financeiro) {
        tela_financeiro.classList.add(`abrir_financ`);
        tela_financeiro.classList.remove(`fechar_financ`);
        tela_financeiro.style.display = `block`
        tampa_esquerda.classList.remove(`fechar_tampa_esquerda`);
        tampa_esquerda.classList.add(`abrir_tampa_esquerda`);
        tampa_esquerda.style.display = 'block'
        aberto_financeiro = true
    }
    else {
        tela_financeiro.classList.remove(`abrir_financ`);
        tela_financeiro.classList.add(`fechar_financ`);
        tampa_esquerda.classList.add(`fechar_tampa_esquerda`);
        tampa_esquerda.classList.remove(`abrir_tampa_esquerda`);
        setTimeout(function () {
            tela_financeiro.style.display = `none`
            tampa_esquerda.style.display = 'none'
            aberto_financeiro = false
        }, 1200)
    }
}