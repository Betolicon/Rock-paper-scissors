const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0
let computerScore = 0

const getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3);
    return choices[choice];
}

const ValidationHumanChoice = humanChoice =>{
    for(let i = 0; i < choices.length; i++){
        if(humanChoice === choices[i])
            return true;
    }
    return false
}

const getHumanChoice = () =>{
    let humanChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase()
    while (ValidationHumanChoice(humanChoice)  === false)
        humanChoice = prompt("Try again. Enter your choice (rock, paper, or scissors):").toLowerCase()
    return humanChoice;
}

const playRound = (humanSelection, computerSelection) =>{
    if(humanSelection == 'rock' && computerSelection == 'scissors'){
        console.log("You win!! Rock beats scissors")
        humanScore ++}
    else if(humanSelection == 'scissors' && computerSelection == 'rock'){
        console.log("You lose!! Rock beats scissors")
        computerScore ++}
    else if(humanSelection == 'paper' && computerSelection == 'rock'){
        console.log("You win!! Paper beats rock")
        humanScore ++}       
    else if(humanSelection == 'rock' && computerSelection == 'paper'){
        console.log("You lose!! Paper beats rock")
        computerScore ++}
    else if(humanSelection == 'scissors' && computerSelection == 'paper'){
        console.log("You win!! Scissors beats paper")
        humanScore ++}       
    else if(humanSelection == 'paper' && computerSelection == 'scissors'){
        console.log("You lose!! Scissors beats paper")
        computerScore ++}
    else{
        console.log("It's a tie")
        humanScore ++
        computerScore ++
    }
    console.log(`Your score: ${humanScore}`)
    console.log(`Computer score: ${computerScore}`)
}

const totalScore = (humanScore, computerScore) =>{
    if(humanScore > computerScore)
        console.log(`You've won!!! Your score ${humanScore} / Computer score ${computerScore}`)
    else if (computerScore > humanScore)
        console.log(`You've lost :( Your score ${humanScore} / Computer score ${computerScore}`)
    else
        console.log(`It's a tie :| Your score ${humanScore} / Computer score ${computerScore}`)
}

const playGame = () => {
    for(let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    }

    totalScore(humanScore, computerScore)
}

playGame()