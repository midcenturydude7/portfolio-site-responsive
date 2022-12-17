// Mobile Navigation Menu Toggle Btn
function mobileNavBtn() {
  const navToggleBtn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  navToggleBtn.addEventListener("click", function handleMouseClick() {
    nav.classList.toggle("nav--visible");
  });

  // Need to fix hamburger menu bug when drop down menu displays
  // navToggleBtn.addEventListener("mouseout", function handleMouseOut() {
  //   navToggleBtn.classList.toggle("nav-toggle--base");
  // });
}
mobileNavBtn();

// Learn More Btn Mobile
function learnMoreBtnMobile() {
  const footerBtnIcon = document.querySelector(".footer__btn-icon");
  const footerBtnText = document.querySelector(".footer__btn-text");

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
learnMoreBtnMobile();

// Light/Dark Mode Btn >> Responsive
function toggleLightModeMobile() {
  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}
toggleLightModeMobile();

// Light/Dark Mode Btn & Learn More Btn >> Large Screens
function toggleLightModeDesktop() {
  const navLinkThemeBtn = document.querySelector(".nav__link--theme-button");
  const mainBtnIcon = document.querySelector(".main__btn-icon");

  navLinkThemeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });

  mainBtnIcon.addEventListener("mouseover", () => {
    let element = document.getElementById("main__btn-text");
    element.classList.replace("main__btn-text", "main__btn-text--hover");
  });

  mainBtnIcon.addEventListener("mouseout", () => {
    let element = document.getElementById("main__btn-text");
    element.classList.replace("main__btn-text--hover", "main__btn-text");
  });
}
toggleLightModeDesktop();
