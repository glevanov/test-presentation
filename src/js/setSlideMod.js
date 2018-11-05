const slide = document.querySelector(".slide-3");
const resetSlideMods = () => {
  slide.classList.remove("slide-3--bg-1", "slide-3--bg-2", "slide-3--bg-3");
};
const setSlideMod = modNumber => {
  resetSlideMods();
  slide.classList.add(`slide-3--bg-${modNumber}`);
};

export default setSlideMod;
