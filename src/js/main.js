import '../sass/main.scss';
import '../img/arrow-down.png';

const SLIDER_DEFAULT_POSITION = 0;
const SLIDER_PIN_WIDTH = 42.5;
const SLIDER_PIN_MIDPOINT = SLIDER_PIN_WIDTH / 2;

const sliderElement = document.querySelector('.slider');
const sliderScale = sliderElement.querySelector('.slider__scale');
const sliderFill = sliderElement.querySelector('.slider__fill');
const sliderPin = sliderElement.querySelector('.slider__pin');

const onSliderTouch = (evt) => {
  // Надо пересмотреть лекцию Игоря
  // По клику на слайдер - отключить обработчик скролла, потом вернуть

  const sliderXPosition = evt.touches[0].clientX;

  const SLIDER_LEFT_COORDINATE = sliderScale.getBoundingClientRect().left;
  const SLIDER_RIGHT_COORDINATE = sliderScale.getBoundingClientRect().right;
  const SLIDER_WIDTH = SLIDER_RIGHT_COORDINATE - SLIDER_LEFT_COORDINATE;

  const onTouchMove = (moveEvt) => {

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
