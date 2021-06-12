const newSiwper = new Swiper('.swiper-container', {
   navigation: {
      nextEl: '.swiper-next-arrow',
      prevEl: '.swiper-prev-arrow',
   },
   loop: true,
   breakpoints: {
      320: {
         slidesPerView: 2,
         spaceBetween: 10,
      },
      600: {
         slidesPerView: 3,
         spaceBetween: 10,
      },
      786: {
         slidesPerView: 3,

         spaceBetween: 45,
      },
      1025: {
         spaceBetween: 15,
         slidesPerView: 3,
      }
   }
});




const moreInfoButton = document.querySelector('.card__row-button');
const moreInfoText = document.querySelector('.card__row-button-text');

moreInfoButton.addEventListener('click', () => {
   moreInfoText.classList.toggle('card__row-button-text--active');
})


const amount = document.querySelector('.card__amount');
const buttonPlus = document.querySelector('.card__price-button--plus');
const buttonMinus = document.querySelector('.card__price-button--minus');
const delivery = document.querySelector('.delivery');
const totalCoast = document.querySelector('.totalCoast');
const discount = document.querySelector('.discount');
const coast = document.querySelector('.coast');


buttonPlus.addEventListener('click', (a) => {
   amount.innerHTML = ++amount.innerHTML;
   totalCoast.innerHTML = ((Number(coast.innerHTML) * Number(amount.innerHTML)) + Number(delivery.innerHTML) - Number(discount.innerHTML))
});
buttonMinus.addEventListener('click', (a) => {
   if (amount.innerHTML > 1) {
      amount.innerHTML = --amount.innerHTML;
   }
   totalCoast.innerHTML = ((Number(coast.innerHTML) * Number(amount.innerHTML)) + Number(delivery.innerHTML) - Number(discount.innerHTML))
});


