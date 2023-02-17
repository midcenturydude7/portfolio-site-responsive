// // Mobile Navigation Menu Toggle Btn
// const mobileNavBtn = () => {
//   const navToggleBtn = document.querySelector(".nav-toggle");
//   const nav = document.querySelector(".nav");

//   navToggleBtn.addEventListener("click", function handleMouseClick() {
//     nav.classList.toggle("nav--visible");
//   });

//   navToggleBtn.addEventListener("mouseover", () => {
//     let element = document.getElementById("nav-toggle");
//     element.classList.replace("nav-toggle", "nav-toggle-hover");
//   });

//   navToggleBtn.addEventListener("mouseout", () => {
//     let element = document.getElementById("nav-toggle");
//     element.classList.replace("nav-toggle-hover", "nav-toggle");
//   });
// };
// mobileNavBtn();

// // Learn More Btn Mobile
// const learnMoreBtnMobile = () => {
//   const footerBtnIcon = document.querySelector(".footer__btn-icon");
//   const footerBtnText = document.querySelector(".footer__btn-text");

//   window.onload = () => {
//     footerBtnText.style.color = "#050e1d";
//   };

//   footerBtnIcon.addEventListener("mouseover", () => {
//     footerBtnText.style.color = "#CCC";
//   });

//   footerBtnIcon.addEventListener("mouseout", () => {
//     footerBtnText.style.color = "#050e1d";
//   });
// };
// learnMoreBtnMobile();

// // Light/Dark Mode Btn >> Responsive
// function toggleLightModeMobile() {
//   const themeBtn = document.querySelector(".theme-btn");

//   themeBtn.addEventListener("click", () => {
//     let element = document.body;
//     element.classList.toggle("light-mode");
//   });
// }
// toggleLightModeMobile();

// Global DOM variables
const mainTheme = document.body;
const navLinkThemeBtn = document.querySelector(".nav__link--theme-button");
const iconBtn = document.querySelector(".icon-btn");
let lightMode = localStorage.getItem("light-mode");
let darkMode = localStorage.getItem("dark-mode");

// Light/Dark Mode Btn >> Large Screens
function enableLightMode() {
  mainTheme.classList.add("light-mode-theme"); // replaces darkMode at the :root
  navLinkThemeBtn.classList.remove("light-mode-toggle");
  mainTheme.classList.remove("dark-mode-theme");
  iconBtn.classList.replace("fa-brightness", "fa-moon");
  navLinkThemeBtn.style.padding = "0.2em 0.575em";
  localStorage.setItem("light-mode", "enabled");
  localStorage.setItem("dark-mode", "disabled");
}

function disableLightMode() {
  mainTheme.classList.remove("light-mode-theme");
  navLinkThemeBtn.classList.add("light-mode-toggle");
  mainTheme.classList.add("dark-mode-theme");
  iconBtn.classList.replace("fa-moon", "fa-brightness");
  navLinkThemeBtn.style.padding = "0.2em 0.45em";
  localStorage.setItem("light-mode", "disabled");
  localStorage.setItem("dark-mode", "enabled");
}

if (lightMode === "enabled") {
  enableLightMode(); // set state of lightMode on page load | user seleciton is stored and persists
}

navLinkThemeBtn.addEventListener("click", () => {
  lightMode = localStorage.getItem("light-mode"); // Update to lightMode when clicked
  lightMode === "disabled" ? enableLightMode() : disableLightMode(); // Checks mode
});

console.log(`Lightmode is: ${lightMode}`);
console.log(`Darkmode is: ${darkMode}`);

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
