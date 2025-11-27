// ===== INGREDIENTES NA BANCADA =====
let bancada = JSON.parse(localStorage.getItem("ingredientes")) || [];

document.getElementById("lista-bancada").innerHTML =
    bancada.map(i => `<li>${i}</li>`).join("");


// ===== BANCO DE RECEITAS =====
const receitas = [
    {
        nome: "Lasanha Clássica Bolonhesa",
        ingredientes: [
            "massa de lasanha", "carne moída", "cebola", "molho de tomate",
            "presunto", "mussarela", "manteiga", "farinha", "leite", "sal", "orégano"
        ]
    },
    {
        nome: "Cheesecake de Forno (Estilo Gringo)",
        ingredientes: [
            "bolacha maizena", "manteiga", "cream cheese",
            "açúcar", "ovos", "baunilha", "geleia de morango"
        ],
    url: "assets/pages/cheesecake.html"  // Caminho correto para cheesecake.html
    },
    {
        nome: "Bolo Simples Caseiro",
        ingredientes: ["farinha", "açúcar", "ovos", "manteiga", "fermento", "leite"]
    },
    {
        nome: "Bolo de Chocolate",
        ingredientes: ["farinha", "açúcar", "ovos", "manteiga", "chocolate", "fermento", "leite"]
    },
    {
        nome: "Bolo de Cenoura",
        ingredientes: ["cenoura", "farinha", "açúcar", "ovos", "manteiga", "fermento"]
    }
];


// ===== RECOMENDAÇÃO =====
function recomendarReceitas() {
    const lista = document.getElementById("lista-receitas");
    lista.innerHTML = "";

    receitas.forEach(r => {
        // Verifica se algum ingrediente da receita está na bancada
        const combinam = r.ingredientes.filter(ing =>
            bancada.map(x => x.toLowerCase()).includes(ing.toLowerCase())
        );

        if (combinam.length === 0) return;  // Se não combinar com nada, não mostra a receita

        // === CARD QUE ABRE OUTRA PÁGINA ===
        if (r.url) {
            lista.innerHTML += `
                <div class="card abrir" onclick="window.location.href='${r.url}'">
                    <h3>${r.nome}</h3>
                    <p><b>Combina com:</b></p>
                    ${combinam.map(m => `<span class='badge'>${m}</span>`).join("")}
                    <p><b>Ingredientes:</b></p>
                    <p>${r.ingredientes.join(", ")}</p>
                    <div class="ver">➤ Ver modo de preparo</div>
                </div>
            `;
            return;  // Impede de adicionar outro card
        }

        // === CARD NORMAL ===
        lista.innerHTML += `
            <div class="card">
                <h3>${r.nome}</h3>
                <p><b>Combina com:</b></p>
                ${combinam.map(m => `<span class='badge'>${m}</span>`).join("")}
                <p><b>Ingredientes:</b></p>
                <p>${r.ingredientes.join(", ")}</p>
            </div>
        `;
    });
}

recomendarReceitas();
