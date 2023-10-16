const currentPageURL = window.location.href;
const page1Home = document.getElementById('style-home');
const page2Shopping = document.getElementById('style-shopping');
const page2ShoppingVar = document.getElementById('style-shopping-var')

if (currentPageURL.includes('index.html')) {
    page1Home.style.backgroundColor = 'var(--yellow)';
    page1Home.style.fontWeight = '700';
    page1Home.style.color = 'var(--black)'
    page2Shopping.style.color = 'var(--white)';
} else if (currentPageURL.includes('shopping-list.html')) {
    page2Shopping.style.backgroundColor = 'var(--yellow)';
    page2Shopping.style.fontWeight = '700';
    page2Shopping.style.color = 'var(--black)'
    page1Home.style.color = 'var(--white)';
}

if (currentPageURL.includes('index.html')) {
    page2ShoppingVar.style.fill = 'var(--white)';
} else if (currentPageURL.includes('shopping-list.html')) {
    page2ShoppingVar.style.fill = 'var(--black)';
}