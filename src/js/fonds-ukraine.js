const funds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: 'images/1.png',
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: 'images/2.png',
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: 'images/3.png',
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: 'images/4.png',
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: 'images/5.png',
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: 'images/6.png',
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: 'images/7.png',
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: 'images/8-min.png',
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: 'images/9.png',
  },
];

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
  fundLink.target = '_blank'; // Відкривати посилання у новому вікні
  fundLink.rel = 'noopener noreferrer'; // Забезпечувати безпеку
  fundLink.textContent = fund.title;

  if (fund.img) {
    const fundImage = document.createElement('img');
    fundImage.src = fund.img;
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
