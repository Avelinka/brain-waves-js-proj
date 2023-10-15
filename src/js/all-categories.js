import Notiflix from 'notiflix';
import { createCategoryMarkap } from './all-categories-books-field';
import { createBookMarkup } from './all-categories-books-field';
import { getBooksByCategory } from './fetch-requests';
import { home } from './home';
import { getAllBooksByCategory } from './home';

const allList = document.querySelector('.all-category__list');
const fieldBooks = document.querySelector('.field-books');
const sortFieldTitle = document.querySelector('.field-title');
const booksList = document.querySelector('.books-list');
const allBooksTitle = document.querySelector('.all-books-title');

allList.addEventListener('click', sortForCategory);

async function sortForCategory(event) {
  if (event.target.nodeName !== 'BUTTON') return;
  const categoryName = event.target.name;

  try {
    
    if (categoryName === 'All categories') {
      allBooksTitle.style.display = 'block';
      sortFieldTitle.style.display = 'none';
      resetDedicatedCategory();
      event.target.classList.add('dedicated-category');
    } else {
      allBooksTitle.style.display = 'none';
      sortFieldTitle.style.display = 'block';
      const getCategoryName = await getBooksByCategory(categoryName);

      const listMarkup = await createMarkup(getCategoryName, categoryName);

      fieldBooks.innerHTML = listMarkup;

      resetDedicatedCategory();
      event.target.classList.add('dedicated-category');
    }
  } catch (error) {
    console.error(error.message);
  }
}

function resetDedicatedCategory() {
  let dedicatedCategory = allList.querySelectorAll('.dedicated-category');
  dedicatedCategory.forEach(el => el.classList.remove('dedicated-category'));
}

async function createMarkup(array, categoryName) {
  sortFieldTitle.innerHTML = `<h2 class="field-title">${categoryName}</h2>`;

  let markUp = array
    .map(({ author, title, book_image, _id }) => {
      return;
      `<li id="${_id}" class="books">
            <img loading="lazy" src="${book_image}" alt="${title}" />
            <h3>${title}</h3>
            <p>${author}</p>
           
        </li>`;
    })
    .join('');
  return markUp;
}
