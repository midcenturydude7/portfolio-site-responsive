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
function toggleLightModeMobile() {
  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click", () => {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
}
toggleLightModeMobile();

function toggleLightModeDesktop() {
  const navLinkThemeBtn = document.querySelector(".nav__link--theme-button");
  const mainBtnIcon = document.querySelector(".main__btn-icon");
  const mainBtnText = document.querySelector(".main__btn-text");
  const mainBtnTextHover = document.querySelector(".main__btn-text--hover");

  navLinkThemeBtn.addEventListener("click", () => {
    let element = document.body;

    if (element.classList.toggle("light-mode")) {
      mainBtnText.style.color = "#050e1d";

      mainBtnIcon.addEventListener("mouseover", function handleMouseOver() {
        mainBtnTextHover.style.color = "#CCC";
      });

      mainBtnIcon.addEventListener("mouseout", function handleMouseOut() {
        mainBtnText.style.color = "#050e1d";
      });
    } else if (element.classList.toggle("root")) {
      mainBtnText.style.color = "#CCC";

      mainBtnIcon.addEventListener("mouseover", function handleMouseOver() {
        mainBtnTextHover.style.color = "#050e1d";
      });
      mainBtnIcon.addEventListener("mouseout", function handleMouseOut() {
        mainBtnText.style.color = "#CCC";
      });
    }
  });

  if (navLinkThemeBtn.classList.toggle("root")) {
    learnMoreBtnQueryDark();
  } else if (navLinkThemeBtn.classList.toggle("light-mode")) {
    learnMoreBtnQueryLight();
  }
}
toggleLightModeDesktop();

// Learn More Btn Dark Mode / Media Query: min-width: 600px
function learnMoreBtnQueryDark() {
  const mainBtnIcon = document.querySelector(".main__btn-icon");
  const mainBtnTextHover = document.querySelector(".main__btn-text--hover");
  const mainBtnText = document.querySelector(".main__btn-text");

  window.addEventListener("load", () => {
    mainBtnText.style.color = "#CCC";
  });

  mainBtnIcon.addEventListener("mouseover", function handleMouseOver() {
    mainBtnTextHover.style.color = "#050e1d";
  });

  mainBtnIcon.addEventListener("mouseout", function handleMouseOut() {
    mainBtnText.style.color = "#CCC";
  });
}

// Learn More Btn Light Mode / Media Query: min-width: 600px
function learnMoreBtnQueryLight() {
  const mainBtnIcon = document.querySelector(".main__btn-icon");
  const mainBtnTextHover = document.querySelector(".main__btn-text--hover");
  const mainBtnText = document.querySelector(".main__btn-text");

  window.addEventListener("load", () => {
    mainBtnText.style.color = "#050e1d";
  });

  mainBtnIcon.addEventListener("mouseover", function handleMouseOver() {
    mainBtnTextHover.style.color = "#CCC";
  });

  mainBtnIcon.addEventListener("mouseout", function handleMouseOut() {
    mainBtnText.style.color = "#050e1d";
  });
}
