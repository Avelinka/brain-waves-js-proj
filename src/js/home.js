//ВСІ НАЛШТУВАННЯ, ЩО МАЮТЬ БУТИ ПРИ ЗАВАНТАЖЕННІ СТОРІНКИ HOME
import { createCategoryMarkap } from "./all-categories-books-field"
import { getTopBooks } from "./fetch-requests"

export const booksField = document.querySelector('.js-books-field-wrapper')
const categoryField = document.querySelector('#field-categories')

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
        console.log(error)
    }
}


export function getAllBooksByCategory(evt) {
    console.log('test. Далі має зʼявитись div Павла')
    booksField.hidden = false
    categoryField.hidden = true
}