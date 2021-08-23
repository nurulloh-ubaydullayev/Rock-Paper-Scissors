const userName = prompt("Iltimos ismingizni kiriting: ", "user");

let userScore = 0;
let computerScore = 0;
const elUserLabel = document.querySelector("#user-label");
const elUserScore_span = document.querySelector("#user-score");
const elComputerScore_span = document.querySelector("#computer-score");
const elScoreBoard = document.querySelector(".score-board");
const elResult = document.querySelector(".result > p");
const elRock = document.querySelector("#r");
const elPaper = document.querySelector("#p");
const elScissors = document.querySelector("#s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Tosh";
  if (letter === "p") return "Qog'oz";
  return "Qaychi";
}

function win(userChoice, computerChoice) {
  const smallUserWord = userName.fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const elUserChoice = document.getElementById(userChoice);
  userScore++;
  elUserScore_span.innerHTML = userScore;
  elComputerScore_span.innerHTML = computerScore;
  elResult.innerHTML =
    convertToWord(userChoice) +
    smallUserWord +
    " " +
    convertToWord(computerChoice) +
    smallComputerWord +
    " ni mag'lub etdi . Siz yutdingiz!";
  elUserChoice.classList.add("blue-grow");
  setTimeout(() => elUserChoice.classList.remove("blue-grow"), 500);
}

function lose(userChoice, computerChoice) {
  computerScore++;
  const smallUserWord = userName.fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const elUserChoice = document.getElementById(userChoice);

  elUserScore_span.innerHTML = userScore;
  elComputerScore_span.innerHTML = computerScore;
  elResult.innerHTML =
    convertToWord(userChoice) +
    smallUserWord +
    " " +
    convertToWord(computerChoice) +
    smallComputerWord +
    " ga yutqazdi . Siz yutqazdingiz...";
  elUserChoice.classList.add("red-grow");
  setTimeout(() => elUserChoice.classList.remove("red-grow"), 500);
}

function draw(userChoice, computerChoice) {
  const smallUserWord = userName.fontsize(3).sub();
  const smallComputerWord = "computer".fontsize(3).sub();
  const elUserChoice = document.getElementById(userChoice);

  elResult.innerHTML =
    convertToWord(userChoice) +
    smallUserWord +
    " " +
    convertToWord(computerChoice) +
    smallComputerWord +
    " ga teng. Durrang!";
  elUserChoice.classList.add("gray-grow");
  setTimeout(() => elUserChoice.classList.remove("gray-grow"), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  elRock.addEventListener("click", (evt) => {
    game("r");
  });

  elPaper.addEventListener("click", (evt) => {
    game("p");
  });

  elScissors.addEventListener("click", (evt) => {
    game("s");
  });
}
elUserLabel.innerHTML = userName;

main();
