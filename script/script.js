function computerPlay() {
    let array = ["rock", "paper", "scissors"];
    return array[ Math.floor(Math.random() * (array.length - 0) ) + 0];
}

let playerSelection= prompt("Pick your choice").toLowerCase();
let computerSelection=computerPlay();

function playround() {
   
    if (playerSelection==="rock" && computerSelection==="paper") {
       return "You lost this round!"
    }
    else if (playerSelection==="rock" && computerSelection==="scissors") {
       return "You won this round!"
    }
    else if (playerSelection==="paper" && computerSelection==="rock") {
       return "You won this round!"
    }
    else if (playerSelection==="paper" && computerSelection==="scissors") {
       return "You lost this round!"
    }
    else if (playerSelection==="scissors" && computerSelection==="rock") {
       return "You lost this round!"
    }
    else if (playerSelection==="scissors" && computerSelection==="paper") {
       return "You won this round!"
    }
    else if (playerSelection===computerSelection) {
        return "It is a tie!"
    } else {
       return "Unknown choice"
    }
}

console.log(playround())
let player = 0;
let computer= 0;
function game() {
    for (i=0;i < 5; i++) { 
        player = 0;
        computer= 0;
        console.log(playround());
        if(playround()==="You won this round!") {
            player+=1;
        }
        else if(playround()==="You lost this round!") {
        computer+=1;
        }
        else {
        player = player + 1;
        computer+=1;
    }
}
return [player, computer];
}

console.log(game());

let arrayed = game();

function winner() {
if (arrayed[0] > arrayed[1]) {
    return "You are the winner!!!!!!"
} 
else if (arrayed[0] < arrayed[1]) {
    return "What a loss...."
} else {
    return "It is a tie.."
}
}

console.log(winner());

