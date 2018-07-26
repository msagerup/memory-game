require('../styles/index.scss');

const cardContainer = document.getElementById('card_stack');
const cardInStack = document.getElementsByClassName('card_stack__card');
// Icons from Font Awsome
const icons = [
  'fas fa-anchor',
  'fas fa-anchor',
  'fas fa-bullhorn',
  'fas fa-bullhorn',
  'fas fa-fighter-jet',
  'fas fa-fighter-jet',
  'fas fa-bicycle',
  'fas fa-bicycle',
  'fas fa-headphones-alt',
  'fas fa-headphones-alt',
  'fas fa-keyboard',
  'fas fa-keyboard',
  'fas fa-key',
  'fas fa-key',
  'fas fa-helicopter',
  'fas fa-helicopter'
];

let openCards = [];
let matchedCards = [];

// Create cards inside UL with append child
for (let i = 0; i < icons.length; i++) {
  // Create the li for each card
  const card = document.createElement('li');
  // Add the class to the card with the icons
  card.classList.add('card_stack__card');
  card.classList.add('card_stack__icon');
  // Append the class to the li
  card.innerHTML = `<i class="${icons[i]}"</i>`;
  // Append the li to the ul
  cardContainer.appendChild(card);

  // Do this when cards are clicked
  card.addEventListener('click', function() {
    const currentCard = this;
    const previousCard = openCards[0];

    // If we have a opened card
    if (openCards.length === 1) {
      card.classList.add('card_stack__card_open', 'card_stack__card_show');
      // Push open cards to openCards
      openCards.push(currentCard);

      // Compare cards if there is more than 1
      if (currentCard.innerHTML === previousCard.innerHTML) {
        currentCard.classList.add('card_stack__card_matched');
        previousCard.classList.add('card_stack__card_matched');

        // Reset openCards so there is never more than 2 in the the array
        openCards = [];
      } else {
        // To see the other card before it closes we need to add a delay on it.
        setTimeout(() => {
          currentCard.classList.remove(
            'card_stack__card_open',
            'card_stack__card_show'
          );
          previousCard.classList.remove(
            'card_stack__card_open',
            'card_stack__card_show'
          );
        }, 500);

        // Reset openCards so there is never more than 2 in the the array
        openCards = [];
      }

      // If there is no opened cards
    } else {
      card.classList.add('card_stack__card_open', 'card_stack__card_show');
      // Push open cards to openCards
      openCards.push(currentCard);
    }
  });
}

// Shuffle cards function, Fisher-Yates
const shuffle = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};
// Shuffle the cards
// Put cards into an array
const cards = [...cardInStack];

const startGame = () => {
  const shuffleCard = shuffle(cards);
  for (let i = 0; i < shuffleCard.length; i++) {
    cards.forEach.call(shuffleCard, function(item) {
      cardContainer.appendChild(item);
    });
  }
};

startGame();
