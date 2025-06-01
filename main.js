let swiper;

function initSwiper() {
  if (window.innerWidth <= 768) { // Mobile
    swiper = new Swiper(".swiper", {
      direction: "horizontal",
      loop: false,
      keyboard: true,
      mousewheel: true,
      simulateTouch: true,
      touchRatio: 1,
      threshold: 20,
      touchAngle: 45,
      grabCursor: true,
    });
  } else { // Desktop
    swiper = new Swiper(".swiper", {
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
  }
}

// Inicializa o swiper ao carregar a página
window.addEventListener("load", initSwiper);

// Opcional: reinicializar ao redimensionar a janela para adaptar
window.addEventListener("resize", () => {
  if (swiper) {
    swiper.destroy(true, true);
  }
  initSwiper();
});

// Função Navigate continua a mesma:
function Navigate(index) {
  const links = document.querySelectorAll(".Links li");

  links.forEach(link => link.classList.remove("activeLink"));
  if (links[index]) {
    links[index].classList.add("activeLink");
  }

  swiper.slideTo(index, 1000, true);
}
