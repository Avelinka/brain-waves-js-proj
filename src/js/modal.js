import { getInformationBtId } from './fetch-requests';

const modal = document.querySelector('[data-modal-windows]');
const closeModalButton = document.querySelector('[data-modal-close]');
const modalStyle = document.querySelector('.modal');
const shoppingButtonModal = document.querySelector('.shopping-button-modal');
const addBook = document.querySelector('.add-book-modal');
const removeBook = document.querySelector('.remove-book-modal');
const textAfterShop = document.querySelector('.text-after-buy');
const bookListLisener = document.querySelector('body');
const modalWrapper = document.querySelector('.modal-markup');

closeModalButton.addEventListener('click', closeModal);
shoppingButtonModal.addEventListener('click', shoppingButton);
bookListLisener.addEventListener('click', GetId);

let bookID = '';
const KEY_NAME = 'shoping-list';
let shopingListArr = [];
let openBookObj = {};

// Секція відкриття і закриття модалки

function openModal() {
  // Встановлення дефолтних налаштувань для модального вікна

  modal.style.display = 'block';
  document.body.classList.add('modal-open');
  addBook.removeAttribute('hidden');

  window.addEventListener('click', outsideClick);
  document.addEventListener('keydown', onKeydown);

  // Функція прослуховування клавіатури

  function onKeydown(event) {
    if (event.code === 'Escape') {
      closeModal();
      document.removeEventListener('keydown', onKeydown);
    }
  }

  // Функція прослуховування кліків повз модальне вікно

  function outsideClick(event) {
    if (event.target == modal) {
      closeModal();
    }
  }

  // Анімація появлення модального вікна

  setTimeout(() => {
    modalStyle.style.opacity = 1;
    modalStyle.style.transform = 'translate(-50%, -50%)';
  }, 50);

  // Додавання і видалення обєктів в сховище
  // Поки працює не вірно, ще доробляю
  const shopingListArr = JSON.parse(localStorage.getItem(KEY_NAME));

  if (!shopingListArr || shopingListArr.length === 0) {
    addBook.removeAttribute('hidden');
    removeBook.setAttribute('hidden', true);
    textAfterShop.setAttribute('hidden', true);
    return;
  } else {
    const objToFind = shopingListArr.find(obj => {
      return obj._id === bookID;
    });
    if (!objToFind) {
      addBook.removeAttribute('hidden');
      removeBook.setAttribute('hidden', true);
      textAfterShop.setAttribute('hidden', true);
    } else {
      addBook.setAttribute('hidden', true);
      removeBook.removeAttribute('hidden');
      textAfterShop.removeAttribute('hidden');
    }
  }
}

// Функція закриття модального вікна

function closeModal() {
  // Анімація закриття модального вікна

  modalStyle.style.opacity = 0;
  modalStyle.style.transform = 'translate(-50%, -40%)';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 200);
  document.body.classList.remove('modal-open');

  // Втановлення кнопки додавання в кошик на стандартні налаштування
  // Таймаут встановлений, щоб кнопка залишалася незмінною до закриття модального вікна

  setTimeout(() => {
    removeBook.setAttribute('hidden', true);
    textAfterShop.setAttribute('hidden', true);
  }, 250);
}

// Функція роботи з кнопкою додавання і видалення товарів з шопінг листа

function shoppingButton() {
  if (removeBook.hasAttribute('hidden')) {
    // Обробка візуальної складової
    addBook.setAttribute('hidden', true);
    removeBook.removeAttribute('hidden');
    textAfterShop.removeAttribute('hidden');

    // Додавання книжки до локального сховища
    onStorageAdd();
  } else {
    // Обробка візуальної складової
    addBook.removeAttribute('hidden');
    removeBook.setAttribute('hidden', true);
    textAfterShop.setAttribute('hidden', true);

    // Видалення книжки з локального сховища
    onStorageDelete();
  }
}

// ****************************************
function onStorageAdd() {
  const availableStorageArr = JSON.parse(localStorage.getItem(KEY_NAME));

  if (!availableStorageArr || availableStorageArr.length === 0) {
    shopingListArr.push(openBookObj);
    localStorage.setItem(KEY_NAME, JSON.stringify(shopingListArr));
  } else {
    availableStorageArr.push(openBookObj);
    localStorage.setItem(KEY_NAME, JSON.stringify(availableStorageArr));
  }
}

function onStorageDelete() {
  const idBookToDelete = openBookObj._id;
  // console.log(idBookToDelete);

  const shopingListArr = JSON.parse(localStorage.getItem(KEY_NAME));
  const indexBookToDelete = shopingListArr.findIndex(
    obj => obj._id === idBookToDelete
  );
  shopingListArr.splice(indexBookToDelete, 1);
  localStorage.setItem(KEY_NAME, JSON.stringify(shopingListArr));
}
// *****************************************

// Отримання ID книжки

function GetId(event) {
  const clickedElement = event.target;
  const quickViewEl = clickedElement.closest('.quick-view');

  if (quickViewEl) {
    bookID = quickViewEl.getAttribute('data-id-book');
  } else {
    return;
  }

  openModal();
  createModalMarkup(bookID);
  getDataBook(bookID);
}

// Отримання даних про обєкт з книжкою

async function getDataBook(id) {
  try {
    openBookObj = await getInformationBtId(id);
  } catch (error) {
    throw new Error(error);
  }
}

// Створення розмітки для модального вікна

function creatMarkupModal({
  book_image,
  title,
  author,
  description,
  amazon_product_url,
  buy_links,
}) {
  const amazomImg = {
    title: 'AmazonMarketplace',
    img: new URL('../images/mask_group_corrected.png', import.meta.url).href,
    img2x: new URL('../images/mask_group_corrected@2x.png', import.meta.url)
      .href,
  };

  const bookInfoImg = {
    title: 'Book',
    img: new URL('../images/image_1.png', import.meta.url).href,
    img2x: new URL('../images/image_1@2x.png', import.meta.url).href,
  };

  return `<div class="book-inform-modal-wraper">
             <div class="modal-img-wrapper">
                 <img class="modal-img" src="${book_image}" alt="book-image" />
             </div>

                <div class="text-infor-wrapper">
                     <p class="book-header-modal">${title}</p>
                     <p class="book-author-modal">${author}</p>
                     <p class="book-description-modal">${description} 
                    </p>

                    <ul class="marketplace-img-modal-wrapper">
                    <li>
                     <a href="${amazon_product_url}" target="_blank" rel="noopener noreferrer"
                     ><img
                     alt="${amazomImg.title}"
                     class="marketplace-img-modal"
                     srcset="${amazomImg.img}, ${amazomImg.img2x} 2x"
                      />
                     </a>
                     </li>
                     <li>
                      <a href="${buy_links[1].url}" target="_blank" rel="noopener noreferrer">
                     <img
                      ${bookInfoImg.title}
                     class="book-img-modal"
                     srcset="${bookInfoImg.img}, ${bookInfoImg.img2x} 2x"
                      />
                     </a>
                   </li>
                  </ul>

             <div class="marketplace-img-modal-wrapper"></div>
            </div>
         </div>`;
}

// Нанесення розмітки на модальне вікно

async function createModalMarkup(id) {
  modalWrapper.innerHTML = '';
  try {
    const value = await getInformationBtId(id);
    modalWrapper.insertAdjacentHTML('beforeend', creatMarkupModal(value));
  } catch (error) {
    throw new Error(error);
  }
}
