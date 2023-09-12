function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex]
}

function rps(a, b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a === b) return 'Draw';
    let wins = {rock: 'scissors', paper: 'rock', scissors: 'paper'};
    return wins[a] === b ? `Player 1 wins: ${a} beats ${b}` : `Player 2 wins: ${b} beats ${a}`;
  }
  

console.log(rps("rock","paper"))