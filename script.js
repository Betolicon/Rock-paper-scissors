const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    let choice = Math.floor(Math.random()*3);
    console.log(choice)
    return choices[choice];
}

const computerSelection = getComputerChoice()
console.log(computerSelection)