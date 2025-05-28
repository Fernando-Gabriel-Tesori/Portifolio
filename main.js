
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

swiper.sliderMove = function (start, end) {
    console.log(start);
};

function Navigate(index) {
    const links = document.querySelectorAll(".Links li");

    links.forEach(link => link.classList.remove("activeLink"));
    if (links[index]) {
        links[index].classList.add("activeLink");
    }

    swiper.slideTo(index, 1000, true);
}
