"use strict";
/*
document.querySelector(".message").textContent = "Correct number";
//document.querySelector(".number").textContent = 12;
console.log((document.querySelector(".guess").value = 12));
*/

let score = 20;
//let Highscore = 0;
let highscore = 0;

let snumber = Math.trunc(Math.random() * 20) + 1;

// work the check button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when no input
  if (!guess) {
    document.querySelector(".message").textContent = "😂 No input !";
  }
  // when match input
  else if (guess === snumber) {
    //document.querySelector(".number").textContent = snumber;

    document.querySelector(".message").textContent =
      "😁 Thats a correct Number !";
    document.querySelector(".number").textContent = snumber;
    // if win the game then change the colour of background
    document.querySelector("body").style.backgroundColor = "#FF0000";
    // increase the size of a .number
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
   // when guess number and snumber nit be equal then refectoring the code
  else if (guess != snumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > snumber ? "😉 Thats is Too High !" : "😏 Thats is Too Low !";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "😥 You lost the game !";
      document.querySelector(".score").textContent = 0;
    }
  }
  // when high input
  /*else if (guess != snumber) {
    if (guess > snumber) {
      if (score > 1) {
        document.querySelector(".message").textContent =
          "😉 Thats is Too High !";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "😥 You lost the game !";
        document.querySelector(".score").textContent = 0;
      }
    } else {
      if (score > 1) {
        document.querySelector(".message").textContent =
          "😏 Thats is Too Low !";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent =
          "😥 You lost the game !";
        document.querySelector(".score").textContent = 0;
      }
    }
  }
  */
  // when low input
});

//work for the .again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  snumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  // increase the size of a .number
  document.querySelector(".number").style.width = "15rem";
});
