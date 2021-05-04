let menu = document.querySelector('.menu');
let headerButton = document.querySelector('.header__button');
headerButton.addEventListener('click', () => {
   menu.classList.toggle('menu--active');
});

