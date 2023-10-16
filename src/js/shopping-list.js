// import Pagination from 'tui-pagination';

import './swither-theme';
import './mobile-menu';
import './fonds-ukraine';
// import './button';
import { getInformationBtId } from './fetch-requests';

const emptyElement = document.querySelector('.cart');
const shopList = document.querySelector('.js-list');
let removeButtons = document.querySelectorAll('.js-remove');

const storageKey = 'shoping-list';
const products = JSON.parse(localStorage.getItem(storageKey)) || [];

function createMarkup(arr) {
  const amazon = {
    title: 'AmazonMarketplace',
    img: new URL('../images/mask_group_corrected.png', import.meta.url).href,
    img2x: new URL('../images/mask_group_corrected@2x.png', import.meta.url)
      .href,
  };

  const book = {
    title: 'Book',
    img: new URL('../images/image_1.png', import.meta.url).href,
    img2x: new URL('../images/image_1@2x.png', import.meta.url).href,
  };

  const imgUrl = new URL('/images/sprite.svg#icon-trash', import.meta.url).href;

  return arr
    .map(
      ({ author, book_image, buy_links, title, description, list_name }) => `
        <li data-id="${title}" class="js-product shopping-list-item">
          <div class="shop-list-item-box">
            <div class="shop-list-img-wrap">
              <img src="${book_image}" alt="${title}" class="shop-list-img"/> 
            </div>
            <div class="shop-item-div">
              <h2 class="shopping-list-title">${title}</h2>
              <p class="shop-list-category">${list_name}</p>
              <p class="shop-list-text">${description}</p>
              <h2 class="shopping-list-author">${author}</h2>
            </div>
            <button type="button" class="js-remove shop-list-trash-btn" data-id="${title}">
              <svg class="bag-icon" width="16" height="16">
                <use href=${imgUrl}></use>
              </svg>
            </button>
            <div class="shop-list-amazon-wrap">
            <a
              href="${buy_links[0].url}"
              target="blank"
              ><img
              alt="${amazon.title}"
              class="marketplace-img-modal shop-list-item-link shop-list-amazon"
              srcset="
              ${amazon.img}, ${amazon.img2x} 2x
              "/>
            </a>
            </div>
            <div class="shop-list-book-wrap">
            <a
              href="${buy_links[1].url}"
              target="blank"
              ><img
              alt="${book.title}"
              class="marketplace-img-modal shop-list-item-link shop-list-book"
              srcset="
              ${book.img}, ${book.img2x} 2x
              "/>
            </a>
            </div>
          </div>
        </li>`
    )
    .join('');
}

getInformationBtId();

function updateUI() {
  if (products.length === 0) {
    emptyElement.style.display = 'flex';
    shopList.style.display = 'none';
    shopList.innerHTML = '';
  } else {
    emptyElement.style.display = 'none';
    shopList.style.display = 'block';

    const markup = createMarkup(products);
    shopList.innerHTML = markup;
    attachRemoveHandlers();
  }
}

function attachRemoveHandlers() {
  removeButtons = document.querySelectorAll('.js-remove');
  removeButtons.forEach(function (button) {
    button.addEventListener('click', removeProduct);
  });
}

updateUI();

function removeProduct(event) {
  let liElement = event.target.closest('.js-product');
  let bookId = liElement.getAttribute('.data-id');

  if (liElement) {
    liElement.remove();
    const indexBookToDelete = products.findIndex(obj => obj.title === bookId);
    products.splice(indexBookToDelete, 1);
    updateLocalStorage();
    updateUI();
  }
}

function updateLocalStorage() {
  let productIds = products.map(product => product.title);
  localStorage.setItem(storageKey, JSON.stringify(products));

  if (productIds.length === 0) {
    emptyElement.style.display = 'flex';
    shopList.style.display = 'none';
  }
}

window.addEventListener('beforeunload', function () {
  localStorage.setItem(storageKey);
});

removeButtons.forEach(function (button) {
  button.addEventListener('click', removeProduct);
});
