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
}
// Put cards into an array
const cards = [...cardInStack];

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', displayCard);
}

// On Card Click
function displayCard() {
  console.log('theses are matched: ' + matchedCards);
  if (openCards.length === 1) {
    this.classList.add('card_stack__card_open', 'card_stack__card_show');
    // Push clicked cards to array
    openCards.push(this);

    // If there is 2 cards in the array compare the cards
    if (this.innerHTML === openCards[0].innerHTML) {
      // Add matched class to cards if they are the same
      this.classList.add('card_stack__card_matched');
      openCards[0].classList.add('card_stack__card_matched');
      openCards = [];
      // Add matched cards to matched cards array
    } else {
      setTimeout(function() {
        this.classList.remove('card_stack__card_open', 'card_stack__card_show');
        openCards[0].classList.remove(
          'card_stack__card_open',
          'card_stack__card_show'
        );

        openCards = [];
      });
    }
  } else {
    this.classList.add('card_stack__card_open', 'card_stack__card_show');
    // Push clicked cards to array
    openCards.push(this);
    console.log(openCards);
  }
}

// Shuffle cards function, Fisher-Yates
function shuffle(array) {
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
}
// Shuffle the cards

function startGame() {
  const shuffleCard = shuffle(cards);
  for (let i = 0; i < shuffleCard.length; i++) {
    cards.forEach.call(shuffleCard, function(item) {
      cardContainer.appendChild(item);
    });
  }
}

startGame();
