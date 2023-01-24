let botaoMenu = document.querySelector(".cabecalho__botao-menu");
let menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", () => {
    botaoMenu = menu.classList.toggle("menu--ativo");
})

let menuListaBotao = document.querySelector(".menu-lista__botao--atracoes");
let menuAtracoes = document.querySelector(".menu-atracoes");

menuListaBotao.addEventListener("click", () => {
    menuListaBotao = menuAtracoes.classList.toggle("menu-atracoes--ativo");
})

let menuListaEventosBotao = document.querySelector(".menu-lista__botao--eventos");
let menuEventos = document.querySelector(".menu-eventos");

menuListaEventosBotao.addEventListener("click", () => {
    menuListaEventosBotao = menuEventos.classList.toggle("menu-eventos--ativo");
})

let menuListaMaisBotao = document.querySelector(".menu-lista__botao--mais");
let menuMais = document.querySelector(".menu-mais");

menuListaMaisBotao.addEventListener("click", () => {
    menuListaMaisBotao = menuMais.classList.toggle("menu-mais--ativo");
})