import { getInformationBtId } from './fetch-requests';

const modalWrapper = document.querySelector('.modal-markup');

// Отримання даних по книжці за ID

getInformationBtId('643282b1e85766588626a0ba')
  .then(value => {
    modalWrapper.insertAdjacentHTML('beforeend', creatMarkupModal(value));
  })
  .catch(error => {
    console.log(error);
  });

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
      experiences of its characters, revealing the complexities of human nature
      and creating a captivating narrative that leaves a lasting impression on
      the hearts of readers.
                    </p>

                    <div class="marketplace-img-modal-wrapper">
                    <a
                      href="https://www.amazon.com/dp/1984826395?tag=NYTBSREV-20"
                      target="blank"
                      ><img
                        alt="marketplace"
                        class="marketplace-img-modal"
                        srcset="
                      ./images/mask_group.png,
                      ./images/mask_group@2x.png 2x
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
