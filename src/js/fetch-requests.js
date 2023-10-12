import axios from "axios";

const URL = 'https://books-backend.p.goit.global/books/'

//getBookCategories()
//запит за категоріями книг
export async function getBookCategories() {
    try {
        const response = await axios.get(`${URL}category-list`)
        const categoriesList = await response.data
        if (response.status !== 200) {
        throw new Error(response)
        }
        console.log(categoriesList)
        return categoriesList
    }
    catch (error) {
        //ДОДАТИ ЗАГЛУШКУ ДЛЯ ПОМИЛКИ
        console.log (error)
    }
};

//getBooksByCategory('Paperback Nonfiction')
//запит за списком книг з обраної категорії
export async function getBooksByCategory(selectedCategory) {
    try {
        const response = await axios.get(`${URL}category?category=${selectedCategory}`)
        const booksByCategory = await response.data
        if (response.status !== 200) {
            throw new Error(response)
        }
        return booksByCategory // масив обʼєктів
    } catch (error) {
        //ДОДАТИ ЗАГЛУШКУ ДЛЯ ПОМИЛКИ
        console.log(error)
    }
}

//getInformationBtId('643282b1e85766588626a0dc')
//запит за повною інформацією про книгу по id
export async function getInformationBtId(id) {
    try {
        const response = await axios.get(`${URL}${id}`)
        const bookInformation = await response.data
        if (response.status !== 200) {
            throw new Error(response)
        }
        return bookInformation
    } catch (error){
        //ДОДАТИ ЗАГЛУШКУ ДЛЯ ПОМИЛКИ
        console.log(error)
    }
}

//getTopBooks()
//запит за топ5 по кожній категорії
export async function getTopBooks() {
    try {
        const response = await axios.get(`${URL}top-books`)
        const topBooksList = await response.data
        if (response.status !== 200) {
            throw new Error(response)
        }
        return topBooksList
    } catch (error){
        //ДОДАТИ ЗАГЛУШКУ ДЛЯ ПОМИЛКИ
        console.log(error)
    }
}