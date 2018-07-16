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

// Toggle classes on press
function displayCard() {
  if (openCards.length === 1) {
    this.classList.add('card_stack__card_open');
    openCards.push(this);
    // Compare the two cards
    compareCards(this, openCards[0]);
  } else {
    this.classList.add('card_stack__card_open');
    openCards.push(this);
  }
}

// Function for comparing the two cards
function compareCards(firstPick, secondPick) {
  if (firstPick.innerHTML === secondPick.innerHTML) {
    // If cards are matched add this class to them
    firstPick.classList.add('card_stack__card_matched');
    secondPick.classList.add('card_stack__card_matched');
    // Push matched cards to matched cards array
    matchedCards.push(firstPick, secondPick);
    openCards = [];
  } else {
    firstPick.classList.remove('card_stack__card_open');
    secondPick.classList.remove('card_stack__card_open');
    openCards = [];
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
