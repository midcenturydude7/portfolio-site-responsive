// Global DOM variables
const iconBtn = document.querySelector(".icon-btn");

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
    if (element.classList.value === "light-mode") {
      localStorage.setItem("light-mode-theme", "enabled");
      iconBtn.classList.replace("fa-brightness", "fa-moon");
      navLinkThemeBtn.style.padding = "0.2em 0.575em";
    } else if (element.classList.value === "") {
      iconBtn.classList.replace("fa-moon", "fa-brightness");
      navLinkThemeBtn.style.padding = "0.2em 0.45em";
    }
  });

  navLinkThemeBtn.addEventListener("mouseover", () => {
    navLinkThemeBtn.classList.replace(
      "nav__link--theme-button",
      "nav__link--theme-button-hover"
    );
  });

  navLinkThemeBtn.addEventListener("mouseout", () => {
    navLinkThemeBtn.classList.replace(
      "nav__link--theme-button-hover",
      "nav__link--theme-button"
    );
  });
}
toggleLightModeDesktop();

// Light/Dark Mode Btn >> Mouseout Event
function iconBtnMouseout() {
  iconBtn.addEventListener("mouseout", () => {
    iconBtn.classList.replace("icon-btn", "icon-btn--mouseout");
  });

  iconBtn.addEventListener("mouseover", () => {
    iconBtn.classList.replace("icon-btn--mouseout", "icon-btn");
  });
}
iconBtnMouseout();
