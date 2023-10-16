// import Pagination from 'tui-pagination';

import './swither-theme';
import './mobile-menu';
import './fonds-ukraine';
// import './button';
import { getInformationBtId } from './fetch-requests';

// const goToCartButton = document.querySelector('.js-go-to-cart');
const emptyElement = document.querySelector('.cart');
const shopList = document.querySelector('.js-list');
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
  console.log(products);
  if (products.length === 0) {
    emptyElement.style.display = 'flex';
    shopList.style.display = 'none';
    shopList.innerHTML = '';
  } else {
    emptyElement.style.display = 'none';
    shopList.style.display = 'block';

    const markup = createMarkup(products);
    shopList.innerHTML = markup;
    // shopList.insertAdjacentHTML('beforeend', markup);
  }
}
updateUI();

// console.log(createMarkup(products));
// if (localStorage.getItem('shoping-list') === null) {
//   // const hidden = document.querySelector('.cart');
//   emptyElement.style.display = 'block';
//   shopList.style.display = 'none';

//   // hidden.classList.add('cart');
// } else {
//   // hiddenElement.classList.add('is-hidden');
//   emptyElement.style.display = 'none';
//   shopList.style.display = 'block';

//   const markup = createMarkup(products);
//   shopList.insertAdjacentHTML('beforeend', markup);
// }

let removeButtons = document.querySelectorAll('.js-remove');

// function removeProduct(event) {
//   let liElement = event.target.closest('.js-product');
//   if (liElement) {
//     liElement.remove();
//     localStorage.removeItem('shoping-list');
//     console.log('Дані видалені із локального сховища.');
//     updateLocalStorage();

//     if (!document.querySelector('.shopping-list-item')) {
//       const hiddenElement = document.querySelector('.hidden-shop-list');
//       const hidden = document.querySelector('.cart');
//       hiddenElement.classList.remove('is-hidden');
//       hidden.classList.add('cart');
//     }
//   }
// }

function removeProduct(event) {
  let liElement = event.target.closest('.js-product');
  let bookId = liElement.getAttribute('.data-id');

  // if (liElement) {
  //   liElement.remove();
  //   const shopingListArr = JSON.parse(localStorage.getItem(storageKey));
  //   const indexBookToDelete = shopingListArr.findIndex(
  //     obj => obj._id === bookId
  //   );
  //   shopingListArr.splice(indexBookToDelete, 1);
  //   localStorage.setItem(storageKey, JSON.stringify(shopingListArr));
  if (liElement) {
    liElement.remove();
    const indexBookToDelete = products.findIndex(obj => obj.title === bookId);
    products.splice(indexBookToDelete, 1);
    updateLocalStorage(); // Оновлюємо localStorage при видаленні товару
    updateUI(); // Оновлюємо відображення корзини
  }
  // if (!document.querySelector('.shopping-list-item')) {
  //   const hiddenElement = document.querySelector('.hidden-shop-list');
  //   const hidden = document.querySelector('.cart');
  //   hiddenElement.classList.remove('is-hidden');
  //   hidden.classList.add('cart');
  // }

  // }
}

function updateLocalStorage() {
  // let productIds = [];
  // removeButtons.forEach(function (button) {
  //   let id = button.getAttribute('data-id');
  //   productIds.push(id);
  // });
  // localStorage.setItem('selectedProducts', JSON.stringify(productIds));
  // console.log(localStorage);
  let productIds = products.map(product => product.title);
  localStorage.setItem(storageKey, JSON.stringify(products));

  if (productIds.length === 0) {
    emptyElement.style.display = 'flex';
    shopList.style.display = 'none';
  }
  // if (productIds.length === 0) {
  //   const messageElement = document.querySelector('.message');
  //   messageElement.classList.remove('is-hidden');
  // }
}

window.addEventListener('beforeunload', function () {
  localStorage.setItem(storageKey);
});

removeButtons.forEach(function (button) {
  button.addEventListener('click', removeProduct);
});

// function limitWords(text, limit) {
//   const words = text.split(' ');
//   if (words.length <= limit) {
//     return text;
//   } else {
//     return words.slice(0, limit).join(' ') + ' ...';
//   }
// }
