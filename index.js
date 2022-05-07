function getRandomNumber() {
  // declaring a random number
  var randomNumber = Math.random();
  // bringing the random number in range 0 to 5
  randomNumber *= 6;
  // Adding 1 to change range to 1 to 6
  randomNumber = Math.floor(randomNumber) + 1;
  return randomNumber;
}

var player1 = getRandomNumber();
var player2 = getRandomNumber()

document.querySelector(".img1").setAttribute("src", "images/dice" + player1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + player2 + ".png");

if (player1 > player2) {
  document.querySelector("h1").innerHTML = "🎉Player 1 Wins!";
} else if (player1 < player2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!🎉";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
