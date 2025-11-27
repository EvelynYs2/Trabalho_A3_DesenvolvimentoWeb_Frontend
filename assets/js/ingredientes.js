const STORAGE_KEY = "ingredientes_db_v1";
let ingredientes = [];

const categoria = document.getElementById("categoria");
const nome = document.getElementById("nome");
const quantidade = document.getElementById("quantidade");
const btnAdicionar = document.getElementById("btnAdicionar");
const lista = document.getElementById("listaIngredientes");

// Carrega dados
document.addEventListener("DOMContentLoaded", () => {
    load();
    render();
});

function load() {
    const data = localStorage.getItem(STORAGE_KEY);
    ingredientes = data ? JSON.parse(data) : [];
}

function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ingredientes));
}

// Render
function render() {
    lista.innerHTML = "";
    ingredientes.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("item");

        card.innerHTML = `
            <strong>${item.nome}</strong>
            <p>Categoria: ${item.categoria}</p>
            <p>Quantidade: ${item.quantidade}</p>

            <div class="actions">
                <button class="edit-btn" onclick="editar(${item.id})">Editar</button>
                <button class="delete-btn" onclick="remover(${item.id})">Excluir</button>
            </div>
        `;
        lista.appendChild(card);
    });
}

// Adicionar
btnAdicionar.addEventListener("click", () => {
    if (nome.value.trim() === "" || quantidade.value <= 0) {
        toast("Preencha tudo corretamente!");
        return;
    }

    const novo = {
        id: Date.now(),
        categoria: categoria.value,
        nome: nome.value.trim(),
        quantidade: Number(quantidade.value)
    };

    ingredientes.push(novo);
    save();
    render();

    nome.value = "";
    quantidade.value = "";

    toast("Ingrediente adicionado!");
});

// Editar
function editar(id) {
    const item = ingredientes.find(i => i.id === id);

    categoria.value = item.categoria;
    nome.value = item.nome;
    quantidade.value = item.quantidade;

    ingredientes = ingredientes.filter(i => i.id !== id);
    save();
    render();

    toast("Edite e clique em adicionar para salvar.");
}

// Remover
function remover(id) {
    ingredientes = ingredientes.filter(i => i.id !== id);
    save();
    render();
    toast("Removido!");
}

// Toast
function toast(msg) {
    const t = document.getElementById("toast");
    t.innerText = msg;
    t.classList.add("show");

    setTimeout(() => t.classList.remove("show"), 2000);
}