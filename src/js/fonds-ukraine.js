import Splide from '@splidejs/splide';

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
  

const supportFonds = document.querySelector('.support-fonds ul');
const slideBtn = document.querySelector('.slide-btn');

function createFundItem(fund) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <a href="${fund.url}" target="_blank">
      <img src="${fund.img}" alt="${fund.title}" />
    </a>
  `;
  return listItem;
}

function initializeSplide() {
  new Splide('.splide', {
    perPage: 1,
    perMove: 1,
    rewind: true,
  }).mount();
}

function addFundsToSlider() {
  funds.forEach((fund) => {
    supportFonds.appendChild(createFundItem(fund));
  });
  initializeSplide();
}

slideBtn.addEventListener('click', () => {
  // Scroll to the next slide on button click
  const splide = Splide.get('.splide');
  splide.go('+1');
});

addFundsToSlider();
