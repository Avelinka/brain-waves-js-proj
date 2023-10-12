

const funds = [
  {
    title: 'Save the Children',
    url:
      'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];

const slideList = document.querySelector('.splide__list');
const slides = [];

funds.forEach((fund) => {
  const slide = document.createElement('li');
  slide.className = 'splide__slide';
  const fundLink = document.createElement('a');
  fundLink.href = fund.url;
  fundLink.textContent = fund.title;
  slide.appendChild(fundLink);
  slides.push(slide);
});


slides.forEach((slide) => {
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
