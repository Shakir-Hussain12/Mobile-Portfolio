const nav = document.querySelector('.page-flow');
const ham = document.querySelector('.hamburger');
const body = document.querySelector('body');
const li = document.querySelectorAll('.page-flow > li');
const sec = document.querySelectorAll('*');
const show = document.querySelector('#showDetails');
const btnExpand = document.querySelectorAll('.normal-button');
const btnCollapse = document.querySelector('.closeBtn');

let navId;
let screenWidth = window.innerWidth;

const showData = {
  title: [
    'Tonic',
    'Multi-Post Stories',
    'Facebook 360',
    'Uber navigation',
  ],
  detail: [
    [
      'CANOPY',
      'FACEBOOK',
      'FACEBOOK',
      'UBER',
    ],
    [
      'Back End Dev',
      'Full Stack Dev',
      'Full Stack Dev',
      'Lead Developer',
    ],
  ],
  info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: [
    './images/Tag.png',
    './images/Tag (1).png',
    './images/Tag(2).png',
    './desktop-images/Tag.png',
  ],
  src: [
    './desktop-images/SnapshootPortfolio.png',
    './desktop-images/SnapshootPortfolio-1.png',
    './desktop-images/SnapshootPortfolio-2.png',
    './desktop-images/SnapshootPortfolio-3.png',
  ],
  buttons: [
    [
      'https://shakir-hussain12.github.io/Mobile-Portfolio/',
      'https://github.com/Shakir-Hussain12/Mobile-Portfolio',
    ],
    [
      './desktop-images/Live_btn.png',
      './desktop-images/Source_Btn.png',
    ],
  ],
};

function remAttributes() {
  nav.classList.remove('active');
  ham.classList.remove('active');
  body.classList.remove('b_active');
}

// Change values when window is resized
window.onresize = () => {
  screenWidth = window.innerWidth;
  if (screenWidth >= 768) {
    remAttributes();
  }
};

function addAttributes() {
  ham.addEventListener('click',
    () => {
      if (screenWidth < 768) {
        nav.classList.toggle('active');
        ham.classList.toggle('active');
        body.classList.toggle('b_active');
        li.forEach((n) => {
          n.addEventListener('click',
            () => {
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
  section.addEventListener('mouseenter',
    () => {
      navId = section.getAttribute('navId');
      if (navId === 'about-myself') {
        li[0].classList.remove('active-page');
        li[1].classList.add('active-page');
        li[2].classList.remove('active-page');
      } else if (navId === 'contact') {
        li[0].classList.remove('active-page');
        li[1].classList.remove('active-page');
        li[2].classList.add('active-page');
      } else if (navId != null) {
        li[0].classList.add('active-page');
        li[1].classList.remove('active-page');
        li[2].classList.remove('active-page');
      }
    });
});

btnExpand.forEach((button) => {
  button.addEventListener('click',
    (e) => {
      const check = e.target.parentElement.parentElement.dataset.name;
      show.classList.add('activate');
      const title = show.getElementsByClassName('showtitle')[0];
      const thumb = show.getElementsByClassName('showthumbnail')[0];
      const inp = show.querySelector('.showoutside p');
      const inpDetail = show.querySelector('.showdetails li');
      const p = show.querySelector('.showtext p');
      const tech = show.querySelectorAll('.showtech');
      const btn = show.querySelectorAll('.showbuttons');
      for (let i = 0; i < 4; i+=1) {
        if (showData.title[i].includes(check)) {
          title.textContent = showData.title[i];
          thumb.children[0].src = showData.src[i];
          inp.textContent = showData.detail[0][i];
          inpDetail.textContent = showData.detail[1][i];
          p.textContent = showData.info;
          for (let j=0;j<showData.tech.length;j+=1) {
            tech[0].children[j].children[0].src = showData.tech[j];
          }
          for (let j=0;j<showData.buttons.length;j+=1) {
            btn[0].children[1].children[j].children[0].href = showData.buttons[0][j];
            btn[0].children[1].children[j].children[0].children[0].src = showData.buttons[1][j];
          }
        }
      }
    });
});

btnCollapse.addEventListener('click',
  () => {
    show.classList.remove('activate');
  });
