const sliderEl = document.querySelector("#range");
const sliderValue = document.querySelector(".value");

sliderEl.addEventListener("input", (event) => {
  const tempSliderValue = event.target.value;

  sliderValue.textContent = tempSliderValue;

  const progress = (tempSliderValue / sliderEl.max) * 100;

  sliderEl.style.background = `linear-gradient(to right, #00ace1 ${progress}%, #000 ${progress}%)`;
});

// function progressScript() {
//   const sliderValue = sliderEl.value;
//   sliderEl.style.background = `linear-gradient(to right, #f50 ${sliderValue}%, #ccc ${sliderValue}%)`;
// }

// progressScript()

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});
