const choices = ['rock', 'paper', 'scissors'];
const message = document.querySelector(".message");
const playerScore = document.querySelector(".playerScore");
const ComputerScore = document.querySelector(".computerScore");
const options = document.querySelectorAll(".choices")
const button = document.querySelector(".button")
let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}

options.forEach(
    (option) => {
    option.addEventListener("click", () =>{
    let playerChoice = event.target.id
    if(humanScore === 5 || computerScore === 5)
        return
    playGame(playerChoice)
}
)
    }
)

 const playRound = (humanSelection, computerSelection) =>{
     if(humanSelection == 'rock' && computerSelection == 'scissors'){
        message.textContent = "You win!! Rock beats scissors"
         humanScore ++}
     else if(humanSelection == 'scissors' && computerSelection == 'rock'){
        message.textContent = "You lose!! Rock beats scissors"
         computerScore ++}
     else if(humanSelection == 'paper' && computerSelection == 'rock'){
        message.textContent = "You win!! Paper beats rock"
         humanScore ++}       
     else if(humanSelection == 'rock' && computerSelection == 'paper'){
        message.textContent = "You lose!! Paper beats rock"
         computerScore ++}
     else if(humanSelection == 'scissors' && computerSelection == 'paper'){
        message.textContent = "You win!! Scissors beats paper"
         humanScore ++}       
     else if(humanSelection == 'paper' && computerSelection == 'scissors'){
        message.textContent ="You lose!! Scissors beats paper"
         computerScore ++}
     else{
        message.textContent ="It's a tie"
     }
 }

const Winner = () =>{
    const a = document.createElement("a");
    a.style.padding = "10px";
    a.textContent = 'Play again';
    a.style.textDecoration = "none";
    a.style.backgroundColor = "yellow";
    a.style.boxShadow = "rgb(0, 0, 0) 6px 6px";
    a.style.borderRadius = "10px";
    a.style.color = "black";
    a.href = 'index.html';
    button.appendChild(a);
};

 const totalScore = (humanScore, computerScore) =>{
    if (humanScore == 5 && computerScore == 5){
        message.textContent =`It's a tie :|`
        Winner()}
    else if(humanScore === 5){
        message.textContent = `You've won!!!`
        Winner()}
    else if (computerScore === 5){
        message.textContent = `You've lost :(`
        Winner()}

 }

const playGame = (playerChoice) => {
    const computerSelection = getComputerChoice()
    playRound(playerChoice, computerSelection)
    playerScore.textContent = `You: ${humanScore}`
    ComputerScore.textContent = `Computer: ${computerScore}`
    totalScore(humanScore, computerScore)
 }