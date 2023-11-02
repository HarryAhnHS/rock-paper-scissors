function getComputerChoice() {
    // Randomly choose Rock, Paper, or Scissors
    let n = Math.floor(Math.random() * 3);
    if (n == 0) return "rock";
    else if (n == 1) return "paper";
    else return "scissors";
}

function singleRPS(player, computer) {
    let p = player.toLowerCase();
    let c = computer.toLowerCase();

    const outcome = {
        "rock" : {beats: "scissors", losesTo: "paper"},
        "paper" : {beats: "rock", losesTo: "scissors"},
        "scissors" : {beats: "paper", losesTo: "rock"}
    }
    // Returns -- 0:T, 1:W, -1:L
    if (p == c) return 0;
    else if (outcome[p]["beats"] == c) return 1;
    else if (outcome[p]["losesTo"] == c) return -1;
}

let player = 0;
let ai = 0;

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const weapons = document.querySelectorAll(".option-card");

const playerWeapon = document.querySelector('#player-weapon');
const aiWeapon = document.querySelector('#ai-weapon');

const playerScore = document.querySelector('#player-score');
const aiScore = document.querySelector('#ai-score');

const modal = document.querySelector('.modal');
const modalWinner = document.querySelector('#modal-winner');
const playAgain = document.querySelector('#play-again');

weapons.forEach( (e) => {
    e.addEventListener ('click', () => {
        console.log(e.getAttribute('id'));
        let p = e.getAttribute('id').toString();
        let c = getComputerChoice();

        // Update Frames
        playerWeapon.textContent = p;
        aiWeapon.textContent = c;

        // Determine outcome
        let outcome = singleRPS(p,c);
        if (outcome == 0) {
        console.log(`Bummer! It's a tie between ${p}.`)
        }
        else if (outcome == 1) {
        console.log(`You win: ${p} beats ${c}!`);
        player++;        
        }
        else if (outcome == -1) {
        console.log(`You lose: ${p} gets destroyed by ${c}!`)
        ai++;
        }

        // Update Scoreboard
        playerScore.textContent = player;
        aiScore.textContent = ai;

        // Check for winner
        if (parseInt(playerScore.textContent) == 5) {
        modal.style.display = 'block';
        modalWinner.textContent = 'Congratulations! You were first to five wins!'

        }
        if (parseInt(aiScore.textContent) == 5) {
        modal.style.display = 'block';
        modalWinner.textContent = 'Sorry! You lost five times.';
        }

        //Play Again BTN
        playAgain.addEventListener('click', () => {
        // Clear inputs
        playerScore.textContent = '0';
        aiScore.textContent = '0';
        playerWeapon.textContent = '';
        aiWeapon.textContent = '';

        modal.style.display = 'none';
        modalWinner.textContent = '';
        });
    });
});

// rock.addEventListener('click', () => {
//     let p = 'rock';
//     let c = getComputerChoice();

//     // Update Frames
//     playerWeapon.textContent = p;
//     aiWeapon.textContent = c;

    
//     // Determine outcome
//     let outcome = singleRPS(p,c);
//     if (outcome == 0) {
//         console.log(`Bummer! It's a tie between ${p}.`)
//     }
//     else if (outcome == 1) {
//         console.log(`You win: ${p} beats ${c}!`);
//         player++;        
//     }
//     else if (outcome == -1) {
//         console.log(`You lose: ${p} gets destroyed by ${c}!`)
//         ai++;
//     }

//     // Update Scoreboard
//     playerScore.textContent = player;
//     aiScore.textContent = ai;

//     // Check for winner
//     if (parseInt(playerScore.textContent) == 5) {
//         // Clear inputs
//         playerScore.textContent = '0';
//         aiScore.textContent = '0';
//         playerWeapon.textContent = '';
//         aiWeapon.textContent = '';

//         modal.style.display = 'block';
//         modalWinner.textContent = 'Congratulations! You were first to five wins!'

//     }
//     if (parseInt(aiScore.textContent) == 5) {
//         alert("Sorry, you lose!");

//         modal.style.display = 'block';
//         modalWinner.textContent = 'Sorry! You lost five times.';
//     }

//     playAgain.addEventListener('click', () => {
//         // Clear inputs
//         playerScore.textContent = '0';
//         aiScore.textContent = '0';
//         playerWeapon.textContent = '';
//         aiWeapon.textContent = '';

//         modal.style.display = 'none';
//         modalWinner.textContent = '';
//     });
// });