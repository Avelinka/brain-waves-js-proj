import Notiflix from 'notiflix';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { createCategoryMarkap } from './all-categories-books-field';
import { createBookMarkup } from './all-categories-books-field';
import { getBooksByCategory, getBookCategories } from './fetch-requests';
import { home } from './home';
import { getAllBooksByCategory } from './home';

const allList = document.querySelector('.all-category-list'); //список для категорій
const categoryField = document.querySelector('.field-categories'); // лів Павла
const booksField = document.querySelector('.books-field-wrapper'); // мій дів
buildCategoryMeny();
async function buildCategoryMeny() {
  const namesArr = await getBookCategories();
  const markup = menuMarkup(namesArr);
  allList.insertAdjacentHTML('beforeend', markup);
}

//розмітка меню категорій
function menuMarkup(arr) {
  const markup = arr
    .map(name => {
      return ` <li>
      <button
        class="all-category-button"
        type="button"
        name="${name.list_name}">
        ${name.list_name}
      </button>
    </li>`;
    })
    .join('');
  return markup;
}

allList.addEventListener('click', sortForCategory);

async function sortForCategory(event) {
  if (event.target.nodeName !== 'BUTTON') return;

  const categoryName = event.target.name;

  //console.log(categoryName);

  try {
    Loading.arrows();
    if (categoryName === 'All categories') {
      resetDedicatedCategory();
      event.target.classList.add('dedicated-category');
      booksField.hidden = false;
      categoryField.hidden = true;
      Loading.remove(500);
      return;
    } else {
      Loading.arrows();
      showAllBooksByCategory(categoryName);
      resetDedicatedCategory();
      event.target.classList.add('dedicated-category');
      Loading.remove(500);
    }
  } catch (error) {
    Notiflix.Notify.failure(
      'Sorry, there are no books matching your search query. Please try again.'
    );
    return;
  }
}

export async function showAllBooksByCategory(name) {
  booksField.hidden = true;
  categoryField.hidden = false;

  const getCategoryName = await getBooksByCategory(name);

  const listMarkup = await createMarkup(getCategoryName, name);
  //console.log(listMarkup);
  categoryField.innerHTML = listMarkup;
}

function resetDedicatedCategory() {
  let dedicatedCategory = allList.querySelectorAll('.dedicated-category');
  dedicatedCategory.forEach(el => el.classList.remove('dedicated-category'));
}

export async function createMarkup(array, categoryName) {
  const oneBook = markup(array);

  return `<h2 class="book-field-name">
  <span class="first-word">${categoryName
    .split(' ')
    .slice(0, -1)
    .join(' ')}</span>
  <span class="last-word">${categoryName.split(' ').pop()}</span>
</h2><ul class="field-books book-list"> ${oneBook}  </ul>`;
}

export function markup(array) {
  let markUp = array
    .map(({ author, title, book_image, _id }) => {
      return `<li id="${_id}" class="books book-card">
            <div class="img-thumb">
            <img loading="lazy" class="book-img" src="${book_image}" alt="${title}" />
            <div class="quick-view" data-id-book="${_id}"><p>quick view</p></div>
            </div>
            <h3 class="book-name">${title}</h3>
            <p class="author">${author}</p>
           
        </li>`;
    })
    .join('');
  //console.log(markUp);
  return markUp;
}
