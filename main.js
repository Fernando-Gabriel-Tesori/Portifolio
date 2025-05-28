// Inicialização do Swiper com efeito Cube
const swiper = new Swiper(".swiper", {
    effect: "cube",
    allowTouchMove: false,
    grabCursor: false,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    mousewheel: true,
});

// Função customizada para movimentação (log de debug)
swiper.sliderMove = function (start, end) {
    console.log(start);
};

// Navega para o slide e ativa o item de navegação correspondente
function Navigate(index) {
    const links = document.querySelectorAll(".Links li");

    links.forEach(link => link.classList.remove("activeLink"));
    if (links[index]) {
        links[index].classList.add("activeLink");
    }

    swiper.slideTo(index, 1000, true);
}
