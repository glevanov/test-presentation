import config from "./config.js";
import state from "./state.js";
import switchSlide from "./switchSlide.js";

const coordsOnYAxis = {
  start: 0,
  end: 0
};

const MIN_SWIPE_LENGTH =
  (config.MAX_VIEWPORT_Y / 100) * config.MIN_SLIDE_PERCENT;

// Function receives touch coordinates from event and returns
// 1 if swiped down, -1 if swiped up, 0 if swipe is too short
const calcSwipeDirection = coords => {
  const diff = coords.start - coords.end;
  if (Math.abs(diff) < MIN_SWIPE_LENGTH) {
    return 0;
  }
  if (diff < 0) {
    return 1;
  } else {
    return -1;
  }
};

const validateSlideIndex = index => {
  if (index < 0) {
    return 0;
  } else if (index > config.MAX_SLIDE_INDEX) {
    return config.MAX_SLIDE_INDEX;
  }
  return index;
};

const switchSlides = () => {
  switch (calcSwipeDirection(coordsOnYAxis)) {
    case 0:
      break;
    case 1:
      state.currentSlideIndex = validateSlideIndex(
        state.currentSlideIndex + 1
      );
      switchSlide(state.currentSlideIndex);
      break;
    case -1:
      state.currentSlideIndex = validateSlideIndex(
        state.currentSlideIndex - 1
      );
      switchSlide(state.currentSlideIndex);
      break;
  }
};

const onTouchStart = evt => {
  coordsOnYAxis.start = evt.touches[0].clientY;
};

const onTouchEnd = evt => {
  coordsOnYAxis.end = evt.changedTouches[0].clientY;
  switchSlides();
};

const addCarouselHandlers = () => {
  document.addEventListener("touchstart", onTouchStart);
  document.addEventListener("touchend", onTouchEnd);
};

const removeCarouselHandlers = () => {
  document.removeEventListener("touchstart", onTouchStart);
  document.removeEventListener("touchend", onTouchEnd);
};

export { addCarouselHandlers, removeCarouselHandlers };
