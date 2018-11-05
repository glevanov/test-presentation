import '../sass/main.scss';
import '../img/arrow-down.png';

const SLIDER_PIN_WIDTH = 42.5;
const SLIDER_PIN_MIDPOINT = SLIDER_PIN_WIDTH / 2;

const sliderElement = document.querySelector('.slider');
const sliderScale = sliderElement.querySelector('.slider__scale');
const sliderFill = sliderElement.querySelector('.slider__fill');
const sliderPin = sliderElement.querySelector('.slider__pin');

const onSliderTouch = (evt) => {
  let sliderXPosition = evt.touches[0].clientX;

  const SLIDER_LEFT_COORDINATE = sliderScale.getBoundingClientRect().left;
  const SLIDER_RIGHT_COORDINATE = sliderScale.getBoundingClientRect().right;
  const SLIDER_WIDTH = SLIDER_RIGHT_COORDINATE - SLIDER_LEFT_COORDINATE;

  let sliderRelativePosition;

  const checkSliderBoundaries = (sliderPosition) => {
    if (sliderPosition < 0 - SLIDER_PIN_MIDPOINT) {
      return 0 - SLIDER_PIN_MIDPOINT;
    } else if (sliderPosition > SLIDER_WIDTH - SLIDER_PIN_MIDPOINT) {
      return SLIDER_WIDTH - SLIDER_PIN_MIDPOINT;
    }
    return sliderPosition;
  };

  const renderSliderPosition = () => {
    sliderPin.style.left = `${sliderRelativePosition}px`;
    sliderFill.style.width = `${sliderRelativePosition + SLIDER_PIN_MIDPOINT}px`;
  };

  const snapSliderPosition = () => {
    // Прикрутить к onTouchUp
  };

  const onTouchMove = (moveEvt) => {
    moveEvt.preventDefault();

    const calculateSliderPosition = () => {
      const currentTouchX = moveEvt.touches[0].clientX;
      const horizontalShift = sliderXPosition - currentTouchX;
      sliderRelativePosition = checkSliderBoundaries(sliderPin.offsetLeft - horizontalShift);
      sliderXPosition = currentTouchX;
    };

    calculateSliderPosition();
    renderSliderPosition();
  };

  const onTouchUp = (upEvt) => {
    upEvt.preventDefault();
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchUp);

  };

  document.addEventListener('touchmove', onTouchMove);
  document.addEventListener('touchend', onTouchUp);
};

sliderPin.addEventListener('touchstart', (evt) => {
  evt.preventDefault();
  onSliderTouch(evt);
});
