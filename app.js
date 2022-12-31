// Mobile Navigation Menu Toggle Btn
const mobileNavBtn = () => {
  const navToggleBtn = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  navToggleBtn.addEventListener("click", function handleMouseClick() {
    nav.classList.toggle("nav--visible");
  });

  navToggleBtn.addEventListener("mouseover", () => {
    let element = document.getElementById("nav-toggle");
    element.classList.replace("nav-toggle", "nav-toggle-hover");
  });

  navToggleBtn.addEventListener("mouseout", () => {
    let element = document.getElementById("nav-toggle");
    element.classList.replace("nav-toggle-hover", "nav-toggle");
  });
};
mobileNavBtn();

// Learn More Btn Mobile
const learnMoreBtnMobile = () => {
  const footerBtnIcon = document.querySelector(".footer__btn-icon");
  const footerBtnText = document.querySelector(".footer__btn-text");

  window.onload = () => {
    footerBtnText.style.color = "#050e1d";
  };

  footerBtnIcon.addEventListener("mouseover", () => {
    footerBtnText.style.color = "#CCC";
  });

  footerBtnIcon.addEventListener("mouseout", () => {
    footerBtnText.style.color = "#050e1d";
  });
};
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

// Light/Dark Mode Btn >> Large Screens
function toggleLightModeDesktop() {
  const navLinkThemeBtn = document.querySelector(".nav__link--theme-button");

  navLinkThemeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });

  navLinkThemeBtn.addEventListener("mouseover", () => {
    let element = document.getElementById("nav__link");
    element.classList.replace(
      "nav__link--theme-button",
      "nav__link--theme-button-hover"
    );
  });

  navLinkThemeBtn.addEventListener("mouseout", () => {
    let element = document.getElementById("nav__link");
    element.classList.replace(
      "nav__link--theme-button-hover",
      "nav__link--theme-button"
    );
  });
}
toggleLightModeDesktop();

// Learn More Btn >> Large Screens
const learnMoreBtnBigScreen = () => {
  const mainBtnIcon = document.querySelector(".main__btn-icon");

  mainBtnIcon.addEventListener("mouseover", () => {
    let element = document.getElementById("main__btn-text");
    element.classList.replace("main__btn-text", "main__btn-text--hover");
  });

  mainBtnIcon.addEventListener("mouseout", () => {
    let element = document.getElementById("main__btn-text");
    element.classList.replace("main__btn-text--hover", "main__btn-text");
  });
};
learnMoreBtnBigScreen();

const downloadBtn = () => {
  const mainBtnIconRight = document.querySelector(".main__btn-icon--right");

  mainBtnIconRight.addEventListener("mouseover", () => {
    let element = document.getElementById("main__btn-text--right");
    element.classList.replace(
      "main__btn-text--right",
      "main__btn-text--right-hover"
    );
  });

  mainBtnIconRight.addEventListener("mouseout", () => {
    let element = document.getElementById("main__btn-text--right");
    element.classList.replace(
      "main__btn-text--right-hover",
      "main__btn-text--right"
    );
  });
};
downloadBtn();

