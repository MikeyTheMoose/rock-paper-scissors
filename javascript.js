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
    if (humanChoice === cpuChoice) {winner = "draw"}
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
        (winner === "Player") ? humanScore++ : cpuScore++
    }

    console.group(`Round ${rounds+1}`)
    console.log(`You chose ${humanChoice}. CPU chose ${cpuChoice}`)
    console.log(`The winner is: ${winner}`)
    console.log(`Current Score: (P)${humanScore} - (C)${cpuScore}`)
    console.groupEnd(`Round ${rounds+1}`)
    rounds++;
}

function playGame() {
    while (rounds < 5) {
        let human = getHumanChoice();
        let cpu = getComputerChoice();
        playRound(human,cpu);
    }
    let winner = humanScore > cpuScore ? "Player" : humanScore < cpuScore ? "CPU" : "Draw";
    console.log(`Final Score: (P)${humanScore} - (C)${cpuScore}`)
    console.log(`The winner is ${winner}!`)

}

playGame()

