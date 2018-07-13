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

// Create cards inside UL with append child
for (let i = 0; i < icons.length; i++) {
  // Create the li for each card
  const card = document.createElement('li');
  // Add the class to the card with the icons
  card.classList.add('card_stack__card');
  // Append the class to the li
  card.innerHTML = `<i class="${icons[i]}"</i>`;
  // Append the li to the ul
  cardContainer.appendChild(card);
}
// Put cards into an array
const cards = [...cardInStack];

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
    cards.forEach.call(shuffleCard, function(card) {
      cardContainer.appendChild(card);
    });
  }
}

startGame();

// // Put cards into an array so that we can loop over them, (HTML collection vs Array)
// let cards = [...card];
// // Loop over and add eventListener to each card
// for (let i = 0; i < cards.length; i++) {
//   cards[i].addEventListener('click', displayCard);
// }
// // When clicked add classes to card
// function displayCard() {
//   //this.classList.toggle('card_stack__card_open');
//   //this.classList.toggle('show');
//   //this.classList.toggle('card_stack__card_disabled');
// }
