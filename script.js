var score_Player=0;
var score_Computer=0;
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
                score_Computer++;
                return "You Lose! Paper beats Rock";
            }
            else if(computerChoice.toLowerCase()=="scissors"){
                score_Player++;
                return "You Won! Rock beats Scissors";
            }

        }
        else if(playerChoice.toLowerCase()=="paper"){
            if( computerChoice.toLowerCase()=="rock"){
                score_Player++;
                return "You Won! Paper beats Rock";
            }
            else if(computerChoice.toLowerCase=="scissors"){
                score_Computer++;
                return "You Lose! Scissors beats Paper";
            }


        else if(playerChoice.toLowerCase()=="scissors"){
            if( computerChoice.toLowerCase()=="paper"){
                score_Player++;
                return "You Won! Scissors beats Paper";
            }
            else if(computerChoice.toLowerCase=="rock"){
                score_Computer++;
                return "You Lose! Rock beats Scissors";
            }

    }
    }

    }   
}



function Game(){
    
    while(score_Computer<5 && score_Player<5){
        let player_Choice=prompt("Enter your Choice(Rock,Paper,Scissors)").toString();
        let result=playGame(player_Choice,getComputerChoice());
        console.log(result);
        console.log("Player: "+ score_Player + "               "+"Computer: "+score_Computer);
        if(score_Player==5){
            console.log("You won the game");
        }
        if(score_Computer==5){
            console.log("You lost the game");
        }
        

    }



}
Game();
