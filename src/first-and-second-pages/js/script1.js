const slider1 = new Swiper('.slider1', {
  slidesPerView: 'auto',
  loop: false,
  spaceBetween: 40,
  direction: window.innerWidth <= 480 ? 'vertical' : 'horizontal',
  freeMode: true,

  navigation: {
    nextEl: '.channel-slider-prev',
    prevEl: '.channel-slider-next',
  },
});

const slider2 = new Swiper('.slider2', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  freeMode: true,
  loop: false,

  navigation: {
    nextEl: '.recommended-slider-prev',
    prevEl: '.recommended-slider-next',
  },
});

const slider3 = new Swiper('.slider3', {
  slidesPerView: 'auto',
  spaceBetween: 40,
  freeMode: true,
  loop: false,

  navigation: {
    nextEl: '.channel2-slider-prev',
    prevEl: '.channel2-slider-next',
  },
});

window.addEventListener('resize', () => {
  if (window.innerWidth <= 480 && slider1.params.direction !== 'vertical') {
    slider1.changeDirection('vertical');;
  } else if (window.innerWidth > 480 && slider1.params.direction !== 'horizontal') {
    slider1.changeDirection('horizontal');
  }
});