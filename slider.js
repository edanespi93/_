const d = document;

export default function responsiveSlider() {
  const $nextBtn = d.querySelector("#next"),
    $prev = d.querySelector("#prev"),
    $slides = d.querySelectorAll(".slider-slide");

  let i = 0;

  const next = () => {
    $slides[i].classList.remove("active");
    i--;
    if (i < 0) i = $slides.length - 1;
    $slides[i].classList.add("active");
  };

  const prev = () => {
    $slides[i].classList.remove("active");
    i++;
    if (i >= $slides.length) i = 0;
    $slides[i].classList.add("active");
  };

  d.addEventListener("click", (e) => {
    if (e.target === $prev) {
      e.preventDefault();
      next();
    }
    if (e.target === $nextBtn) {
      e.preventDefault();
      prev();
    }
  });
  window.addEventListener("DOMContentLoaded", (e) => {
    setInterval(() => {
      prev();
    }, 5000);
  });
}
