"use strict";
const boxes = document.querySelectorAll(".box");
const restartBtn = document.querySelector(".restartBtn");
const playText = document.querySelector(".playText");
const spaces = [null, null, null, null, null, null, null, null, null];
const X_Text = "X";
const O_Text = "0";
let currentPlayer = X_Text;

const playBoard = () => {
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += `border-bottom: 3px solid black;`;
    }
    if (index % 3 === 0) {
      styleString += `border-right: 3px solid black;`;
    }
    if (index % 3 === 2) {
      styleString += `border-left: 3px solid black;`;
    }
    if (index > 5) {
      styleString += `border-top: 3px solid black;`;
    }
    box.style = styleString;
    box.addEventListener("click", clickedBox);
  });
};
const clickedBox = (e) => {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
    if (playerHasWon()) {
      playText.textContent = `${currentPlayer} has won`;
    }
    currentPlayer = currentPlayer === X_Text ? O_Text : X_Text;
  }
};
const playerHasWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins up top`);
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins on the left`);
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      console.log(`${currentPlayer} wins diagonally`);
      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins on the right`);
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins on the bottom`);
      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins horizontaly 
        on the middle`);
      return true;
    }
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins on the middle`);
      return true;
    }
    if (spaces[6] === currentPlayer && spaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins diagonally`);
      return true;
    }
  }
};

const restart = () => {
  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.innerText = "";
  });
  playText.innerText = `Let's Play`;
};

restartBtn.addEventListener("click", restart);
restart();
playBoard();
