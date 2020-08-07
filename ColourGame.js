
const squares = [...document.getElementsByClassName("square")];
const h1 = document.getElementsByTagName("h1")[0]
const container = document.getElementById("container");
const tryAgainLoss = document.getElementById("loss")
tryAgainLoss.addEventListener("click", resetGameLoss)
const tryAgainWin = document.getElementById("win")
tryAgainWin.addEventListener("click", resetGameWin)
const lossCount = document.getElementById("lossCount")
const winCount = document.getElementById("winCount")
let losses = 0
let wins = 0
lossCount.innerText = "LOSSES: " + losses
winCount.innerText = "WINS: " + wins
const easyMode = document.querySelector(".easy");
const hardMode = document.querySelector(".hard");
const reset = document.querySelector(".reset");
easyMode.addEventListener("click", setEasyMode)
hardMode.addEventListener("click", setHardMode)
reset.addEventListener("click", ()=> location.reload())
const ezModeMessage = document.getElementById("ezModeMessage")
const hardModeMessage = document.getElementById("hardModeMessage")

for (let i=0;i<squares.length;i++){
  squares[i].style.backgroundColor = generateColor()
  squares[i].addEventListener("click", evaluate)
}


h1.innerText = squares[Math.floor(Math.random()*Math.floor(6))].style.backgroundColor
let currentColor = h1.innerText.toLowerCase();

function generateColor(){
return "RGB(" + Math.floor(Math.random() * Math.floor(255)) + ", " + (Math.floor(Math.random() * Math.floor(255))) + ", " + (Math.floor(Math.random() * Math.floor(255))) + ")"
}

function resetGameLoss(e){
  tryAgainLoss.classList.add("hidden")
  for (let i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = generateColor()
  }
  h1.innerText = squares[Math.floor(Math.random()*Math.floor(6))].style.backgroundColor
  currentColor = h1.innerText.toLowerCase();
  container.style.backgroundColor = "black";
  lossStreak = 0;
  losses++
  lossCount.innerText = "LOSSES: " + losses
}

function resetGameWin(e){
  e.target.classList.add("hidden")
  for (let i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = generateColor()
    squares[i].style.visibility = "visible";
    squares[i].classList.remove("fade-in-green");
  }
  h1.innerText = squares[Math.floor(Math.random()*Math.floor(6))].style.backgroundColor
  currentColor = h1.innerText.toLowerCase();
  container.style.backgroundColor = "black";
  lossStreak = 0;
  wins++
  winCount.innerText = "WINS: " + wins
}

function setEasyMode() {
  easyMode.classList.add("selected")
  hardMode.classList.remove("selected")
  ezModeMessage.textContent = "You have 3 attempts!"
  ezModeMessage.classList.remove("hidden")
  ezModeMessage.classList.add("easyModeGone")
  ezModeMessage.classList.add("msgDissapear")

  // you have 3 attempts
  lossCap = 2;
  for (let i=0;i<3;i++){
    squares[i].classList.add("hidden");
}}


function setHardMode() {
  easyMode.classList.remove("selected")
  hardMode.classList.add("selected")
  ezModeMessage.textContent = "You have 2 attempts!"
  ezModeMessage.classList.remove("hidden")
  ezModeMessage.classList.add("easyModeGone")
  ezModeMessage.classList.add("msgDissapear")
  lossCap = 1;
  for (let i=0;i<squares.length;i++){
    squares[i].classList.remove("hidden");
}
}
/* need resetGame() that will reset the game after attempts
if win() is triggered, it will ++ the WIN counter and do GenerateColors()
else loss() loss++ GenerateColos()
*/
let lossStreak = 0;
let lossCap = 1; 
// if lossStreak != lossCap gameOver = false.

/* EVALUATE ---- will compare value of the clicked with the value of the picked,
if it's equal it will change body color and all squares to green  
*/
function houdini() {
  ezModeMessage.classList.add("hidden")
}
function houdini2() {
  hardModeMessage.classList.add("hidden")
}

function evaluate(e){
let val
val = e.target.style.backgroundColor
console.log(val)
  if(currentColor === val){
  e.target.style.visibility = "hidden"
  container.style.backgroundColor = currentColor
  squares.forEach(el => {el.classList.add("fade-in-green")
  el.style.backgroundColor = "rgb(153, 251, 36)"
})
  tryAgainWin.classList.remove("hidden");
    } else if (container.className === "fade-out" && lossStreak === lossCap) {
    container.classList.remove("fade-out")
    container.classList.add("fade-out2")
    tryAgainLoss.classList.remove("hidden");
    lossStreak++
    container.style.backgroundColor = currentColor
    resetGameLoss
    }
    else if (container.className === "fade-out2" && lossStreak === lossCap) {
      container.classList.remove("fade-out2")
      container.classList.add("fade-out")
      lossStreak++
      tryAgainLoss.classList.remove("hidden");
      container.style.backgroundColor = currentColor
      resetGameLoss
    }
    else if (container.className === "fade-out") {
      container.classList.remove("fade-out")
      container.classList.add("fade-out2")
      lossStreak++
      }
    else if (container.className === "fade-out2") {
      container.classList.remove("fade-out2")
      container.classList.add("fade-out")
      lossStreak++
      }
      else if (lossStreak === lossCap) {
        tryAgainLoss.classList.remove("hidden");
        lossStreak++
        container.style.backgroundColor = currentColor
        resetGameLoss
        }
  else {
    container.classList.add("fade-out")
    lossStreak++
  }
}

/*
++++++   buttons easy/hard
        easy -- 6 squares
        3 errors before fail
        hard - 9 divs
        1 error before fail.

++++  Loss/Win/Reset counter below
      Reset Button

+++ When you fail it has to fade out, show try again button show you 
    correct square and loss++

++ Try again button, function that will initiate random squares assignment
   And will manipulate the loss/win counter and reset

+  Add smooth css animation and color change functionality

+++ Add developed by Andrei Ornovetchii and email

*/