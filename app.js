const navToggleBtn = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const footerBtnIcon = document.querySelector(".footer__btn-icon");
const footerBtnText = document.querySelector(".footer__btn-text");

navToggleBtn.addEventListener("click", function handleMouseClick() {
  nav.classList.toggle("nav--visible");
});

function learnMoreBtn() {
  footerBtnIcon.addEventListener("mouseover", function handleMouseOver() {
    footerBtnText.classList.toggle("footer__btn-text--hover");
  });

  footerBtnIcon.addEventListener("mouseout", function handleMouseOut() {
    footerBtnText.classList = "footer__btn-text";
  });
}

learnMoreBtn();
