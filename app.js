let userScore=0;
let computerScore=0;

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#computer-score");


const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");


const genCompChoise=()=>{
    const option =["Rock","Paper","Scissors"];
    const ranIdx =Math.floor(Math.random()*3);
    return option[ranIdx];
}

const drawGame=()=>{
    console.log("Game Draw.....!");
    msg.innerText="Game Draw.....!";
    msg.style.backgroundColor="rgb(235, 146, 31)";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        console.log("You Win");
        userScore++;
        userScorepara.innerText= userScore;
        msg.innerText=`You Win...! ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        console.log("you Loss");
        computerScore++;
        compScorepara.innerText= computerScore;
        msg.innerText=`You Lost..! ${compChoice} Beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const playGame =(userChoice,)=>{

    console.log( "user choice= ", userChoice);

    const compChoice = genCompChoise();
    console.log( "Computer choice= ",compChoice );
    //maduler---small small function for performing a task

    if(userChoice==compChoice){
        //draw game
        drawGame();
    }


    else{
        let userwin=true;
        if(userChoice==="Rock"){
            // scissor,paper
            userwin=compChoice==="Paper"? false:true;
        }
        else if(userChoice==="Paper"){
            // rock, scissors
            userwin=compChoice==="Scissor"?false:true;

        }
        else{
            // rock,paper
            userwin=compChoice==="Rock"?false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});