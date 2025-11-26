// ===== PEGAR O NOME DO USUÁRIO DO BACK ===== //

async function carregarUsuario() {
    try {
        const resp = await fetch("http://localhost:8080/Trabalho_A3_DesenvolvimentoWeb_war_exploded/usuario/perfil", {
            method: "GET",
            credentials: "include"
        });

        if (!resp.ok) {
            console.log("Erro ao buscar usuário");
            return;
        }

        const dados = await resp.json();
        document.getElementById("nomeUsuario").innerText = dados.nome;
    } catch (e) {
        console.log("Erro:", e);
    }
}

carregarUsuario();


// ===== NAVEGAÇÃO ===== //

function irPara(pagina) {
    window.location.href = pagina;
}


// ===== LOGOUT ===== //

document.getElementById("logoutBtn").addEventListener("click", () => {
    fetch("http://localhost:8080/Trabalho_A3_DesenvolvimentoWeb_war_exploded/usuario/logout", {
        method: "POST",
        credentials: "include"
    }).then(() => {
        window.location.href = "login.html";
    });
});