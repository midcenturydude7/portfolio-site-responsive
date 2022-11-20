const navToggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

navToggleBtn.addEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
