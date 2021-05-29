let menu = document.querySelector('.menu');
let headerButton = document.querySelector('.header__button');
headerButton.addEventListener('click', () => {
   menu.classList.toggle('menu--active');
});

const anchors = document.querySelectorAll('a[href^="#"]');

for (let value of anchors) {
   value.addEventListener('click', (e) => {
      e.preventDefault();
      const anchorId = value.getAttribute('href');

      document.querySelector(' ' + anchorId).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
}
