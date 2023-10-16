const slider = document.querySelector('#toggle-slider');
const svgBackColor = document.querySelector('.gamburger-icon');

localStorage.removeItem('theme');
slider.addEventListener('change', (evt) => {
    evt.preventDefault();
    if (localStorage.getItem('theme') === 'theme-dark') {
        localStorage.removeItem('theme');
    } else {
        localStorage.setItem('theme', 'theme-dark')
    }
    addThemeDarkClass()
});

function addThemeDarkClass() {
    try {
        if (localStorage.getItem('theme') === 'theme-dark') {
            document.querySelector('html').classList.add('theme-dark');
            svgBackColor.classList.add("gamburger-icon-dark")
        } else {
            svgBackColor.classList.remove("gamburger-icon-dark");
            document.querySelector('html').classList.remove('theme-dark');
        }
    } catch (err) { }
}
addThemeDarkClass();