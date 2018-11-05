import slidesList from "./slidesList.js";

const hideSlides = () => {
  slidesList.forEach(it => it.classList.add("visually-hidden"));
};

const showSlide = index => {
  slidesList[index].classList.remove("visually-hidden");
};

const switchSlide = index => {
  hideSlides();
  showSlide(index);
};

export default switchSlide;
