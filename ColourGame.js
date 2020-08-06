
const squares = [...document.getElementsByClassName("square")];
const h1 = document.getElementsByTagName("h1")[0]
const container = document.getElementById("container");


for (let i=0;i<squares.length;i++){
  squares[i].style.backgroundColor = generateColor()
  squares[i].addEventListener("click", evaluate)
}


h1.innerText = squares[Math.floor(Math.random()*Math.floor(6))].style.backgroundColor
let currentColor = h1.innerText.toLowerCase();

function generateColor(){
return "RGB(" + Math.floor(Math.random() * Math.floor(255)) + ", " + (Math.floor(Math.random() * Math.floor(255))) + ", " + (Math.floor(Math.random() * Math.floor(255))) + ")"
}

function resetGame(){
  for (let i=0;i<squares.length;i++){
    squares[i].style.backgroundColor = generateColor()
  }
  container.style.backgroundColor = "black";
}


/* need GenerateColors() that will reset the game after attempts
if win() is triggered, it will ++ the WIN counter and do GenerateColors()
else loss() loss++ GenerateColos()
*/
let gameOver = false;
let lossStreak = 0;
let winRate = 0;

/* EVALUATE ---- will compare value of the clicked with the value of the picked,
if it's equal it will change body color and all squares to green  
*/


function evaluate(e){
let val
val = e.target.style.backgroundColor
console.log(val)
  if(currentColor === val){
  e.target.style.visibility = "hidden"
  container.style.backgroundColor = currentColor
  squares.forEach(el => {el.classList.add("fade-in-green")
  el.style.backgroundColor = "rgb(153, 251, 36)"})
// trigger classListAdd + Try Again message. clicking tryAgain will trigger resetGame()
    } else if (container.className === "fade-out") {
    container.classList.remove("fade-out")
    container.classList.add("fade-out2")
    }
    else if (container.className === "fade-out2") {
      container.classList.remove("fade-out2")
      container.classList.add("fade-out")
    }
  else {
    container.classList.add("fade-out")
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