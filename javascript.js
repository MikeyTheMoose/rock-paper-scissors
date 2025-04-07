let humanScore = 0,
    cpuScore = 0,
    rounds = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    if (choice === 0) return "rock";
    else if (choice === 1) return "paper";
    else if (choice === 2) return "scissors";
    else console.error(`${choice} is not a valid random number.`)
}

function getHumanChoice() {

    const options = ["rock","paper","scissors"]
    let choice = "none";
    while (options.indexOf(choice) < 0) {
        choice = prompt("Rock, Paper, or Scissors").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice,cpuChoice) {

    let winner = null;
    if (humanChoice === cpuChoice) {winner = "Draw"}
    else {
        switch (humanChoice) {
            case "rock":
                cpuChoice === "paper" ? winner = "CPU" : winner = "Player";
                break;
            case "paper":
                cpuChoice === "scissors" ? winner = "CPU" : winner = "Player";
                break;
            case "scissors":
                cpuChoice === "rock" ? winner = "CPU" : winner = "Player";
                break;
        }
        (winner === "Player") ? humanScore++ : cpuScore++;
    }
    rounds++;
    humanChoice = humanChoice.substring(0,1).toUpperCase() + humanChoice.substring(1);
    cpuChoice = cpuChoice.substring(0,1).toUpperCase() + cpuChoice.substring(1);

    const results = document.querySelector('.results');
    results.textContent = `Round ${rounds}`

    const resultsWinner = document.createElement('h1');
    resultsWinner.textContent = `${humanChoice} ${(winner === "Draw") ? "draws with" : (winner === "Player") ? "beats" : "loses to"} ${cpuChoice} (${winner})`
    results.appendChild(resultsWinner)

    const score = document.createElement('h1');
    score.textContent = `Score: [P]${humanScore} - [C]${cpuScore}`;
    results.appendChild(score);
    
    if (humanScore === 5 || cpuScore === 5) {
        alert(`${winner} wins!`);
        // Remove buttons and add 'New Game' button
    }
}

function playGame() {
    const buttons = document.querySelectorAll('button')
    buttons.forEach((e) => {
       e.addEventListener('click',() => playRound(e.id,getComputerChoice())
    )})

    let winner = humanScore > cpuScore ? "Player" : humanScore < cpuScore ? "CPU" : "Draw";
    console.log(`Final Score: (P)${humanScore} - (C)${cpuScore}`)
    console.log(`The winner is ${winner}!`)

}

playGame()

