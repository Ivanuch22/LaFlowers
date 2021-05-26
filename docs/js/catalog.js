const colorsButton = document.querySelectorAll('.aside__color-radio');
const cards = document.querySelectorAll('.block__item');

colorsButton.forEach((button) => {
   button.addEventListener('click', (e) => {
      if (e.target.classList.contains('pink')) {
         cards.forEach((card) => {
            card.classList.remove('show')
         })
         cards.forEach((card) => {
            if (card.dataset.color !== 'pink') {
               card.classList.add('show')
            };
         });
      }
      else if (e.target.classList.contains('red')) {
         cards.forEach((card) => {
            card.classList.remove('show')
         })
         cards.forEach((card) => {
            if (card.dataset.color !== 'red') {
               card.classList.add('show')
            };
         });
      }
      else if (e.target.classList.contains('yellow')) {
         cards.forEach((card) => {
            card.classList.remove('show')
         })
         cards.forEach((card) => {
            if (card.dataset.color !== 'yellow') {
               card.classList.add('show')
            };
         });
      }
      else if (e.target.classList.contains('green')) {
         cards.forEach((card) => {
            card.classList.remove('show')
         })
         cards.forEach((card) => {
            if (card.dataset.color !== 'green') {
               card.classList.add('show')
            };
         });
      }
      else if (e.target.classList.contains('blue')) {
         cards.forEach((card) => {
            card.classList.remove('show')
         })
         cards.forEach((card) => {
            if (card.dataset.color !== 'blue') {
               card.classList.add('show')
            };
         });
      }
      else if (e.target.classList.contains('white')) {
         cards.forEach((card) => {
            card.classList.remove('show')
         })
         cards.forEach((card) => {
            if (card.dataset.color !== 'white') {
               card.classList.add('show')
            };
         });
      }
      else if (e.target.classList.contains('purple')) {
         cards.forEach((card) => {
            card.classList.remove('show')
         })
         cards.forEach((card) => {
            if (card.dataset.color !== 'purple') {
               card.classList.add('show')
            };
         });
      };
   });
});