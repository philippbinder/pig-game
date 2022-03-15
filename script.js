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

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

// starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
