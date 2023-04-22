let choices=["rock","paper","scissors"];
function getComputerChoice(){
    let choices=["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*3)];

}

function playGame(playerSelection,computerSelection){
    let playerChoice=playerSelection.toString();
    let computerChoice=computerSelection.toString();
    console.log(playerChoice.toLowerCase());


    if (playerChoice.toLowerCase() == computerChoice.toLowerCase()){
        return "Draw";
    }
    else{
        /*code for determining winner*/

        if(playerChoice.toLowerCase()=="rock"){
            if( computerChoice.toLowerCase()=="paper"){
                return "You Lose! Paper beats Rock";
            }
            else if(computerChoice.toLowerCase()=="scissors"){
                return "You Won! Rock beats Scissors";
            }

        }
        else if(playerChoice.toLowerCase()=="paper"){
            if( computerChoice.toLowerCase()=="rock"){
                return "You Won! Paper beats Rock";
            }
            else if(computerChoice.toLowerCase=="scissors"){
                return "You Lose! Scissors beats Paper";
            }


        else if(playerChoice.toLowerCase()=="scissors"){
            if( computerChoice.toLowerCase()=="paper"){
                return "You Won! Scissors beats Paper";
            }
            else if(computerChoice.toLowerCase=="rock"){
                    return "You Lose! Rock beats Scissors";
            }

    }
    }

    }   
}
let computerSelection=getComputerChoice();
console.log(playGame("ROCK",computerSelection));