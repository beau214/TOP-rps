
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
     if (comp === player){
         const play =(`You chose ${player} and computer chose ${comp}`);
         const result = document.querySelector('.show');
         result.textContent= `${play}`;
         const status = document.querySelector('.status');
         status.textContent = 'Tie!';
        }else{
         if(comp === "rock" && player === "scissors"){
            const play=(`You chose ${player} and computer chose ${comp}`);
            const result = document.querySelector('.show');
            result.textContent= `${play}`;
            const status = document.querySelector('.status');
            status.textContent = 'Computer Wins!';
        }else if (comp === "scissors" && player === "paper"){
            const play=(`You chose ${player} and computer chose ${comp}`);
            const result = document.querySelector('.show');
            result.textContent= `${play}`;
            const status = document.querySelector('.status');
            status.textContent = 'Computer Wins';
         }else if(comp === "paper" && player === "rock"){
            const play=(`You chose ${player} and computer chose ${comp}`);
            const result = document.querySelector('.show');
            result.textContent= `${play}`;
            const status = document.querySelector('.status');
            status.textContent = 'Computer Wins!';
         }else {
             const play =(`You chose ${player} and computer chose ${comp}`);
             const result = document.querySelector('.show');
            result.textContent= `${play}`;
            const status = document.querySelector('.status');
            status.textContent = 'You Win!';
         }
     }
     
 }

function counter(round) {
    round += 1;
    return round;
}
/* Look at how to remove listener and renew listener 
    theres a youtube video about using it for a drum kit
    check that out if stuck */

 function game(choice){
    let compWin = 0;
    let playWin = 0;
    let tie = 0;
    let roundsPlayed = 1;

    r.removeEventListener("click", function () {
        game('rock');
    });
        const match = document.querySelector('.round');
        match.textContent = `${roundsPlayed}`;
        let comp = computerPlay();
        let play = choice;
        let result = round(comp,play);
        while (roundsPlayed <5){
            
r.addEventListener("click", function () {
    game('rock');
});

p.addEventListener("click", function () {
    game('paper');
});

s.addEventListener("click", function () {
    game('scissors');
});
        }
        roundsPlayed++;
        console.log(roundsPlayed)
 }

 
/*
 let comp = computerPlay();
 let play = prompt("Choose: rock, paper, or scissors").toLowerCase();
*/

