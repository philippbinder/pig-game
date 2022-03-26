'use strict';

// 1)
// let player1Score = document.getElementById('score--0').textContent;
// console.log(player1Score);
// player1Score = '0';
// Problem with the DOM: player1Score variable stores a value like "20". Then I reassign this value to 0. That's all I am doing, I never update the DOM at all
// 2)
// const score0El = document.getElementById('score--0');
// score0El.textContent = 0;
// Works score0El variable holds a reference to a DOM Element. Then I access .textContent property of this element and change it to 0, which means changing the DOM.

// selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentPlayer, currentScore, gameIsOngoing;

// starting conditions -> create initialization function
const init = function () {
  // scores array for both players to display their current scores
  scores = [0, 0];
  // switch between players, 0 = player1, 1 = player2
  currentPlayer = 0;

  currentScore = 0;

  // keep track of game state
  gameIsOngoing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore0El.textContent = 0;
  currentScore1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');
};
init();

function switchPlayer() {
  // switch player
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  // document
  //   .querySelector(`.player--${currentPlayer}`)
  //   .classList.remove('player--active');
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  // Add class if it's not there and remove it if it's there
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  // document
  //   .querySelector(`.player--${currentPlayer}`)
  //   .classList.add('player--active');
}

// dice  roll functionality
// select dice button and add eventhandler

// 1. random dice roll
btnRoll.addEventListener('click', function () {
  if (gameIsOngoing) {
    // generate a number from 1 to 6
    const diceRoll = Math.trunc(Math.random() * 6) + 1;

    // 2. display dice roll
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${diceRoll}.png`;
    // 3. check if it is not a 1
    if (diceRoll !== 1) {
      currentScore += diceRoll;
      // gets the current players text
      document.getElementById(`current--${currentPlayer}`).textContent =
        currentScore;
      // }
    } else {
      switchPlayer();
    }
    console.log('rolled dice:', diceRoll);
    console.log('scores array:', scores);
    console.log('diceEl :', diceEl);
  }
});

// save/hold score
btnHold.addEventListener('click', function () {
  if (gameIsOngoing) {
    // use score arraay
    scores[currentPlayer] += currentScore;
    // add this score to the HTML element
    document.getElementById(`score--${currentPlayer}`).textContent =
      scores[currentPlayer];
    // end game if score is at least 100
    if (scores[currentPlayer] >= 100) {
      gameIsOngoing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

// reset game
document.querySelector('.btn--new').addEventListener('click', init);
// not init(), because the function is allready declared above. It is JS that calls this function as soon as the user clicks on the init button and therefore no ()
