const btnsContainer = document.querySelector(".player-choices");
const restartBtn = document.querySelector(".btn-restart");
const game = document.querySelector(".game");
const final = document.querySelector(".final");
const finalDetails = document.querySelector(".details");
const gameStatus = document.querySelector(".game-status");
const scorePlayer = document.querySelector(".score-player");
const scoreComputer = document.querySelector(".score-computer");
const finalscrPlayer = document.querySelector(".score--player");
const finalscrComputer = document.querySelector(".score--computer");
const roundNo = document.querySelector(".round-no");
const arrChoice = ["Rock", "Paper", "Scissors"];
let scores = [0, 0];
let playerChoice;
let computerChoice;
let curRound = 0;
const totalRounds = 5;
const init = function () {
  scorePlayer.textContent = scores[0];
  scoreComputer.textContent = scores[1];
  roundNo.textContent = curRound;
  gameStatus.textContent = "Start the round!";
};
const gameOver = function () {
  if (scores[0] > scores[1]) {
    finalDetails.textContent = "You won the game!";
  } else if (scores[1] > scores < 0) {
    finalDetails.textContent = "Computer won the game!";
  } else {
    finalDetails.textContent = "You drew this game";
  }
  finalscrPlayer.textContent = scores[0];
  finalscrComputer.textContent = scores[1];
  game.classList.add("hidden");
  final.classList.remove("hidden");
};
init();
const restart = function () {
  scores = [0, 0];
  curRound = 0;
  init();
};
const getComputerChoice = function () {
  const randomNo = Math.trunc(Math.random() * 3);
  computerChoice = arrChoice[randomNo];
};

const playRound = function () {
  curRound++;
  if (curRound < totalRounds) {
    roundNo.textContent = curRound;
    getComputerChoice();

    if (playerChoice !== computerChoice) {
      if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
      ) {
        scores[0]++;
        scorePlayer.textContent = scores[0];
        gameStatus.textContent = `You : ${playerChoice} won  this round!!`;
      } else if (
        (computerChoice === "Rock" && playerChoice === "Scissors") ||
        (computerChoice === "Paper" && playerChoice === "Rock") ||
        (computerChoice === "Scissors" && playerChoice === "Paper")
      ) {
        scores[1]++;
        scoreComputer.textContent = scores[1];
        gameStatus.textContent = `Computer : ${computerChoice} won this round`;
      }
    } else {
      gameStatus.textContent = "You drew this round!";
    }
  } else {
    gameOver();
  }
};
//using event delegation to listen to click event on any button
btnsContainer.addEventListener("click", function (e) {
  playerChoice = e.target.closest(".btn")?.textContent;
  playRound();
});
restartBtn.addEventListener("click", function () {
  restart();
  game.classList.remove("hidden");
  final.classList.add("hidden");
});
