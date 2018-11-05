import { addCarouselHandlers, removeCarouselHandlers } from "./carousel.js";

const activationElement = document.querySelector(".slide-3__image");
const modalElement = document.querySelector(".modal");

const onActivationTouchHandler = (evt) => {
  modalElement.classList.remove("visually-hidden");
  removeCarouselHandlers();
};

const onModalTouchHandler = () => {
  modalElement.classList.add("visually-hidden");
  addCarouselHandlers();
};

const addModalHandlers = () => {
  activationElement.addEventListener("touchstart", onActivationTouchHandler);
  modalElement.addEventListener("touchstart", onModalTouchHandler);
};

export { addModalHandlers };
