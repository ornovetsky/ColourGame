
const squares = [...document.getElementsByClassName("square")];
const h1 = document.getElementsByTagName("h1")[0]


for (let i=0;i<squares.length;i++){
  squares[i].style.backgroundColor = generateColor()
  squares[i].addEventListener("click", evaluate)
}


h1.innerText = squares[Math.floor(Math.random()*Math.floor(6))].style.backgroundColor
let currentColor = h1.innerText.toLowerCase();

function generateColor(){
return "RGB(" + Math.floor(Math.random() * Math.floor(255)) + ", " + (Math.floor(Math.random() * Math.floor(255))) + ", " + (Math.floor(Math.random() * Math.floor(255))) + ")"
}

/* EVALUATE ---- will compare value of the clicked with the value of the picked,
if it's equal it will change body color and all squares to guessed value  
*/

function evaluate(e){
let val
val = e.target.style.backgroundColor
console.log(val)
if(currentColor === val){
e.target.style.visibility = "hidden"
}

}

/*
++++++   buttons easy/hard
        easy -- 6 squares
        3 errors before fail
        hard - 9 divs
        1 error before fail.

++++  Loss/Win counter below
      Reset Button

+++ When you fail it has to fade out, show try again button show you 
    correct square and loss++

++ Try again button, function that will initiate random squares assignment
   And will manipulate the loss/win counter and reset

+  Add smooth css animation and color change functionality

+++ Add developed by Andrei Ornovetchii and email

*/