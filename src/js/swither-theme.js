const slider = document.querySelector('#toggle-slider');
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
        } else {
            document.querySelector('html').classList.remove('theme-dark');
        }
    } catch (err) { }
}
addThemeDarkClass();