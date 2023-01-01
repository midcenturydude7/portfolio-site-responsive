// Reset animation
"use strict";
// Global DOM variables
const colOne = document.querySelector(".one");
const colTwo = document.querySelector(".two");
const first = document.getElementById("first");
const second = document.getElementById("second");
const paraOne = document.querySelector(".para-one");
const paraTwo = document.querySelector(".para-two");

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

// Home Page: col--right box with text animation
// The 411
first.addEventListener(
  "click",
  (e) => {
    e.preventDefault;
    // Border-bottom toggle with time interval delay ti simulate slide
    setTimeout(() => {
      colOne.style.borderBottom = "4px solid var(--COLOR-GRAY-02)";
      colTwo.style.borderBottom = "none";
    }, 110);

    // Reset animation helper: hides graph #2
    paraTwo.classList.remove("para-two");
    void paraTwo.offsetWidth;
    paraTwo.classList.add("para-two");

    // Reset animation helper: shows graph #1 w/animation
    paraOne.classList.remove("para-one-invisible");
    void paraOne.offsetWidth;
    paraOne.classList.add("clicked-left");
  },
  false
);

// What's Next
second.addEventListener(
  "click",
  (e) => {
    e.preventDefault;
    // Border-bottom toggle with time interval delay ti simulate slide
    setTimeout(() => {
      colOne.style.borderBottom = "none";
      colTwo.style.borderBottom = "4px solid var(--COLOR-GRAY-02)";
    }, 110);

    // Reset animation helper: hides graph #1
    paraOne.classList.remove("para-one");
    void paraOne.offsetWidth;
    paraOne.classList.add("para-one-invisible");

    // Reset animation helper: shows graph #2 w/animation
    paraTwo.classList.remove("para-two");
    void paraTwo.offsetWidth;
    paraTwo.classList.add("clicked-right");
  },
  false
);

// Hover event for 4px border bottom color change
// function borderBottomChange() {
//   first.addEventListener("mouseover", () => {
//     colOne.style.borderBottom = "4px solid var(--COLOR-SECONDARY)";
//   });

//   first.addEventListener("mouseout", () => {
//     colOne.style.borderBottom = "4px solid var(--COLOR-GRAY-02)";
//   });
// }
// borderBottomChange();
