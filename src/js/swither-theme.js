const slider = document.querySelector('#toggle-slider');
const svgBackColor = document.querySelector('.gamburger-icon');

slider.addEventListener('change', (evt) => {
    evt.preventDefault();
    if (localStorage.getItem('theme') === 'theme-dark') {
        localStorage.removeItem('theme');
          localStorage.setItem('sliderPosition', 'left');
    } else {
        localStorage.setItem('theme', 'theme-dark');
         localStorage.setItem('sliderPosition', 'right');
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

function restoreSliderPosition() {
  const sliderPosition = localStorage.getItem('sliderPosition');
  if (sliderPosition === 'right') {
    slider.checked = true;
  } else {
    slider.checked = false;
  }
}

restoreSliderPosition();
addThemeDarkClass();