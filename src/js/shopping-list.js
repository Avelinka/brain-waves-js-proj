// import { getInformationById } from './fetch-requests';

const goToCartButton = document.querySelector('.js-go-to-cart');
const refJsLIst = document.querySelector('.js-list');
const container = document.querySelector('.js-list');
const storageKey = 'shoppingList';
const products = JSON.parse(localStorage.getItem(storageKey)) || [];

function createMarkup(arr) {
  return arr
    .map(
      ({ author, book_image, buy_links, description, title }) => `
    <li data-id="${title}" class="js-product shopping-list-item">
        <img src="${book_image}" alt="${title}" width="116" height="165" class="shop-img"/> 
        <div class="shop-item-div">
            <div class="top-item-div">
                <h2 class="shopping-list-title">${title}</h2>
                <button class="js-remove" data-id="${title}">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4M6.66667 7V10.3333M9.33333 7V10.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </button>
            </div>
            <p class="shopping-list-text">${limitWords(description, 18)}</p>
            <div class="author-icons">
                <p class="shopping-list-author">${author}</p>
                <div class="book-links">
                    ${createBookLinks(buy_links)}
                </div>
            </div>
        </div>
    </li>
`
    )
    .join('');
}

getInformationById();

function createBookLinks(buy_links) {
  return `<a href="${buy_links[0].url}" target="_blank"> <img src="/src/images/mask_group_corrected.png" alt="Link Icon" class="link-icon amazon" width="32" height="11"></a>
    <a href="${buy_links[1].url}" target="_blank"> <img src="/src/images/image_1.png" alt="Link Icon" class="link-icon apple-book" width="16" height="16"></a>
    <a href="${buy_links[2].url}" target="_blank"> <img src="/src/images/Icon1.png" alt="Link Icon" class="link-icon book-shop" width="16" height="16"></a>`;
}
console.log(createMarkup(products));
if (localStorage.getItem('shoppingList') === null) {
  const hiddenElement = document.querySelector('.hidden-shop-list');
  const hidden = document.querySelector('.cart');
  hiddenElement.classList.remove('is-hidden');
  hidden.classList.add('cart');
} else {
  const markup = createMarkup(products);
  container.insertAdjacentHTML('beforeend', markup);
}

let removeButtons = document.querySelectorAll('.js-remove');

function removeProduct(event) {
  let liElement = event.target.closest('.js-product');
  if (liElement) {
    liElement.remove();
    localStorage.removeItem('shoppingList');
    console.log('Дані видалені із локального сховища.');
    updateLocalStorage();

    if (!document.querySelector('.shopping-list-item')) {
      const hiddenElement = document.querySelector('.hidden-shop-list');
      const hidden = document.querySelector('.cart');
      hiddenElement.classList.remove('is-hidden');
      hidden.classList.add('cart');
    }
  }
}

function updateLocalStorage() {
  let productIds = [];

  removeButtons.forEach(function (button) {
    let id = button.getAttribute('data-id');
    productIds.push(id);
  });

  localStorage.setItem('selectedProducts', JSON.stringify(productIds));
  console.log(localStorage);
  if (productIds.length === 0) {
    const messageElement = document.querySelector('.message');
    messageElement.classList.remove('is-hidden');
  }
}

window.addEventListener('beforeunload', function () {
  localStorage.setItem(storageKey);
});

removeButtons.forEach(function (button) {
  button.addEventListener('click', removeProduct);
});

function limitWords(text, limit) {
  const words = text.split(' ');
  if (words.length <= limit) {
    return text;
  } else {
    return words.slice(0, limit).join(' ') + ' ...';
  }
}
