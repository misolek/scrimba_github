let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeAddOne = document.getElementById("home-add-one");
let homeAddTwo = document.getElementById("home-add-two");
let homeAddThree = document.getElementById("home-add-three");

let guestAddOne = document.getElementById("guest-add-one");
let guestAddTwo = document.getElementById("guest-add-two");
let guestAddThree = document.getElementById("guest-add-three");

let newGameButton = document.getElementById("new-game-button");

homeAddOne.addEventListener("click", function () {
  homeScore.textContent = Number(homeScore.textContent) + 1;
});

homeAddTwo.addEventListener("click", function () {
  homeScore.textContent = Number(homeScore.textContent) + 2;
});

homeAddThree.addEventListener("click", function () {
  homeScore.textContent = Number(homeScore.textContent) + 3;
});

guestAddOne.addEventListener("click", function () {
  guestScore.textContent = Number(guestScore.textContent) + 1;
});

guestAddTwo.addEventListener("click", function () {
  guestScore.textContent = Number(guestScore.textContent) + 2;
});

guestAddThree.addEventListener("click", function () {
  guestScore.textContent = Number(guestScore.textContent) + 3;
});

newGameButton.addEventListener("click", function () {
  homeScore.textContent = 0;
  guestScore.textContent = 0;
});
