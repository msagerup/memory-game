require('../styles/index.scss');

let card = document.getElementsByClassName('card_stack__card');
// Put cards into an array so that we can loop over them, (HTML collection vs Array)
let cards = [...card];
// Loop over and add eventListener to each card
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', displayCard);
}
// When clicked add classes to card
function displayCard() {
  this.classList.toggle('card_stack__card_open');
  this.classList.toggle('show');
  this.classList.toggle('card_stack__card_disabled');
}

// Shuffle cards, Fisher-Yates
function shuffleCards(array) {
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

console.log(card);
console.log(cards);
console.log(displayCard());
