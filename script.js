const options={
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '🌓', // default: ''
  autoMatchOsTheme: true // default: true
}
const darkmode = new Darkmode(options);
darkmode.showWidget();


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