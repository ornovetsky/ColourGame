
const squares = [...document.getElementsByClassName("square")];
const kvadratiki = document.querySelectorAll(".square")
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
let lossStreak = 0;
let lossCap = 1; 
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
const sqrs = document.getElementsByClassName("sqrs")[0]
let currentColor
let mode = "hard"
generateNineSquares()

function generateSixSquares(){
let i = 0;
while(sqrs.childNodes.length != 0)
{sqrs.childNodes[0].remove()}
  for (let j=0;j<6;j++){
    const square = document.createElement("div")
    square.className = "square"
    square.style.backgroundColor = generateColor()
    square.addEventListener("click", evaluate)
    document.getElementsByClassName("sqrs")[0].appendChild(square)
  }
  h1.innerText = sqrs.childNodes[Math.floor(Math.random()*Math.floor(6))].style.backgroundColor
  currentColor = h1.innerText.toLowerCase();
}

function generateNineSquares(){
let i = 0;
while(sqrs.childNodes.length != 0)
{sqrs.childNodes[0].remove()}
  for (let j=0;j<9;j++){
    const square = document.createElement("div")
    square.className = "square"
    square.style.backgroundColor = generateColor()
    square.addEventListener("click", evaluate)
    document.getElementsByClassName("sqrs")[0].appendChild(square)
  }
  h1.innerText = sqrs.childNodes[Math.floor(Math.random()*Math.floor(6))].style.backgroundColor
  currentColor = h1.innerText.toLowerCase();
}



function generateColor(){
return "RGB(" + Math.floor(Math.random() * Math.floor(255)) + ", " + (Math.floor(Math.random() * Math.floor(255))) + ", " + (Math.floor(Math.random() * Math.floor(255))) + ")"
}

function resetGameLoss(e){
  tryAgainLoss.classList.add("hidden")
  container.style.backgroundColor = "black";
  lossStreak = 0;
  losses++
  lossCount.innerText = "LOSSES: " + losses
  if(mode === "easy"){
    generateSixSquares()
  }
  if(mode === "hard"){
    generateNineSquares()
  }
}

function resetGameWin(e){
  e.target.classList.add("hidden")
  for (let i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = generateColor()
    squares[i].style.visibility = "visible";
    squares[i].classList.remove("fade-in-green");
  }
  container.style.backgroundColor = "black";
  lossStreak = 0;
  wins++
  winCount.innerText = "WINS: " + wins
  if(mode === "easy"){
    generateSixSquares()
  }
  if(mode === "hard"){
    generateNineSquares()
  }
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
  mode = "easy"
  generateSixSquares()
}



function setHardMode() {
  easyMode.classList.remove("selected")
  hardMode.classList.add("selected")
  ezModeMessage.textContent = "You have 2 attempts!"
  ezModeMessage.classList.remove("hidden")
  ezModeMessage.classList.add("easyModeGone")
  ezModeMessage.classList.add("msgDissapear")
  lossCap = 1;
  mode = "hard"
  generateNineSquares()
}


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
