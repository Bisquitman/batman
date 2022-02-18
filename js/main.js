// Burger menu
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
  navigation.classList.add('navigation_active');
});
navigationClose.addEventListener('click', () => {
  navigation.classList.remove('navigation_active');
});
// --- end of Burger menu ---

// Background music
// try-catch - на случай, если на какой-то странице музыку не надо подключать, и нет блока для неё
try {
  const mute = document.querySelector('.mute__checkbox');
  const audio = new Audio('./assets/audio/waterTower.mp3');

  const checkMute = () => {
    if (mute.checked) {
      audio.play().catch(() => mute.checked = false);
    } else {
      audio.pause();
    }
  };
  checkMute();

  if (mute) setTimeout(checkMute, 2000); // Проверяем, вдруг на странице нет переключателя mute

  mute.addEventListener('change', checkMute);
} catch { }
// --- end of Background music ---

// Swiper slider
try {
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

  const videos = document.querySelectorAll('video');

  sliderMain.on('slideChange', () => {
    for (let i = 0; i < videos.length; i++) {
      videos[i].pause();

    }
  });

  const pagination = document.querySelector('.pagination');
  const paginationArrow = document.querySelector('.pagination__arrow');

  paginationArrow.addEventListener('click', () => {
    pagination.classList.toggle('pagination_active');
  });
} catch { }

// --- end of Swiper slider ---