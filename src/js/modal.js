const openModalButton = document.querySelector("[data-modal-open]");
const modal = document.querySelector("[data-modal]");
const closeModalButton = document.querySelector("[data-modal-close]");
const modalStyle = document.querySelector('.modal');

//Закриття і відкриття модального вікна

openModalButton.addEventListener("click", openModal);
closeModalButton.addEventListener("click", closeModal);


function openModal() {
  document.addEventListener("keydown", onKeydown);
  window.addEventListener('click', outsideClick);

  modal.style.display = 'block';
  document.body.classList.add("modal-open");

  setTimeout(() => {
    modalStyle.style.opacity = 1;
    modalStyle.style.transform = "translate(-50%, -50%)";
  }, 50);

  function onKeydown(event) {
    if (event.code === "Escape") {
      closeModal();
      document.removeEventListener("keydown", onKeydown);
    }
  }

  function outsideClick(event) {
    if (event.target == modal) {
      closeModal();
    }
  }
}

function closeModal() {
    modalStyle.style.opacity = 0;
    modalStyle.style.transform = "translate(-50%, -40%)";
    setTimeout(() => {
      modal.style.display = "none";
    }, 200);
    document.body.classList.remove("modal-open");
}

// Опрацювання кнопки для додавання і видалення товару

const shoppingButtonModal = document.querySelector(".shopping-button-modal");
const addBook = document.querySelector(".add-book-modal");
const removeBook = document.querySelector(".remove-book-modal");
const textAfterShop = document.querySelector(".text-after-buy");

shoppingButtonModal.addEventListener("click", shoppingButton);

function shoppingButton() {
    if (removeBook.hasAttribute("hidden")) {
        addBook.setAttribute("hidden", true);
        removeBook.removeAttribute("hidden");
        textAfterShop.removeAttribute("hidden");
        addBookShopingList();
      } else {
        addBook.removeAttribute("hidden");
        removeBook.setAttribute("hidden", true);
        textAfterShop.setAttribute("hidden", true);
        removeBookShopingList();
      }
}


// Додавання і видалення товарів з шопінг листа
// Ще не дороблене

const KEY_NAME = "shoping-list";
let formData = {};

function addBookShopingList() {
  formData = { book: "Test" };
  localStorage.setItem(KEY_NAME, JSON.stringify(formData));
}

function removeBookShopingList() {
  localStorage.removeItem("shoping-list");
}


// Отримання ID з обєкта


