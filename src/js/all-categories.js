import Notiflix from 'notiflix';
import { createCategoryMarkap } from './all-categories-books-field';
import { createBookMarkup } from './all-categories-books-field';

const allList = document.querySelector('.all-category__list');
const fieldBooks = document.querySelector('.field-books');
const sortFieldTitle = document.querySelector('.field-title');
const booksList = document.querySelector('.books-list');
const allBooksTitle = document.querySelector('.all-books-title');

const baseUrl = 'https://books-backend.p.goit.global/books/category';
allList.addEventListener('click', sortForCategory);

async function sortForCategory(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const categoryName = e.target.name;

  try {
    booksList.innerHTML = '';
    if (categoryName === 'All categories') {
      allBooksTitle.style.display = 'block';
      sortFieldTitle.style.display = 'none';
      resetDedicatedCategory();
      e.target.classList.add('dedicated-category');
    } else {
      allBooksTitle.style.display = 'none';
      sortFieldTitle.style.display = 'block';
      const getCategoryName = await fetchByCategory(categoryName);

      const listMarkup = await createMarkup(getCategoryName, categoryName);
      fieldBooks.innerHTML = listMarkup;
      resetDedicatedCategory();
      e.target.classList.add('dedicated-category');
    }
  } catch (error) {
    console.error(error.message);
  }
}

function resetDedicatedCategory() {
  let dedicatedCategory = allList.querySelectorAll('.dedicated-category');
  dedicatedCategory.forEach(el => el.classList.remove('dedicated-category'));
}

async function fetchByCategory(categoryName) {
  try {
    const url = `${baseUrl}?category=${categoryName}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const bookCategory = await response.json();
    return bookCategory;
  } catch (error) {
    console.log(error.message);
    return [];
  }
}

async function createMarkup(array, categoryName) {
  let names = categoryName.split(' ');
  names[names.length - 1] = `<span class='highlighted-word'>${
    names[names.length - 1]
  }</span>`;

  categoryName = words.join(' ');

  sortFieldTitle.innerHTML = `<h2 class="field-title">${categoryName}</h2>`;

  const markUp = array
    .map(
      ({ author, title, book_image, _id }) =>
        `<li id="${_id}" class="books">
            <img loading="lazy" src="${book_image}" alt="${title}" />
            <h3>${title}</h3>
            <p>${author}</p>
           
        </li>`
    )
    .join('');
  return markup;
}
