/* ==========================================================
   MENU MOBILE
========================================================== */

const menu = document.querySelector(".menu");
const menuMobile = document.querySelector(".menu-mobile");

menuMobile.addEventListener("click", () => {

    menu.classList.toggle("active");

});

/* ==========================================================
   FECHAR MENU AO CLICAR
========================================================== */

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

    });

});

/* ==========================================================
   HEADER
========================================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

/* ==========================================================
   GALERIA AUTOMÁTICA
========================================================== */

const slides = document.querySelectorAll(".slide");

let slideAtual = 0;

function trocarSlide(){

    slides[slideAtual].classList.remove("active");

    slideAtual++;

    if(slideAtual >= slides.length){

        slideAtual = 0;

    }

    slides[slideAtual].classList.add("active");

}

setInterval(trocarSlide,4500);

/* ==========================================================
   ANIMAÇÃO DAS SEÇÕES
========================================================== */

const reveals = document.querySelectorAll(".reveal");

function revelar(){

    const alturaTela = window.innerHeight;

    reveals.forEach(item => {

        const posicao = item.getBoundingClientRect().top;

        if(posicao < alturaTela - 100){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", revelar);

revelar();

/* ==========================================================
   DEPOIMENTOS AUTOMÁTICOS (30 CLIENTES)
========================================================== */

const depoimentos = [
    { nome: "Juliana Silva", nota: 5, texto: "Lugar maravilhoso! Estrutura impecável e atendimento excelente. Minha festa foi perfeita." },
    { nome: "Carlos Eduardo", nota: 4.8, texto: "Muito bom o espaço, bem organizado e confortável. Recomendo demais." },
    { nome: "Mariana Souza", nota: 5, texto: "Simplesmente incrível! Superou todas as expectativas da nossa família." },
    { nome: "Rafael Lima", nota: 4.7, texto: "Espaço ótimo, bem localizado e com ótima estrutura para eventos." },
    { nome: "Ana Paula", nota: 5, texto: "Foi tudo perfeito, ambiente lindo e muito bem cuidado." },
    { nome: "Bruno Almeida", nota: 4.6, texto: "Muito bom, minha formatura foi um sucesso aqui." },
    { nome: "Fernanda Costa", nota: 5, texto: "Atendimento impecável e estrutura excelente. Recomendo muito!" },
    { nome: "Lucas Pereira", nota: 4.8, texto: "Lugar top, muito organizado e confortável para festas grandes." },
    { nome: "Camila Rocha", nota: 5, texto: "Amei tudo! Meu aniversário foi inesquecível." },
    { nome: "Gustavo Martins", nota: 4.7, texto: "Ótimo espaço, fácil acesso e bem estruturado." },
    { nome: "Patrícia Gomes", nota: 5, texto: "Experiência incrível, tudo muito bem organizado." },
    { nome: "Thiago Santos", nota: 4.9, texto: "Excelente local para eventos, recomendo demais." },
    { nome: "Larissa Mendes", nota: 5, texto: "Tudo perfeito, ambiente muito bonito e confortável." },
    { nome: "Felipe Rocha", nota: 4.8, texto: "Muito bom, estrutura de qualidade e ótimo atendimento." },
    { nome: "Julio César", nota: 4.7, texto: "Lugar excelente para festas e eventos em geral." },
    { nome: "Beatriz Oliveira", nota: 5, texto: "Superou todas as expectativas, simplesmente maravilhoso." },
    { nome: "Daniel Ferreira", nota: 4.6, texto: "Espaço muito bom, bem limpo e organizado." },
    { nome: "Carla Dias", nota: 5, texto: "Perfeito para qualquer tipo de evento, recomendo muito." },
    { nome: "Eduardo Ramos", nota: 4.8, texto: "Estrutura muito boa e atendimento excelente." },
    { nome: "Vanessa Lopes", nota: 5, texto: "Minha festa foi incrível, tudo perfeito!" },
    { nome: "Ricardo Nunes", nota: 4.7, texto: "Ótimo custo-benefício e espaço muito bonito." },
    { nome: "Natália Barros", nota: 5, texto: "Amei o espaço, tudo muito organizado e bonito." },
    { nome: "André Carvalho", nota: 4.8, texto: "Muito bom mesmo, recomendo para eventos grandes." },
    { nome: "Sofia Martins", nota: 5, texto: "Perfeito em todos os detalhes, adorei!" },
    { nome: "Leandro Silva", nota: 4.6, texto: "Ótimo lugar para comemorações especiais." },
    { nome: "Camila Torres", nota: 5, texto: "Tudo maravilhoso, ambiente muito agradável." },
    { nome: "Paulo Henrique", nota: 4.7, texto: "Excelente estrutura e atendimento nota 10." },
    { nome: "Aline Ribeiro", nota: 5, texto: "Foi uma experiência incrível, recomendo muito!" },
    { nome: "Marcos Vinicius", nota: 4.8, texto: "Muito bom, espaço bem organizado e bonito." },
    { nome: "Isabela Fernandes", nota: 5, texto: "Simplesmente perfeito, minha festa foi inesquecível." }
];

const container = document.querySelector(".depoimentos-slider");

let index = 0;

// Criar estrelas
function criarEstrelas(nota){

    let estrelas = "";

    for(let i = 1; i <= 5; i++){

        if(i <= Math.floor(nota)){
            estrelas += "⭐";
        }else{
            estrelas += "☆";
        }

    }

    return estrelas;
}

// Criar cards
function criarDepoimentos(){

    depoimentos.forEach((item, i) => {

        const div = document.createElement("div");

        div.classList.add("depoimento");

        if(i === 0) div.classList.add("active");

        div.innerHTML = `
            <div class="depoimento-card">
                <h3>${item.nome}</h3>
                <div class="estrelas">${criarEstrelas(item.nota)}</div>
                <p>"${item.texto}"</p>
            </div>
        `;

        container.appendChild(div);

    });

}

criarDepoimentos();

const cards = document.querySelectorAll(".depoimento");

function trocarDepoimento(){

    cards[index].classList.remove("active");

    index++;

    if(index >= cards.length){
        index = 0;
    }

    cards[index].classList.add("active");

}

setInterval(trocarDepoimento, 5000);

/* ==========================================================
   BOTÃO ESCOLHA DE MAPA
========================================================== */

function abrirRota(){

    const endereco = "Jan Festas, Vista Alegre, Jaboatão Centro";

    const escolha = confirm("Deseja abrir no Google Maps?\n\nOK = Google Maps\nCancelar = Waze");

    if(escolha){

        // GOOGLE MAPS
        window.open(
            "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(endereco),
            "_blank"
        );

    } else {

        // WAZE
        window.open(
            "https://waze.com/ul?q=" + encodeURIComponent(endereco),
            "_blank"
        );

    }

}
