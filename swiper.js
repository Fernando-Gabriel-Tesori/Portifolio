const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: false,
  keyboard: true,
  mousewheel: true,
  simulateTouch: true, // Ativa o suporte a toque
  touchRatio: 1,       // Sensibilidade do toque (1 é padrão)
  threshold: 20,       // Distância mínima para considerar um swipe
  touchAngle: 45,      // Ângulo permitido (45° é bom para horizontal)
  grabCursor: true,    // Mostra cursor de "pegar" no desktop
});
