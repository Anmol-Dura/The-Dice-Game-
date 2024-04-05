console.log("connected");

let dice1 = "./dice1.png";
let dice2 = "./dice2.png";
let dice3 = "./dice3.png";
let dice4 = "./dice4.png";
let dice5 = "./dice5.png";
let dice6 = "./dice6.png";

let button = document.querySelector(".btn");
let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");

let image1Counter = 0;
let image2Counter = 0;
let image1Random;
let image2Random;

let diceOutcome = function (imageRandom) {
  switch (imageRandom) {
    case 1:
      return dice1;
    case 2:
      return dice2;
    case 3:
      return dice3;
    case 4:
      return dice4;
    case 5:
      return dice5;
    case 6:
      return dice6;
  }
};

let changeDice = function () {
  image1Random = rollDice();
  image2Random = rollDice();
  document
    .querySelector(".img1")
    .setAttribute("src", diceOutcome(image1Random));
  document
    .querySelector(".img2")
    .setAttribute("src", diceOutcome(image2Random));
  winner(image1Random, image2Random); // Pass image1Random and image2Random to the winner function
};

let rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

button.addEventListener("click", changeDice);

let winner = function (image1Random, image2Random) {
  if (image1Random > image2Random) {
    image1Counter++;
  } else if (image1Random < image2Random) {
    image2Counter++;
  } else {
    image1Counter++;
    image2Counter++;
  }
  score1.textContent = image1Counter;
  score2.textContent = image2Counter;
};
