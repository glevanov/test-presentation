import slidesList from "./slidesList.js";

const slideMarkers = Array.from(document.querySelectorAll('.carousel__control'));

const hideSlides = () => {
  slidesList.forEach(it => it.classList.add("visually-hidden"));
};

const showSlide = index => {
  slidesList[index].classList.remove("visually-hidden");
};

const resetSlideMarker = () => {
  slideMarkers.forEach(it => it.classList.remove("carousel__control--selected"));
};

const setSlideMarker = index => {
  slideMarkers[index].classList.add("carousel__control--selected");
};

const switchSlide = index => {
  hideSlides();
  showSlide(index);
  resetSlideMarker();
  setSlideMarker(index);
};

export default switchSlide;
