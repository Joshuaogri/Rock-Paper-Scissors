let buttons = document.querySelectorAll('button');
let player= [];
let computer= [];
let scoreone= 0;
let scoretwo= 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        player.push(button.id);
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let array = ["rock", "paper", "scissors"];
        computer.push(array[ Math.floor(Math.random() * (array.length - 0) ) + 0])
    });
});
player.toString();
computer.toString();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById("comment").innerHTML = `You picked ${player.toString()} while computer chose ${ computer.toString()}`;
    });
});

function playround() {
    if (player.toString()==="rock" && computer.toString()==="paper") {
        return "You lost this round!"
    }
    else if (player.toString()==="rock" && computer.toString()==="scissors") {
        return "You won this round!"
    }
    else if (player.toString()==="paper" && computer.toString()==="rock") {
        return "You won this round!"
    }
    else if (player.toString()==="paper" && computer.toString()==="scissors") {
        return "You lost this round!"
    }
    else if (player.toString()==="scissors" && computer.toString()==="rock") {
        return "You lost this round!"
    }
    else if (player.toString()==="scissors" && computer.toString()==="paper") {
        return "You won this round!"
    }
    else if (player.toString()===computer.toString()) {
        return "It is a tie!"
    } else {
        return "Unknown choice"
    }
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById("call").innerHTML= playround();
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (playround()==="You won this round!") {
            scoreone = scoreone + 1;
        }
        else if (playround()==="You lost this round!") {
            scoretwo = scoretwo + 1;
        } else {
            scoreone = scoreone + 1;
            scoretwo = scoretwo + 1;
        }
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        document.getElementById("box_one").innerHTML= scoreone;
        document.getElementById("box_two").innerHTML= scoretwo;
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (scoreone >= 1 || scoretwo >= 1) {
            document.getElementById("comment").innerHTML = `You picked ${player.pop()} while computer chose ${ computer.pop()}`;
        }    
    });
});

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (scoreone == 5 || scoretwo == 5)  {
            let x = document.getElementById("task");
            document.getElementById("event").style.backgroundColor= "red";
            document.getElementById("event").style.display = "none";
            document.getElementById("caption").innerHTML = "GAME OVER!!!";
            document.getElementById("reload").style.display = "inline";
            document.getElementById("task").style.display = "none";
            document.getElementById("comment").style.display = "none"; 
        }
    });
})

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (scoreone == 5)  {
            document.getElementById("call").innerHTML= "You won the game with 5 points!!!";
        } else if (scoretwo == 5 ) {
            document.getElementById("call").innerHTML= "You lost the game!!!";
        }
    });
})