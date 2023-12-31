import axios from 'axios';
import Notiflix from 'notiflix';

const URL = 'https://books-backend.p.goit.global/books/';

//getBookCategories()
//запит за категоріями книг
export async function getBookCategories() {
  try {
    const response = await axios.get(`${URL}category-list`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const categoriesList = response.data;
    return categoriesList;
  } catch (error) {
    Notiflix.Notify.failure(
      'Error fetching category-list. Please try again later'
    );
    // console.log(error.message);
    return;
  }
}

//getBooksByCategory('Paperback Nonfiction')
//запит за списком книг з обраної категорії
export async function getBooksByCategory(selectedCategory) {
  try {
    const response = await axios.get(
      `${URL}category?category=${selectedCategory}`
    );
    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const booksByCategory = response.data;
    return booksByCategory; // масив обʼєктів
  } catch (error) {
    Notiflix.Notify.failure(
      'Error fetching category-list. Please try again later'
    );
    // console.log(error.message);
    return;
  }
}

//getInformationBtId('643282b1e85766588626a0dc')
//запит за повною інформацією про книгу по id
export async function getInformationBtId(id) {
  try {
    const response = await axios.get(`${URL}${id}`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const bookInformation = response.data;
    return bookInformation;
  } catch (error) {
    Notiflix.Notify.failure(
      'Error fetching category-list. Please try again later'
    );
    // console.log(error.message);
    return;
  }
}

//getTopBooks()
//запит за топ5 по кожній категорії
export async function getTopBooks() {
  try {
    const response = await axios.get(`${URL}top-books`);
    if (response.status !== 200) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const topBooksList = response.data;
    return topBooksList;
  } catch (error) {
    Notiflix.Notify.failure(
      'Error fetching category-list. Please try again later'
    );
    // console.log(error.message);
    return;
  }
}
