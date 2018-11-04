import config from './config.js';

const coordsOnYAxis = {
  start: 0,
  end: 0
};

const MIN_SLIDE_LENGTH = config.MAX_VIEWPORT_Y / 100 * config.MIN_SLIDE_PERCENT;

// Function receives touch coordinates from event and returns
// 1 if swiped down, -1 if swiped up, 0 if swipe is too short
const compareCoords = (coords) => {
  const diff = coords.start - coords.end;
  if (Math.abs(diff) < MIN_SLIDE_LENGTH) {
    return 0;
  }
  if (diff < 0) {
    return 1;
  } else {
    return -1;
  }
};

const page = document.querySelector('.page');

page.addEventListener('touchstart', (evt) => {
  coordsOnYAxis.start = evt.touches[0].clientY;
});
page.addEventListener('touchend', (evt) => {
  coordsOnYAxis.end = evt.changedTouches[0].clientY;
  console.log(compareCoords(coordsOnYAxis));
});
