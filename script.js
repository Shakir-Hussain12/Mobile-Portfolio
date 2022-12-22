const nav = document.querySelector('.page-flow');
const ham = document.querySelector('.hamburger');
const body = document.querySelector('body');
const show = document.querySelector('#showDetails');
const btnCollapse = document.querySelector('.closeBtn');
const head = document.querySelector('header');
let screenWidth = window.innerWidth;

const items = [];
let instance = {
  title: 'Tonic',
  details: [
    'CANOPY',
    'Back End Dev',
    '2015',
  ],
  info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: [
    './images/Tag.png',
    './images/Tag (1).png',
    './images/Tag(2).png',
  ],
  src: 'img1',
  url: [
    './images/SnapshootPortfolio.png',
    './desktop-images/SnapshootPortfolio.png',
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
items.push(instance);

instance = {
  title: 'Multi Post Stories',
  details: [
    'Facebook',
    'Full Stack Dev',
    '2015',
  ],
  info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: [
    './images/Tag.png',
    './images/Tag (1).png',
    './images/Tag(2).png',
    './desktop-images/Tag.png',
  ],
  src: 'img2',
  url: [
    './images/SnapshootPortfolio-2.png',
    './desktop-images/SnapshootPortfolio-1.png',
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
items.push(instance);

instance = {
  title: 'Facebook 360',
  details:
    [
      'Facebook',
      'Full Stack Dev',
      '2015',
    ],
  info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: [
    './images/Tag.png',
    './images/Tag (1).png',
    './images/Tag(2).png',
    './desktop-images/Tag.png',
  ],
  src: 'img3',
  url: [
    './images/SnapshootPortfolio-1.png',
    './desktop-images/SnapshootPortfolio-2.png',
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
items.push(instance);

instance = {
  title: 'Uber Navigation',
  details: [
    'UBER',
    'Lead Developer',
    '2015',
  ],
  info: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  tech: [
    './images/Tag.png',
    './images/Tag (1).png',
    './images/Tag(2).png',
    './desktop-images/Tag.png',
  ],
  src: 'img4',
  url: [
    './images/SnapshootPortfolio-3.png',
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
items.push(instance);

// Hamburger

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

const wrap = document.querySelector('.wrapper');
btnCollapse.addEventListener('click',
  () => {
    show.classList.remove('activate');
    head.classList.remove('active');
    wrap.classList.remove('active');
  });

const dataName = [
  'Tonic',
  'Multi',
  'Facebook',
  'Uber',
];
let i = 0;

// Functions
const addname = (elem) => {
  elem.dataset.name = dataName[i];
  i += 1;
};

const createElem = (name, cName) => {
  const d = document.createElement(name);
  if (cName) {
    d.classList.add(cName);
  }
  return d;
};

const createParent = (name) => {
  const d = document.createElement('div');
  d.classList.add(name);
  addname(d);
  return d;
};

// Dynamic Data Addition to Grid
items.forEach((item) => {
  const section = document.getElementById('work');
  const d = createParent('work-item');
  section.appendChild(d);
  const thumb = createElem('div');
  thumb.classList.add('thumbnail');
  let a = thumb.appendChild(createElem('a'));
  a.href = '#';
  const img = a.appendChild(createElem('img',
    item.src));
  img.alt = 'Not Found';
  d.appendChild(thumb);
  const d1 = d.appendChild(createElem('div',
    'primary-text'));
  const title = d1.appendChild(createElem('h1',
    'title'));
  title.textContent = item.title;
  let ul = d1.appendChild(createElem('ul',
    'frame-2'));
  let li = createElem('li',
    'client');
  const [
    tit,
    det1,
    det2,
  ] = item.details;
  li.textContent = tit;
  ul.appendChild(li);
  const ul1 = createElem('ul',
    'inside');
  li = createElem('li',
    'details');
  li.textContent = det1;
  ul1.appendChild(li);
  li = createElem('li',
    'details');
  li.textContent = det2;
  ul1.appendChild(li);
  ul.appendChild(ul1);
  const p = d1.appendChild(createElem('p',
    'description'));
  p.textContent = item.info;
  ul = d1.appendChild(createElem('ul',
    'tags'));
  for (let ind = 0; ind < item.tech.length; ind += 1) {
    li = document.createElement('li');
    const img1 = li.appendChild(document.createElement('img'));
    img1.src = item.tech[ind];
    ul.appendChild(li);
  }
  a = d1.appendChild(createElem('a',
    'normal-button'));
  a.href = '#showmenu';
  a.textContent = 'See Project';
});

// Dynamic Data Addition to Pop-up
const btnExpand = document.querySelectorAll('.normal-button');
btnExpand.forEach((button) => {
  button.addEventListener('click',
    (e) => {
      const check = e.target.parentElement.parentElement.dataset.name;
      show.classList.add('activate');
      head.classList.add('active');
      wrap.classList.add('active');
      const title = show.getElementsByClassName('showtitle')[0];
      const thumb = show.getElementsByClassName('showthumbnail')[0];
      const inp = show.querySelector('.showoutside p');
      const inpDetail = show.querySelectorAll('.showinside li');
      const p = show.querySelector('.showtext p');
      const tech = show.querySelectorAll('.showtech');
      const btn = show.querySelectorAll('.showbuttons');
      for (let ind = 0; ind < items.length; ind += 1) {
        if (items[ind].title.includes(check)) {
          title.textContent = items[ind].title;
          const [, u2] = items[ind].url;
          thumb.children[0].src = u2;
          const tit = items[ind].details[0];
          inp.textContent = tit;
          for (let j = 0; j < items[ind].details.length - 1; j += 1) {
            inpDetail[j].textContent = items[ind].details[j + 1];
          }
          p.textContent = items[ind].info;
          for (let j = 0; j < items[ind].tech.length; j += 1) {
            tech[0].children[j].children[0].src = items[ind].tech[j];
          }
          for (let j = 0; j < items[ind].buttons.length; j += 1) {
            btn[0].children[1].children[j].children[0].href = items[ind].buttons[0][j];
            btn[0].children[1].children[j].children[0].children[0].src = items[ind].buttons[1][j];
          }
        }
      }
    });
});

const lin = document.querySelectorAll('.page-flow > li');
function addAttributes() {
  ham.addEventListener('click',
    () => {
      if (screenWidth < 768) {
        nav.classList.toggle('active');
        ham.classList.toggle('active');
        body.classList.toggle('b_active');
        lin.forEach((n) => {
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

const sec = document.querySelectorAll('*');
sec.forEach((section) => {
  section.addEventListener('mouseenter',
    () => {
      const id = section.getAttribute('id');
      if (id === 'about-myself') {
        lin[0].classList.remove('active-page');
        lin[1].classList.add('active-page');
        lin[2].classList.remove('active-page');
      } else if (id === 'contact') {
        lin[0].classList.remove('active-page');
        lin[1].classList.remove('active-page');
        lin[2].classList.add('active-page');
      } else if (id != null) {
        lin[0].classList.add('active-page');
        lin[1].classList.remove('active-page');
        lin[2].classList.remove('active-page');
      }
    });
});
