// LOGIN.JS — Controle da tela de login

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validação simples no front
        if (email === "" || password === "") {
            alert("Preencha todos os campos.");
            return;
        }

        // Aqui futuramente você vai chamar o backend REAL:
        // fetch("http://localhost:8080/api/login")

        console.log("LOGIN ->", { email, password });

        // simulação de login
        alert("Login realizado com sucesso!");
        window.location.href = "home.html";
    });

});