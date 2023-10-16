import Splide from '@splidejs/splide';
// Default theme
import '@splidejs/splide/css';

const funds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: new URL('../images/1.png', import.meta.url).href,
    img2x: new URL('../images/1@2x.png', import.meta.url).href,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: new URL('../images/2.png', import.meta.url).href,
    img2x: new URL('../images/2@2x.png', import.meta.url).href,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: new URL('../images/3.png', import.meta.url).href,
    img2x: new URL('../images/3@2x.png', import.meta.url).href,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: new URL('../images/4.png', import.meta.url).href,
    img2x: new URL('../images/4@2x.png', import.meta.url).href,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: new URL('../images/5.png', import.meta.url).href,
    img2x: new URL('../images/5@2x.png', import.meta.url).href,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: new URL('../images/6.png', import.meta.url).href,
    img2x: new URL('../images/6@2x.png', import.meta.url).href,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: new URL('../images/7.png', import.meta.url).href,
    img2x: new URL('../images/7@2x.png', import.meta.url).href,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: new URL('../images/8.png', import.meta.url).href,
    img2x: new URL('../images/8@2x.png', import.meta.url).href,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: new URL('../images/9.png', import.meta.url).href,
    img2x: new URL('../images/9@2x.png', import.meta.url).href,
  },
];

const nextButton = document.querySelector('.splide__arrow.splide__arrow--next');
const rotateSvg = document.getElementById('rotate-svg');
const originalSvg = rotateSvg.innerHTML;

let isFlipped = false;

nextButton.addEventListener('click', () => {
  isFlipped = !isFlipped;

  if (isFlipped) {
    rotateSvg.innerHTML = `
      <svg id="icon-slider-3" viewBox="0 0 32 32">
        <path fill="#fff" style="fill: var(--color1, #fff)" d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16z"></path>
        <path fill="#4f2ee8" style="fill: var(--color2, #4f2ee8)" d="M15.452 14.919c0.072-0.072 0.157-0.13 0.251-0.169s0.195-0.059 0.297-0.059c0.102 0 0.203 0.020 0.297 0.059s0.179 0.097 0.251 0.169l3.535 3.543c0.072 0.072 0.157 0.13 0.251 0.169s0.195 0.059 0.297 0.059 0.203-0.020 0.297-0.059c0.094-0.039 0.179-0.097 0.251-0.169 0.144-0.145 0.224-0.34 0.224-0.544s-0.081-0.4-0.224-0.544l-3.543-3.543c-0.434-0.434-1.023-0.677-1.636-0.677s-1.202 0.244-1.637 0.677l-3.543 3.543c-0.143 0.144-0.223 0.338-0.224 0.54-0.001 0.102 0.019 0.202 0.057 0.296s0.095 0.18 0.167 0.252c0.072 0.072 0.157 0.13 0.251 0.169s0.195 0.059 0.297 0.059c0.102 0 0.203-0.020 0.297-0.059s0.179-0.097 0.251-0.169l3.535-3.543z"></path>
      </svg>
    `;
  } else {
    rotateSvg.innerHTML = originalSvg;
  }
});

funds.sort((a, b) =>
  a.title === 'UNITED24' ? 1 : b.title === 'UNITED24' ? -1 : 0
);

const slideList = document.querySelector('.splide__list');
const slides = [];

funds.forEach(fund => {
  const slide = document.createElement('li');
  slide.className = 'splide__slide';
  const fundLink = document.createElement('a');
  fundLink.href = fund.url;
  fundLink.target = '_blank';
  fundLink.rel = 'noopener noreferrer';
  fundLink.textContent = fund.title;

  if (fund.img) {
    const fundImage = document.createElement('img');
    fundImage.src = fund.img;
    if (window.devicePixelRatio >= 2) {
      fundImage.srcset = `${fund.img2x} 2x, ${fund.img} 1x`;
    }
    fundLink.textContent = '';
    fundLink.appendChild(fundImage);
  }

  slide.appendChild(fundLink);
  slides.push(slide);
});

slides.forEach(slide => {
  slideList.appendChild(slide);
});

const Slider = new Splide('#sliderOne', {
  perPage: 6,
  gap: '20px',
  pagination: false,
  direction: 'ttb',
  height: '292px',
  dynamicSlides: true,
  rewind: true,
});

Slider.mount();
