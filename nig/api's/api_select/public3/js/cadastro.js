var aberto_cadastro = false;

function cadastrar_animacao() {
    if (!aberto_cadastro) {
        tela_cadastro.classList.add(`abrir_tela`);
        tela_cadastro.classList.remove(`fechar_tela`);
        tela_cadastro.style.display = `block`
        tampa.classList.remove(`abrir_tampa`);
        tampa.classList.add(`fechar_tampa`);
        tampa.classList.remove(`fechar_tampa_cadastro`);
        aberto_cadastro = true
        tela_login.classList.remove(`abrir_tela`);
        tela_login.classList.add(`fechar_tela`);
        setTimeout(function () {
            tela_login.style.display = `none`;
            tampa.classList.remove(`fechar_tampa`);
            tampa.classList.add(`abrir_tampa_cadastro`);
            aberto_login = false;
        }, 1200)
    }
    else {
        tela_cadastro.classList.remove(`abrir_tela`);
        tela_cadastro.classList.add(`fechar_tela`);
        tampa.classList.add(`abrir_tampa_cadastro`);
        setTimeout(function () {
            tela_cadastro.style.display = `none`;
            tampa.classList.remove(`fechar_tampa_cadastro`);
            aberto_cadastro = false
        }, 1000)
    }
}


function cadastrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("../usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {
        
        if (response.ok) {

            // window.location.href='../index.html';
            logar();

        } else {

            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                div_erro.innerHTML = resposta;
            });
            finalizar_aguardar();
        }
    });

    return false;
}

function aguardar() {
    btn_entrar.disabled = true;
    // img_aguarde.style.display='block';
    // div_erro.style.display='none';
}

function finalizar_aguardar() {
    btn_entrar.disabled = false;
    // img_aguarde.style.display='none';
    // div_erro.style.display='block';
}
