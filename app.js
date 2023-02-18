// LOOK FOR RESET
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
const iconBtn = document.getElementById("icon-btn");
const navLinkThemeBtn = document.querySelector(".nav__link--theme-button");

// Light/Dark Mode Btn >> Large Screens
const currentTheme = localStorage.getItem("theme");
// Initial state
if (currentTheme == "light") {
  document.body.classList.add("light-mode-theme");
  iconBtn.classList.toggle("fa-moon");
  navLinkThemeBtn.style.padding = "0.2em 0.575em";
}

navLinkThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode-theme");

  let theme = "dark";
  if (document.body.classList.contains("light-mode-theme")) {
    theme = "light";
  }
  localStorage.setItem("theme", theme);

  // State syncs followiing click event
  if (theme == "light") {
    iconBtn.classList.replace("fa-brightness", "fa-moon");
    navLinkThemeBtn.style.padding = "0.2em 0.575em";
  } else if (theme == "dark" || "") {
    iconBtn.classList.replace("fa-moon", "fa-brightness");
    navLinkThemeBtn.style.padding = "0.2em 0.45em";
  }
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
