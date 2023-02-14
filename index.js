let botaoMenu = document.querySelector(".cabecalho__botao-menu");
let menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", () => {
    botaoMenu = menu.classList.toggle("menu--ativo");
})

