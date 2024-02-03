let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");





const showWinner=(userwin)=>{
if(userwin){
    userScore++;
    document.querySelector("#user-score").innerText=userScore;
    document.querySelector("#msg").innerText="You Win";
    document.querySelector("#msg").style.backgroundColor="green"
}
else{
    compScore++;
    document.querySelector("#comp-score").innerText=compScore;
    document.querySelector("#msg").innerText="You Lose";
    document.querySelector("#msg").style.backgroundColor="red"

}
}
const playGame=(userChoice)=>{
    const compChoices=["rock","paper","scissors"];
       let num=Math.floor( Math.random()*3 );
       const compChoice=compChoices[num];
       if(userChoice===compChoice){
        document.querySelector("#msg").innerText="Game Was Draw.Play Again";
        document.querySelector("#msg").style.backgroundColor="#081b31"

       }
       else{
        let userwin=true;
        if(userChoice==="rock")
        {
            userwin= compChoice==="paper"?false : true;
        }
        else if(userChoice==="paper")
        {
            userwin=compChoice==="scissors"?false:true;
        }
        else{
              userChoice=compChoice==="rock"?false:true;
        }
        showWinner(userwin);
       }

}
choices.forEach((choice,index)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});