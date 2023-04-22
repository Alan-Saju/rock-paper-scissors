let choices=["rock","paper","scissors"];
function getComputerChoice(){
    let choices=["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];

}

function playGame(playerSelection,computerSelection){
    let playerChoice=playerSelection.toString();
    let computerChoice=computerSelection.toString();
    console.log(computerChoice);
    console.log(playerChoice.toLowerCase());


    if (playerChoice.toLowerCase() == computerChoice.toLowerCase()){
        return "You Lose! Paper beats Rock";
    }
    else{
        return "Still Working on that";
    }

}
let computerSelection=getComputerChoice;
playGame("ROCK",computerSelection);