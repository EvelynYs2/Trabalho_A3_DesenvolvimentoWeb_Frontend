// HOME.JS — Controle da Home

document.addEventListener("DOMContentLoaded", () => {
    console.log("Home carregada com sucesso!");

    // Botões
    const btnLogin = document.querySelector(".login");
    const btnRegister = document.querySelector(".register");
    const heroBtn = document.querySelector(".hero-btn");

    // Simulações de navegação
    btnLogin.addEventListener("click", () => {
        window.location.href = "../pages/login.html";
    });

    btnRegister.addEventListener("click", () => {
        window.location.href = "../pages/cadastro.html";
    });

    heroBtn.addEventListener("click", () => {
        window.location.href = "../pages/despensa.html";
    });

    // Animação suave ao carregar
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 0.6s ease-in-out";
        document.body.style.opacity = "1";
    }, 50);
});