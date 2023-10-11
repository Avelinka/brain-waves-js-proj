import Splide from 'splide';

const funds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: 'save_the_children.png',
  },
  // Add more fund objects here...
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
