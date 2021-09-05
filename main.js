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

window.addEventListener('resize', () => {
 if (window.innerWidth <= 550) {
  ulBtn.classList.add('show');
 } else {
  ulBtn.classList.remove('show');
 }
});




