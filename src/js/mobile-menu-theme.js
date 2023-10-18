const currentPageURL = window.location.href;
const page1Home = document.getElementById('style-home');
const page1HomeLink = document.querySelector('.mobile-home');
const page2Shopping = document.getElementById('style-shopping');
const page2ShoppingLink = document.querySelector('.mobile-shoplist');

if (currentPageURL.includes('index.html')) {
  page1Home.classList.add('mobile-current-page-back');
  page2Shopping.classList.remove('mobile-current-page-back');
  page1HomeLink.classList.add('mobile-current-page-link');
  page2ShoppingLink.classList.remove('mobile-current-page-link');
} else if (currentPageURL.includes('shopping-list.html')) {
  page2Shopping.classList.add('mobile-current-page-back');
  page1Home.classList.remove('mobile-current-page-back');
  page2ShoppingLink.classList.add('mobile-current-page-link');
  page1HomeLink.classList.remove('mobile-current-page-link');
}
