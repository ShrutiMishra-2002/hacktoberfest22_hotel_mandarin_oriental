const navBtn = document.getElementById("nav-btn");
const cancelBtn = document.getElementById("cancel-btn");
const sideNav = document.getElementById("sidenav");
const modal = document.getElementById("modal");
const scrollBg = document.querySelector(".scroll-bg");
const navigations = document.querySelectorAll(".navbar li");
const btn = document.getElementById("button");

var loader = document.getElementById("preloader");

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

window.addEventListener("load", function () {
  loader.style.display = "none";
  document.body.style.overflow = "unset";
});


// var btn = $('#btnScrollToTop');

// $(window).scroll(function () {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });

// btn.on('click', function (e) {
//   e.preventDefault();
//   $('html, body').animate({ scrollTop: 0 }, '300');
// });

// window.onscroll = () => {
//   toggleTopButton();
// }
// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: 'smooth' });
// }

// function toggleTopButton() {
//   if (document.body.scrollTop > 20 ||
//     document.documentElement.scrollTop > 20) {
//     document.getElementById('btnScrollToTop').style.display = "inline-block";
//   } else {
//     document.getElementById('btnScrollToTop').style.display = "none";
//   }
// }

let mybutton = document.getElementById("btnScrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}