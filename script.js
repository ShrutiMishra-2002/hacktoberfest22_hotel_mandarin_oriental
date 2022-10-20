const navBtn = document.getElementById("nav-btn");
const cancelBtn = document.getElementById("cancel-btn");
const sideNav = document.getElementById("sidenav");
const modal = document.getElementById("modal");
const scrollBg = document.querySelector(".scroll-bg");
const navigations = document.querySelectorAll(".navbar li");

var loader= document.getElementById("preloader");

navBtn.addEventListener("click", function () {
  sideNav.classList.add("show");
  modal.classList.add("showModal");
});

cancelBtn.addEventListener("click", function () {
  sideNav.classList.remove("show");
  modal.classList.remove("showModal");
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    sideNav.classList.remove("show");
    modal.classList.remove("showModal");
  }
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) scrollBg.classList.add("active");
  else scrollBg.classList.remove("active");
});

navigations.forEach((nav) => {
  nav.addEventListener("click", () => {
    sideNav.classList.remove("show");
    modal.classList.remove("showModal");
  });
});

window.addEventListener("load",function(){
  loader.style.display="none";
  document.body.style.overflow = "unset";
});

function darkTheme(){
  document.body.classList.toggle("dark-mode");
  const darkHeadingsELes = document.querySelectorAll(".drk-md-hnd");
  for(const darkHeadingsELe of darkHeadingsELes){
    darkHeadingsELe.classList.toggle("dark-mode-headings");
  }

  const darkTitleELes = document.querySelectorAll(".title");
  for(const darkTitleELe of darkTitleELes){
    darkTitleELe.classList.toggle("dark-title");
  }

  const darkReviewsCards = document.querySelectorAll(".content");
  for(const darkReviewsCard of darkReviewsCards){
    darkReviewsCard.classList.toggle("dark-card-hover");
  }

  const darkReviewsTexts = document.querySelectorAll(".customers-text");
  for(const darkReviewsText of darkReviewsTexts){
    darkReviewsText.classList.toggle("dark-customers-text");
  }

  const darkFontAweIcons = document.querySelectorAll(".fas");
  for(const darkFontAweIcon of darkFontAweIcons){
    darkFontAweIcon.classList.toggle("fa-dark-iconcolor");
  }

}
