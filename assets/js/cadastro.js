// CADASTRO.JS — Controle da tela de cadastro

document.addEventListener("DOMContentLoaded", () => {
    
    const form = document.getElementById("cadastroForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();
        const confirmarSenha = document.getElementById("confirmarSenha").value.trim();

        // Validação básica
        if (!nome || !email || !senha || !confirmarSenha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (senha !== confirmarSenha) {
            alert("As senhas não coincidem.");
            return;
        }

        console.log("CADASTRO ->", { nome, email, senha });

        // Aqui futuramente chamará o backend/servlet
        // fetch("/api/cadastro", { method: "POST", body: JSON.stringify({ nome, email, senha }) })

        alert("Conta criada com sucesso!");
        window.location.href = "login.html";
    });

});