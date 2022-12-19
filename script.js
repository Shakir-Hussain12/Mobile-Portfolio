var nav = document.querySelector('.page-flow');
var ham = document.querySelector('.hamburger');
var body = document.querySelector('body');
var li = document.querySelectorAll('.page-flow > li');
var x = window.matchMedia('(max-width: 768px)');
var sec = document.querySelectorAll('*');
myFunction(x);
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
sec.forEach((section) => {
  section.addEventListener('mouseenter', () => {
    id = section.getAttribute('id');
    if (id == 'about-myself') {
      li[0].classList.remove('active-page');
      li[1].classList.add('active-page');
      li[2].classList.remove('active-page');
    } else if (id == 'contact') {
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
