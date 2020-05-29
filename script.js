let scorePlayer = 0;
let scoreComp = 0;
let buttonStart = document.getElementById('btn');


buttonStart.onclick = game;


function playGame(userInput, comInput) {

    const compArr = ["rock", "paper", "scissors"];
    userInput = prompt("Select your move")
    let userLower = userInput.toLowerCase();
    comInput = compArr[Math.floor(Math.random() * compArr.length)];

    if (compArr.indexOf(userLower) > -1) {
        if (userLower === "rock" && comInput === "paper" || userLower === "paper" && comInput === "scissors" || userLower === "scissors" && comInput === "rock") {
            playerLose();
        } else if (userLower === "paper" && comInput === "rock" || userLower === "scissors" && comInput === "paper" || userLower === "rock" && comInput === "scissors") {
            playerWin();
        } else if (userLower === comInput) {
            draw();
        }
    } else {
        alert(`Please, insert a valid option`)
    }

}


function playerLose(){
    const loseMessage =`Sorry, you lost this round.`;
    alert(loseMessage);
    scoreComp++;
}

function playerWin(){
    const winMessage =`Very Good! You win this round!`;
    alert(winMessage);
    scorePlayer++;
}

function draw (){
    const drawMessage = `It's a Draw! Try this round again!`;
    alert(drawMessage);
}

function game() {
    scorePlayer = 0;
    scoreComp = 0;
    for (i = 0; i < 5; i++) {
        playGame();   
    }if (scorePlayer > scoreComp){
            alert(`Congratulations! You win!`)
        } else if (scoreComp > scorePlayer){
            alert(`Too bad! You Lost!`)
        } else {
            alert(`It's a Draw! Try Again!`)
        }
}
