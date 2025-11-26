// LOGIN.JS — Faz login com o backend

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("password").value.trim();

        if (!email || !senha) {
            alert("Preencha todos os campos.");
            return;
        }

        try {
            const resposta = await fetch(
                "http://localhost:8080/Trabalho_A3_DesenvolvimentoWeb_war_exploded/usuario/cadastro",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: email,
                        senha: senha
                    })
                }
            );

            const dados = await resposta.json();

            if (resposta.ok) {
                alert("Login realizado com sucesso!");

                // SALVA O USUÁRIO PARA USAR NA HOME
                localStorage.setItem("usuarioLogado", JSON.stringify(dados));

                // Redireciona pra home
                window.location.href = "homeUsuario.html";
            } else {
                alert("Erro ao fazer login: " + (dados.erro || "Credenciais inválidas"));
            }

        } catch (erro) {
            console.error("Erro ao conectar:", erro);
            alert("Não foi possível conectar ao servidor.");
        }
    });
});