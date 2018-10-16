//Jhenya Ezhova/ Jonathan Erquinigo
let readline = require('readline');
let rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});
function conditionif(answer,option){
 if(answer === "Rock" && option === "Paper"){
   console.log("Sorry, you lost");
 }else if(answer === "Rock" && option === "Scissors"){
   console.log("Congrats! You won!");
 }else if(answer === "Rock" && option === "Rock"){
   console.log("It\'s a tie, let\'s play again");
 }else if(answer === "Paper" && option === "Scissors"){
   console.log("Sorry, you lost");
 }else if(answer === "Paper" && option === "Rock"){
   console.log("Congrats! You won!");
 }else if(answer === "Paper" && option === "Paper"){
   console.log("It\'s a tie, let\'s play again");
 }else if(answer === "Scissors" && option === "Rock"){
   console.log("Sorry, you lost");
 }else if(answer === "Scissors" && option === "Paper"){
   console.log("Congrats! You won!");
 }else if(answer === "Scissors" && option === "Scissors"){
   console.log("It\'s a tie, let\'s play again")
 }
};
rl.question('Rock, Paper or Scissors?', function(answer) {
 //console.log('you selected: ' + answer);
let options = ['Rock', 'Paper', 'Scissors'];
 if(answer === "Rock"||answer === "Paper" || answer === "Scissors"){
   console.log("Great! You chose:", answer + ". Give me a second...");
   let option = options[Math.floor(Math.random()*options.length)];
setTimeout(() => {
console.log('The computer chose:' + option);
conditionif(answer, option)
},5000)
} else {
 console.log("Please, type a valid answer")
};
 rl.close();
});
