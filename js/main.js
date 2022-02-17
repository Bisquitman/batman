const sliderThumbs = new Swiper('.slider-thumbs', {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  centeredSlides: true,
  loopedSlides: 4,
});

sliderThumbs.on('click', (swiper) => {
  swiper.slideTo(swiper.clickedIndex);
});

const sliderMain = new Swiper('.slider-main', {
  loop: true,
  spaceBetween: 20,
  loopedSlides: 4,
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;