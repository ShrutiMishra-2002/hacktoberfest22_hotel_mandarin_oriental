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