const nav = document.querySelector('.page-flow');
const ham = document.querySelector('.hamburger');
const body = document.querySelector('body');
let li = document.querySelectorAll('.page-flow > li');
let x = window.matchMedia('(max-width: 768px)');
let sec = document.querySelectorAll('*');
let id;

function myFunction(x) {
  // If media query matches
  if (x.matches) {
    x.addListener(myFunction);
    ham.addEventListener('click', () => {
      nav.classList.toggle('active');
      ham.classList.toggle('active');
      body.classList.toggle('b_active');
    });
    li.forEach((n) => {
      n.addEventListener('click', () => {
        nav.classList.remove('active');
        ham.classList.remove('active');
        body.classList.remove('b_active');
      });
    });
  } else {
    nav.classList.remove('active');
    ham.classList.remove('active');
    body.classList.remove('b_active');
  }
}

myFunction(x);

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
