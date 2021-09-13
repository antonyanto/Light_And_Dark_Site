window.addEventListener("load", () => {
  document.getElementsByClassName("preloader")[0].style.display = "none";
});

const toggleNavbar = document.getElementById("toggle_button");
const subContainer = document.getElementById("sub_container");
const navLinks = document.getElementById("nav_links");
const linksInNav = document.querySelectorAll("#nav_links > a");
toggleNavbar.addEventListener("click", () => {
  toggleNavbar.classList.toggle("active_nav");
  subContainer.classList.toggle("hide_when_nav");
  navLinks.classList.toggle("active");
});
linksInNav.forEach((element) => {
  element.addEventListener("click", () => {
    toggleNavbar.classList.toggle("active_nav");
    subContainer.classList.toggle("hide_when_nav");
    navLinks.classList.toggle("active");
  })
});

const mainContainer = document.getElementById("main_container");
const toggleButton = document.querySelector("#sub_container > i:nth-of-type(1)");
const icons = document.querySelectorAll("#sub_container > div > div > div > a i");
const hamBurger = document.querySelectorAll("#toggle_button > div");
toggleButton.addEventListener("click", () => {
  mainContainer.classList.toggle("dark_theme");
  navLinks.classList.toggle("dark_theme");
  console.log(hamBurger);
  hamBurger.forEach((element) => {
    if (element.classList.contains("dark_theme")) {
      element.classList.replace("dark_theme", "light_theme");
    } else {
      element.classList.replace("light_theme", "dark_theme");
    }    
  })
  icons.forEach((element) => {
    if (element.classList.contains("light_icon_color")) {
      element.classList.replace("light_icon_color", "dark_icon_color");
    } else {
      element.classList.replace("dark_icon_color", "light_icon_color");
    }
  })
});
