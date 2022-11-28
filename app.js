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

// Light/Dark Mode Btn
function toggleLightMode() {
  const themeBtn = document.querySelector(".theme-btn");
  const navLinkThemeBtn = document.querySelector(".nav__link--theme-button");

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

// Learn More Btn Dark Mode / Media Query: min-width: 600px
// function learnMoreBtnQueryDark() {
//   const mainBtnIcon = document.querySelector(".main__btn-icon");
//   const mainBtnText = document.querySelector(".main__btn-text");

//   window.onload = () => {
//     mainBtnText.style.color = "#CCC";
//   };

//   mainBtnIcon.addEventListener("mouseover", function handleMouseOver() {
//     mainBtnText.style.color = "#050e1d";
//   });

//   mainBtnIcon.addEventListener("mouseout", function handleMouseOut() {
//     mainBtnText.style.color = "#CCC";
//   });
// }

// // Learn More Btn Light Mode / Media Query: min-width: 600px
// function learnMoreBtnQueryLight() {
//   const mainBtnIcon = document.querySelector(".main__btn-icon");
//   const mainBtnText = document.querySelector(".main__btn-text");

//   window.onload = () => {
//     mainBtnText.style.color = "#050e1d";
//   };

//   mainBtnIcon.addEventListener("mouseover", function handleMouseOver() {
//     mainBtnText.style.color = "#CCC";
//   });

//   mainBtnIcon.addEventListener("mouseout", function handleMouseOut() {
//     mainBtnText.style.color = "#050e1d";
//   });
// }

// learnMoreBtnQueryDark();
// learnMoreBtnQueryLight();
