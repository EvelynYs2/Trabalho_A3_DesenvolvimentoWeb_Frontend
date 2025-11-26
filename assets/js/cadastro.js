// CADASTRO.JS — Controle da tela de cadastro

document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

        if (!nome || !email || !senha || !confirmarSenha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        const usuario = { nome, email, senha };

        try {
            const resposta = await fetch(
                "http://localhost:8080/Trabalho_A3_DesenvolvimentoWeb_war_exploded/usuario/cadastro",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(usuario)
                }
            );

            const dados = await resposta.json();

            if (resposta.ok) {
                alert("Conta criada com sucesso!");
                window.location.href = "login.html";
            } else {
                alert("Erro ao cadastrar: " + (dados.mensagem || dados.erro));
            }

        } catch (erro) {
            console.error("Erro ao conectar com o servidor:", erro);
            alert("Não foi possível conectar ao servidor.");
        }
    });

});