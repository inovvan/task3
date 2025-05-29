const slider1 = new Swiper('.slider1', {
  slidesPerView: 'auto',
  loop: false,
  spaceBetween: 40,
  direction: window.innerWidth <= 570 ? 'vertical' : 'horizontal',
  freeMode: true,

  navigation: {
    nextEl: '.channel-slider-prev',
    prevEl: '.channel-slider-next',
  },
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 570 && slider1.params.direction !== 'vertical') {
    slider1.changeDirection('vertical');;
  } else if (window.innerWidth > 570 && slider1.params.direction !== 'horizontal') {
    slider1.changeDirection('horizontal');
  }
});