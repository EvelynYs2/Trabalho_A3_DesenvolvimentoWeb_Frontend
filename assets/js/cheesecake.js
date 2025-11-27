// Ingredientes
const ingredientes = [
    "200g bolacha maizena",
    "80g manteiga",
    "600g cream cheese",
    "1 xícara de açúcar",
    "3 ovos",
    "Baunilha",
    "Geleia de morango"
];

const preparo = [
    "Triture as bolachas com a manteiga até formar uma farofa úmida.",
    "Forre o fundo de uma forma de aro removível com a mistura, pressionando bem.",
    "Em uma tigela, bata o cream cheese, açúcar, ovos e essência de baunilha até formar um creme liso.",
    "Despeje o creme sobre a base de bolacha na forma.",
    "Asse em forno pré-aquecido a 180°C por aproximadamente 45 minutos, até firmar levemente.",
    "Retire do forno, deixe esfriar completamente e leve à geladeira por pelo menos 2 horas.",
    "Finalize espalhando geleia de morango por cima antes de servir."
];

// Renderiza na tela
const ul = document.getElementById("ingredientes");
ingredientes.forEach(i => {
    const li = document.createElement("li");
    li.textContent = i;
    ul.appendChild(li);
});

const ol = document.getElementById("modo");
preparo.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    ol.appendChild(li);
});