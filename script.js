const titulo = document.getElementById("title");
const textoInicial = document.getElementById("textoInicial");

let estadoInicial = true;
let posicionTexto = 0;

const textos = ["Hola", "Bienvenidos", "a", "esta", "página", "web"];

textoInicial.innerText = textos[posicionTexto];

textoInicial.addEventListener("click", () => {
    if (posicionTexto < textos.length - 1) {
        posicionTexto++;
        textoInicial.innerText = textos[posicionTexto];
    } else {
        posicionTexto = 0; // Reiniciar al principio
        textoInicial.innerText = textos[posicionTexto];
    }
});

titulo.addEventListener("click", () => {
    if (estadoInicial) {
        titulo.innerText = "Bienvenidxs";
    } else {
        titulo.innerText = "Hola, soy Arturito adivinador";
    }
    estadoInicial = !estadoInicial;
});