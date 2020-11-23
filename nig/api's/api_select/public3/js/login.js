var aberto_login = false;

function logar() {
    if (!aberto_login) {
        tela_login.classList.add(`abrir_tela`);
        tela_login.classList.remove(`fechar_tela`);
        tampa.classList.add(`abrir_tampa`);
        tampa.classList.remove(`fechar_tampa`);
        tampa.classList.remove(`fechar_tampa_cadastro`);
        tampa.classList.remove(`abrir_tampa_cadastro`);
        tampa.style.display = 'block'
        tela_login.style.display = `block`
        aberto_login = true
        tela_cadastro.classList.remove(`abrir_tela`);
        tela_cadastro.classList.add(`fechar_tela`);
        setTimeout(function () {
            tela_cadastro.style.display = `none`
            aberto_cadastro = false
        }, 1200)
    }
    else if (aberto_login) {
        tela_login.classList.remove(`abrir_tela`);
        tela_login.classList.add(`fechar_tela`);
        tampa.classList.add(`fechar_tampa`);
        tampa.classList.remove(`abrir_tampa`);
        tampa.classList.remove(`fechar_tampa_cadastro`);
        tampa.classList.remove(`abrir_tampa_cadastro`);
        setTimeout(function () {
            tela_login.style.display = `none`
            tampa.style.display = `none`
            aberto_login = false;
        }, 500)
    }
}

function entrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {

            resposta.json().then(json => {

                sessionStorage.login_usuario_meuapp = json.email;
                sessionStorage.nome_usuario_meuapp = json.nome;

                window.location.href = '../dashboard/dashboard.html';
            });

        } else {

            console.log('Erro de login!');

            resposta.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            });
        }
    });

    return false;
}

function aguardar() {
    btn_entrar.disabled = true;
    // img_aguarde.style.display = 'block';
    // div_erro.style.display = 'none';
}

function finalizar_aguardar(resposta) {
    btn_entrar.disabled = false;
    // img_aguarde.style.display= 'none';
    // div_erro.style.display = 'block';
    // div_erro.innerHTML = resposta;
}
