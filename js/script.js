const imagensEvento = [
    'img/grupo-de-amigos-olhando-o-cardapio-juntos-no-restaurante.jpg',    
    'img/mulheres-de-alto-angulo-desfrutando-de-comida-deliciosa.jpg',
    'img/pessoa-que-usa-tecnologia-nfc-para-pagar-em-um-restaurante.jpg',
    'img/mulher-leva-baklava-para-comer-com-cha.jpg',
    'img/casal-tendo-um-encontro-no-restaurante.jpg'
];


let indiceAtual = 0;

const imgCarrosel = document.getElementById('carrosel-img'); // associando ao o ID aqui
const btnAnterior = document.getElementById('anterior');
const btnProximo = document.getElementById('proximo');

function  mostrarImagem(indice){
    imgCarrosel.src =imagensEvento[indice]; 
}

btnAnterior.addEventListener('click', () => {
    indiceAtual = (indiceAtual - 1 + imagensEvento.length) % imagensEvento.length;
    mostrarImagem(indiceAtual);
});

btnProximo.addEventListener('click', () => {
    indiceAtual = (indiceAtual + 1 + imagensEvento.length) % imagensEvento.length;
    mostrarImagem(indiceAtual);
});

// Inicializa com a primeira imagem
mostrarImagem(indiceAtual);

const btnTopo = document.getElementById('btnTopo');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100) {
        btnTopo.style.display = "block";
    } else{
        btnTopo.style.display = "none";
    }
});


document.getElementById("topoBtn").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
