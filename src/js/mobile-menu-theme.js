const currentPageURL = window.location.href;
const page1Home = document.getElementById('style-home');
const page2Shopping = document.getElementById('style-shopping');
const page2ShoppingVar = document.getElementById('style-shopping-var')

if (currentPageURL.includes('index.html')) {
    page1Home.style.backgroundColor = 'var(--yellow)';
    page1Home.style.fontWeight = '700';
    page1Home.style.color = '#111'
    page2Shopping.style.color = '#fff';
    page2ShoppingVar.style.fill = '#fff'
} else if (currentPageURL.includes('shopping-list.html')) {
    page2Shopping.style.backgroundColor = 'var(--yellow)';
    page2Shopping.style.fontWeight = '700';
    page2Shopping.style.color = '#111'
    page1Home.style.color = '#fff';
    page2ShoppingVar.style.fill = '#111';
}





