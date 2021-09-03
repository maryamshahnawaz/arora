const menuBtn = document.querySelector(".menu-btn");
const ulBtn = document.querySelector(".ul-list");
let menuOpenBtn = false;

menuBtn.addEventListener('click', () => {
 if (!menuOpenBtn) {
  menuBtn.classList.add('open');
  ulBtn.classList.add('show');
  menuOpenBtn = true;
 } else {
  menuBtn.classList.remove('open');
  ulBtn.classList.remove('show');
  menuOpenBtn = false;
 }
});

window.addEventListener('DOMContentLoaded', () => {
 if ($(window).width() > 600) {

 }
});



