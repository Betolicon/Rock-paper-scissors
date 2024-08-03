const choices = ['rock', 'paper', 'scissors'];

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

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()