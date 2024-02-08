let usrScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreAccess = document.querySelector("#user-score");
const compScoreAccess = document.querySelector("#comp-score");

//Generate CompChoice
const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const RndIdx = Math.floor(Math.random() * 3);
    return options[RndIdx]
};

const drawGame = () => {
    msg.innerText = "Game Draw, no one gets a point."
    msg.style.backgroundColor = "black";

};

const showWinner = (userWin,usrChoice,compChoice) => {
    if(userWin){
        usrScore++;
        userScoreAccess.innerText = usrScore;
        msg.innerText = `Congrats, you win. Your ${usrChoice} beats Computer's ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreAccess.innerText = compScore;
        msg.innerText = `Sorry, you lose.Computer's ${compChoice} beats your ${usrChoice}`;
        msg.style.backgroundColor = "red";

    }
}

const playGame = (usrChoice) => {
    //user choice
    console.log("user choice= ",usrChoice);
    //comp choice
    const compChoice = genCompChoice();
    console.log("comp choice= ",compChoice);

    if(usrChoice === compChoice){
        //Draw game
        drawGame();
    } 
    else {
        let userWin = true;
        if(usrChoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if(usrChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,usrChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const usrChoice = choice.getAttribute("id");
        playGame(usrChoice);
    });
});