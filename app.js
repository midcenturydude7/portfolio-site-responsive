// Global DOM variables
const iconBtn = document.getElementById("icon-btn");
const navLinkThemeBtn = document.querySelector(".nav__link--theme-button");

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

// Responsive Menu
const get = (element) => document.getElementById(element);

let open = get("menu-btn");
let navBar = get("navbar-responsive");
let navTitle = get("nav-title");
let exit = get("exit-btn");

open.addEventListener("click", () => {
  navBar.classList.remove("navbar-responsive-close");
  navBar.classList.add("navbar-responsive-open");
  navTitle.style.display = "none";
  open.style.display = "none";
  exit.style.display = "block";
});

exit.addEventListener("click", () => {
  navBar.classList.remove("navbar-responsive-open");
  navBar.classList.add("navbar-responsive-close");
  navTitle.style.display = "block";
  open.style.display = "block";
  exit.style.display = "none";
});
