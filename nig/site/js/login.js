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

function verificar() {
    if (login_email.value == "admin@admin.com" && login_senha.value == "admin") {
        redirect.action = "node/dashboard.html";
        redirect.submit();
    } else {
        redirect.email.focus();
        redirect.email.value = "";
        redirect.senha.value = "";
        alert("SENHA OU LOGIN INVÁLIDO");
    }
}