const navToggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const footerBtnIcon = document.querySelector(".footer__btn-icon");
const footerBtnText = document.querySelector(".footer__btn-text");
const themeBtn = document.querySelector(".theme-btn");
const navLinkThemeBtn = document.querySelector(".nav__link--theme-button");

// Mobile Navigation Menu Toggle Btn
function mobileNavBtn() {
  navToggleBtn.addEventListener("click", function handleMouseClick() {
    nav.classList.toggle("nav--visible");
  });

  // Need to fix hamburger menu bug when drop down menu displays
  // navToggleBtn.addEventListener("mouseout", function handleMouseOut() {
  //   navToggleBtn.classList.toggle("nav-toggle--base");
  // });
}

mobileNavBtn();

// Learn More Btn
function learnMoreBtn() {
  window.onload = () => {
    footerBtnText.style.color = "#050e1d";
  };

  footerBtnIcon.addEventListener("mouseover", function handleMouseOver() {
    footerBtnText.style.color = "#CCC";
  });

  footerBtnIcon.addEventListener("mouseout", function handleMouseOut() {
    footerBtnText.style.color = "#050e1d";
  });
}

learnMoreBtn();

// Light/Dark Mode Btn
function toggleLightMode() {
  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });

  navLinkThemeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}

toggleLightMode();
