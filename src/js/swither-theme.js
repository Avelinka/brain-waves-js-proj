const slider = document.querySelector('#toggle-slider');
const svgBackColor = document.querySelector('.gamburger-icon');

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
            svgBackColor.classList.backgroundColor = 'black';
            svgBackColor.classList.add("stroke", 'white')
        } else {
            document.querySelector('html').classList.remove('theme-dark');
        }
    } catch (err) { }
}
addThemeDarkClass();