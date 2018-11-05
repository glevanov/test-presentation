import slidesList from "./slidesList.js";

const hideSlides = () => {
  slidesList.forEach(it => it.classList.add("hidden"));
};

const showSlide = index => {
  slidesList[index].classList.remove("hidden");
};

const switchSlide = index => {
  hideSlides();
  showSlide(index);
};

export default switchSlide;
