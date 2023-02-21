// Reset animation
("use strict");

// Global DOM variables
const colOne = document.querySelector(".one");
const colTwo = document.querySelector(".two");
const first = document.getElementById("first");
const second = document.getElementById("second");
const paraOne = document.querySelector(".para-one");
const paraTwo = document.querySelector(".para-two");
const boxAnimLeft = document.querySelector(".box-animation-left");
const boxAnimRight = document.querySelector(".box-animation-right");

// Learn More Btn >> Large Screens
const learnMoreBtnBigScreen = () => {
  const mainBtnIcon = document.querySelector(".main__btn-icon");

  mainBtnIcon.addEventListener("mouseover", () => {
    let element = document.getElementById("main__btn-text");
    element?.classList.replace("main__btn-text", "main__btn-text--hover");
  });

  mainBtnIcon.addEventListener("mouseout", () => {
    let element = document.getElementById("main__btn-text");
    element?.classList.replace("main__btn-text--hover", "main__btn-text");
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
// TL;DR
first.addEventListener(
  "click",
  (e) => {
    e.preventDefault;
    // Border-bottom toggle with time interval delay to simulate slide
    setTimeout(() => {
      colOne.style.borderBottom = "4px solid var(--COLOR-GRAY-02)";
      colTwo.style.borderBottom = "none";
      boxAnimLeft.style.setProperty(
        "--boxShadowAfter",
        "5px 55px 55px 5px rgba(213, 206, 247, 0.185)"
      );
      boxAnimRight.style.setProperty("--boxShadowAfter", "none");
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
      boxAnimRight.style.setProperty(
        "--boxShadowAfter",
        "5px 55px 55px 5px rgba(213, 206, 247, 0.185)"
      );
      boxAnimLeft.style.setProperty("--boxShadowAfter", "none");
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
