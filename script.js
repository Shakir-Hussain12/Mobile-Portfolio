const nav = document.querySelector('.page-flow');
const ham = document.querySelector('.hamburger');
const body = document.querySelector('body');
const li = document.querySelectorAll('.page-flow > li');
const sec = document.querySelectorAll('*');
let id;
let screenWidth = window.innerWidth;


function remAttributes() {
  nav.classList.remove('active');
  ham.classList.remove('active');
  body.classList.remove('b_active');
}

// Change values when window is resized
window.onresize = function() {
  screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    remAttributes();
  }
}

function addAttributes() {
  ham.addEventListener('click', () => {
    if (screenWidth < 768) {
      nav.classList.toggle('active');
      ham.classList.toggle('active');
      body.classList.toggle('b_active');
      li.forEach((n) => {
        n.addEventListener('click', () => {
          remAttributes();
        });
      });
    } else {
      remAttributes();
    }
  });
}

addAttributes();

sec.forEach((section) => {
  section.addEventListener('mouseenter', () => {
    id = section.getAttribute('id');
    if (id === 'about-myself') {
      li[0].classList.remove('active-page');
      li[1].classList.add('active-page');
      li[2].classList.remove('active-page');
    } else if (id === 'contact') {
      li[0].classList.remove('active-page');
      li[1].classList.remove('active-page');
      li[2].classList.add('active-page');
    } else if (id != null) {
      li[0].classList.add('active-page');
      li[1].classList.remove('active-page');
      li[2].classList.remove('active-page');
    }
  });
});
