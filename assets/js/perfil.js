// ========================== CARREGA DADOS ==========================

const nome = document.getElementById("nome");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const foto = document.getElementById("fotoPerfil");

const tema = document.getElementById("tema");
const notificacoes = document.getElementById("notificacoes");
const privacidade = document.getElementById("privacidade");

// Carregar informações do localStorage
function carregarPerfil() {
    nome.value = localStorage.getItem("userNome") || "Usuário Teste";
    email.value = localStorage.getItem("userEmail") || "usuario@email.com";
    telefone.value = localStorage.getItem("userTelefone") || "(00) 00000-0000";
    foto.src = localStorage.getItem("userFoto") || "../img/default-user.png";

    tema.value = localStorage.getItem("userTema") || "claro";
    notificacoes.value = localStorage.getItem("userNotif") || "todas";
    privacidade.value = localStorage.getItem("userPriv") || "publico";
}

carregarPerfil();


// ========================== EDITAR / SALVAR PERFIL ==========================

const btnEditar = document.getElementById("btnEditar");
const btnSalvar = document.getElementById("btnSalvar");

btnEditar.onclick = () => {
    nome.disabled = false;
    email.disabled = false;
    telefone.disabled = false;

    btnEditar.style.display = "none";
    btnSalvar.style.display = "inline-block";
};

btnSalvar.onclick = () => {
    localStorage.setItem("userNome", nome.value);
    localStorage.setItem("userEmail", email.value);
    localStorage.setItem("userTelefone", telefone.value);

    nome.disabled = true;
    email.disabled = true;
    telefone.disabled = true;

    btnSalvar.style.display = "none";
    btnEditar.style.display = "inline-block";
};


// ========================== SALVAR PREFERÊNCIAS ==========================

document.getElementById("btnSalvarPrefs").onclick = () => {
    localStorage.setItem("userTema", tema.value);
    localStorage.setItem("userNotif", notificacoes.value);
    localStorage.setItem("userPriv", privacidade.value);

    alert("Preferências salvas com sucesso!");
};
