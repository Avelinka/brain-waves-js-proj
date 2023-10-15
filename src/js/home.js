//ВСІ НАЛШТУВАННЯ, ЩО МАЮТЬ БУТИ ПРИ ЗАВАНТАЖЕННІ СТОРІНКИ HOME
import { createCategoryMarkap } from "./all-categories-books-field"
import { getTopBooks } from "./fetch-requests"
import {showAllBooksByCategory} from './all-categories'

const booksField = document.querySelector('.js-books-field-wrapper')
const categoryField = document.querySelector('.field-categories')

home()
export async function home() {
    try {
        const topArr = await getTopBooks()
        const markup = await createCategoryMarkap(topArr)
        booksField.insertAdjacentHTML('beforeend', markup)
        //забрали кнопку see more повісили слухач
        const moreBtn = document.querySelectorAll('.js-more-btn')
        moreBtn.forEach(btn => btn.addEventListener('click', getAllBooksByCategory))  
      
    } catch (error) {
        Notiflix.Notify.failure('Sorry, there are no books matching your search query. Please try again.')
        return
    }
}


export async function getAllBooksByCategory(evt) {
    const getCategoryName = evt.currentTarget.dataset.category
    showAllBooksByCategory(getCategoryName)
    const selectedCategory = document.querySelector(`button[name="${getCategoryName}"]`)
    selectedCategory.classList.add('dedicated-category')
    const allCategortBtn = document.querySelector('button[name="All categories"]')
    allCategortBtn.classList.remove('dedicated-category')
}