let playerScore = 0;
let computerScore = 0;
let currRound = 0;

document.querySelector(".player-score").textContent = playerScore;
document.querySelector(".comp-score").textContent = computerScore;
document.querySelector(".round").textContent = currRound;






function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
     if(choice === 0){
         return "rock";
     }else if (choice === 1) {
         return "paper";
     }else if (choice === 2) {
         return "scissors";
     } 
 }

 function round(comp, player) {
    currRound++;
     if (comp === player){
         const play =(`You chose ${player} and computer chose ${comp}`);
         document.querySelector('.show').textContent = `${play}`; 
         document.querySelector('.status').textContent = 'Tie!';
        }else{
         if(comp === "rock" && player === "scissors"){
            const play=(`You chose ${player} and computer chose ${comp}`);
            document.querySelector('.show').textContent = `${play}`;
            document.querySelector('.status').textContent = 'Computer Wins!';
            computerScore += 1;
        }else if (comp === "scissors" && player === "paper"){
            const play=(`You chose ${player} and computer chose ${comp}`);
            document.querySelector('.show').textContent = `${play}`;
            document.querySelector('.status').textContent = 'Computer Wins!';
            computerScore += 1;
         }else if(comp === "paper" && player === "rock"){
            const play=(`You chose ${player} and computer chose ${comp}`);
            document.querySelector('.show').textContent = `${play}`;
            document.querySelector('.status').textContent = 'Computer Wins!';
            computerScore += 1;
         }else {
            const play =(`You chose ${player} and computer chose ${comp}`);
            document.querySelector('.show').textContent = `${play}`;
            document.querySelector('.status').textContent = 'You Win!';
            playerScore += 1;
         }
     }
     
 }


/* Look at how to remove listener and renew listener 
    theres a youtube video about using it for a drum kit
    check that out if stuck */

 function game(choice){
    if (playerScore < 5 && computerScore < 5){
        let comp = computerPlay();
        let player = choice;
        let result = round(comp, player);
        document.querySelector(".player-score").textContent = playerScore;
        document.querySelector(".comp-score").textContent = computerScore;
        document.querySelector(".round").textContent = currRound;
    }
    
    if (computerScore == 5) {
        document.querySelector('.show').textContent = 'You lose!';
        document.querySelector('.status').textContent = 'Play Again?';
    }

    if (playerScore == 5) {
        document.querySelector('.show').textContent = 'You Win!';
        document.querySelector('.status').textContent = 'Play Again?';
    }
    
        
        
        console.log(playerScore);
        console.log(computerScore);
        console.log(currRound);

 }

       
 

 
 const r = document.querySelector(".rock");
 r.addEventListener("click", function () {
     game('rock');
 });
 const p = document.querySelector(".paper");
 p.addEventListener("click", function () {
     game('paper');
 });
 const s = document.querySelector(".scissors");
 s.addEventListener("click", function () {
     game('scissors');
 });
