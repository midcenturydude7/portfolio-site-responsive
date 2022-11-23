const navToggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const footerBtnIcon = document.querySelector(".footer__btn-icon");
const footerBtnText = document.querySelector(".footer__btn-text");
const themeBtn = document.querySelector(".theme-btn");
const navLinkThemeBtn = document.querySelector(".nav__link--theme-button");

navToggleBtn.addEventListener("click", function handleMouseClick() {
  nav.classList.toggle("nav--visible");
});

function learnMoreBtn() {
  footerBtnIcon.addEventListener("mouseover", function handleMouseOver() {
    footerBtnText.classList.toggle("footer__btn-text--hover");
  });

  footerBtnIcon.addEventListener("mouseout", function handleMouseOut() {
    footerBtnText.classList = "footer__btn-text";
  });
}

learnMoreBtn();

themeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("light-mode");
});

navLinkThemeBtn.addEventListener("click", () => {
  let element = document.body;
  element.classList.toggle("light-mode");
});
