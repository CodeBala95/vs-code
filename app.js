let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random()*100);
console.log(randomNumber);
function checkGuess() {
 let userValue=parseInt(userInput.value);
 
 if (userValue > randomNumber){
    gameResult.textContent="Too High! Try Again";
    gameResult.style.backgroundColor="blue";
 }
 else if (userValue < randomNumber){
    gameResult.textContent="Too Lose! Try Again";
    gameResult.style.backgroundColor="blue";
 }
 else if (userValue === randomNumber){
    gameResult.textContent="Congratulations! You got it right.";
    gameResult.style.backgroundColor="green";
 }
 else {
    gameResult.textContent="Provide a valid user input.";
    gameResult.style.backgroundColor="#1e217c";
 }
}