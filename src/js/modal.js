import { getInformationBtId } from './fetch-requests';

const modal = document.querySelector('[data-modal]');
const closeModalButton = document.querySelector('[data-modal-close]');
const modalStyle = document.querySelector('.modal');
const shoppingButtonModal = document.querySelector('.shopping-button-modal');
const addBook = document.querySelector('.add-book-modal');
const removeBook = document.querySelector('.remove-book-modal');
const textAfterShop = document.querySelector('.text-after-buy');
const bookListLisener = document.querySelector('.js-books-field-wrapper');
const modalWrapper = document.querySelector('.modal-markup');

closeModalButton.addEventListener('click', closeModal);
shoppingButtonModal.addEventListener('click', shoppingButton);
bookListLisener.addEventListener('click', GetId);

let bookID = '';
const KEY_NAME = "shoping-list";
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

  console.log(bookID);


  // Додавання і видалення обєктів в сховище
  // Поки працює не вірно, ще доробляю
  const shopingListArr = JSON.parse(localStorage.getItem(KEY_NAME))


  if (!shopingListArr || shopingListArr.length === 0) {
    addBook.removeAttribute('hidden');
    removeBook.setAttribute('hidden', true);
    textAfterShop.setAttribute('hidden', true);
    return;
  } else {
    const objToFind = shopingListArr.find(obj => {
      console.log(shopingListArr);
      console.log('id яке шукає', obj._id);
      console.log('id яке книжки',bookID);
      return obj._id === bookID});
      console.log('знайдений id', objToFind);
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
  console.log(shopingListArr);
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
    onStorageAdd()
  } else {
    // Обробка візуальної складової
    addBook.removeAttribute('hidden');
    removeBook.setAttribute('hidden', true);
    textAfterShop.setAttribute('hidden', true);

    // Видалення книжки з локального сховища
    onStorageDelete()
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

  const idBookToDelete = openBookObj.id;
  const shopingListArr = JSON.parse(localStorage.getItem(KEY_NAME));
  const indexBookToDelete = shopingListArr.findIndex(obj => obj.id === idBookToDelete);
  shopingListArr.splice(indexBookToDelete, 1);
  localStorage.setItem(KEY_NAME, JSON.stringify(shopingListArr));
}
// *****************************************


// Отримання ID книжки

function GetId(event) {
  const clickedElement = event.target;
  const closestLi = clickedElement.closest('li');
  
  if (closestLi) {
    bookID = closestLi.getAttribute('data-id');
  } else {
    return;
  }

  openModal();
  createModalMarkup(bookID);
  getDataBook(bookID)
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

function creatMarkupModal({ book_image, title, author, amazon_product_url }) {
  return `<div class="book-inform-modal-wraper">
             <div class="modal-img-wrapper">
                 <img class="modal-img" src="${book_image}" alt="book-image" />
             </div>

                <div class="text-infor-wrapper">
                     <p class="book-header-modal">${title}</p>
                     <p class="book-author-modal">${author}</p>
                     <p class="book-description-modal">
      This book provides the reader with deep insights into the lives and
      experiences of its characters, revealing the complexities of human nature and creating a captivating narrative that leaves a lasting impression on the hearts of readers.
                    </p>

                    <div class="marketplace-img-modal-wrapper">
                    <a
                      href="${amazon_product_url}"
                      target="blank"
                      ><img
                        alt="marketplace"
                        class="marketplace-img-modal"
                        srcset="
                      ./images/mask_group_corrected.png,
                      ./images/mask_group_corrected@2x.png 2x
                      "/>
                      </a>
                    
                    <img  alt="book" class="book-img-modal" 
                    srcset="
                    ./images/image_1.png,
                    ./images/image_1@2x.png 2x
                    "/>
                  
                  </div>

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
