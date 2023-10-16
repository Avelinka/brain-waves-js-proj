const currentPath = window.location.pathname;
const menuLinks = document.querySelectorAll('.mobile-list-links a');

menuLinks.forEach(function(link) {
  link.parentElement.classList.remove('current-page');
});
menuLinks.forEach(function(link) {
  if (link.getAttribute('href') === currentPath) {
    link.parentElement.classList.add('current-page');
  }
});

