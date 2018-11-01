import '../sass/main.scss';
import '../img/arrow-down.png';

// Состояние
const state = {
  currentSlideIndex: 0
};

// Конфигурация
const config = {
  MAX_SLIDE_INDEX: 2,
  MAX_VIEWPORT_X: 1024,
  MAX_VIEWPORT_Y: 768,
  MIN_SLIDE_PERCENT: 5,
};

// Слайдер
const coordsOnY = {
  start: 0,
  end: 0
};

const page = document.querySelector('.page');
page.addEventListener('touchstart', (evt) => {
  coordsOnY.start = evt.touches[0].clientY;
});
page.addEventListener('touchend', (evt) => {
  coordsOnY.end = evt.changedTouches[0].clientY;
  console.log(compareCoords(coordsOnY));
});

const MIN_SLIDE_LENGTH = config.MAX_VIEWPORT_Y / 100 * config.MIN_SLIDE_PERCENT;
const compareCoords = (coordsOnY) => {
  const diff = coordsOnY.start - coordsOnY.end;
  if (Math.abs(diff) < MIN_SLIDE_LENGTH) {
    return 0;
  }
  if (diff < 0) {
    return 1;
  } else {
    return -1;
  }
};
