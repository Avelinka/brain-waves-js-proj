import Notiflix from 'notiflix';



export async function createCategoryMarkap(arr) {  
    const markup = arr.map((categoryObj) => {
        if (categoryObj.books.length === 0) {
            Notiflix.Notify.failure('Sorry, there are no books matching your search query. Please try again.')
        return
        }
        const oneCategory = createBookMarkup(categoryObj)
        return `<div class="category-box">
        <h2 class = "category-titel">${categoryObj.list_name}</h2>
        <ul class="books-list">
            ${oneCategory}
        </ul>
             <button class="more-btn js-more-btn" type="button" data-category="${categoryObj.list_name}">see more</button>
         </div>`
    }).join('')
        return markup
    }
     
 export function createBookMarkup(obj) {
    const markup = obj.books.map(({ _id, author, book_image, title }) => {
        return ` <li class="book-card js-book-card" data-id="${_id}">
                <div class="img-thumb">
                <img class = "book-img" src="${book_image}" alt="${title}">
                <div class="quick-view" data-id-book="${_id}"><p>quick view</p></div>
                </div>
                <h3 class="book-name">${title}</h3>
                <p class="author">${author}</p>
            </li>`
    }).join('');
    return markup
    }


