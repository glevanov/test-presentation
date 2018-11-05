import setSlideMod from "./setSlideMod.js";

const sliderElement = document.querySelector(".slider");
const sliderScale = sliderElement.querySelector(".slider__scale");
const sliderFill = sliderElement.querySelector(".slider__fill");
const sliderPin = sliderElement.querySelector(".slider__pin");

const SCALE_LEFT_COORDINATE = sliderScale.getBoundingClientRect().left;
const SCALE_RIGHT_COORDINATE = sliderScale.getBoundingClientRect().right;
const SCALE_WIDTH = SCALE_RIGHT_COORDINATE - SCALE_LEFT_COORDINATE;
const SCALE_BREAKPOINTS = {
  quarter1: SCALE_WIDTH / 4,
  mid: SCALE_WIDTH / 2,
  quarter3: (SCALE_WIDTH / 4) * 3
};

const PIN_WIDTH = 42.5;
const PIN_MIDPOINT = PIN_WIDTH / 2;
const PIN_START_COORDINATE = 0 - PIN_MIDPOINT;
const PIN_END_COODRINATE = SCALE_WIDTH - PIN_MIDPOINT;

const onSliderTouch = evt => {
  let sliderXPosition = evt.touches[0].clientX;
  let sliderRelativePosition;

  const checkSliderBoundaries = sliderPosition => {
    if (sliderPosition < PIN_START_COORDINATE) {
      return PIN_START_COORDINATE;
    } else if (sliderPosition > PIN_END_COODRINATE) {
      return PIN_END_COODRINATE;
    }
    return sliderPosition;
  };
  const calculateSliderPosition = moveEvt => {
    const currentTouchX = moveEvt.touches[0].clientX;
    const horizontalShift = sliderXPosition - currentTouchX;
    sliderRelativePosition = checkSliderBoundaries(
      sliderPin.offsetLeft - horizontalShift
    );
    sliderXPosition = currentTouchX;
  };
  const renderSliderPosition = () => {
    sliderPin.style.left = `${sliderRelativePosition}px`;
    sliderFill.style.width = `${sliderRelativePosition + PIN_MIDPOINT}px`;
  };
  const snapSliderPosition = () => {
    if (sliderRelativePosition < SCALE_BREAKPOINTS.quarter1) {
      sliderRelativePosition = PIN_START_COORDINATE;
      setSlideMod(1);
    } else if (
      sliderRelativePosition >= SCALE_BREAKPOINTS.quarter1 &&
      sliderRelativePosition < SCALE_BREAKPOINTS.quarter3
    ) {
      sliderRelativePosition = SCALE_BREAKPOINTS.mid - PIN_MIDPOINT;
      setSlideMod(2);
    } else {
      sliderRelativePosition = PIN_END_COODRINATE;
      setSlideMod(3);
    }
    renderSliderPosition();
  };

  const onTouchMove = moveEvt => {
    moveEvt.preventDefault();
    calculateSliderPosition(moveEvt);
    renderSliderPosition();
  };
  const onTouchUp = upEvt => {
    upEvt.preventDefault();
    snapSliderPosition();
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchUp);
  };

  document.addEventListener("touchmove", onTouchMove);
  document.addEventListener("touchend", onTouchUp);
};

const initSlider = () => {
  sliderPin.addEventListener("touchstart", evt => {
    evt.preventDefault();
    onSliderTouch(evt);
  });
};

export { initSlider };
