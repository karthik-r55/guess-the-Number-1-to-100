let randomnumber=Math.ceil(Math.random()*100);
console.log(randomnumber);
let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");








function checkGuess(){
 let guessNumber = parseInt(userInput.value);
 if( guessNumber > randomnumber){
       gameResult.textContent ="Too High Try Again";
       gameResult.style.backgroundColor="red";
 }
 else if( guessNumber < randomnumber){
       gameResult.textContent ="it low Try Again";
       gameResult.style.backgroundColor="blue";
 }
 else if(  guessNumber == randomnumber){
       gameResult.textContent = "Congratulations You Got it Genius"
       gameResult.style.backgroundColor="green";
 }
 else{
       gameResult.textContent ="Provide a valid input.";
       gameResult.style.backgroundColor="black";
 }
}