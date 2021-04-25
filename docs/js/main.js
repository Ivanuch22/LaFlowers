let menu = document.querySelector('.menu');
let headerButton = document.querySelector('.header__button');
headerButton.addEventListener('click', () => {
   menu.classList.toggle('menu--active');
});
const swiper = new Swiper('.swiper-container', {
   navigation: {
      nextEl: '.swiper-next-arrow',
      prevEl: '.swiper-prev-arrow',
   },
   loop: true,
   spaceBetween: 17,
   slidesPerView: 4,
});