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

// Helper function to create and append div{img} element based on 'weapon' to outerDiv
function createWeaponImg(weapon, outerDiv) {
    const div = document.createElement('div');
    const img = document.createElement('img');

    // Create weapon src address
    let srcAddress = `./imgs/${weapon}.png`;
    div.classList.add('weapons-png');
    div.classList.add('weapon-frame-png');
    img.setAttribute('src', srcAddress);
    img.setAttribute('alt', weapon);

    div.appendChild(img);

    outerDiv.appendChild(div);
}

// Function to clear div contents
function clearDiv(div) {
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
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

const feedback = document.querySelector('.content-feedback');

weapons.forEach( (e) => {
    e.addEventListener ('click', () => {
        console.log(e.getAttribute('id'));
        let p = e.getAttribute('id').toString();
        let c = getComputerChoice();

        // Clear divs first, then
        // Create and append appropriate imgs and update frames
        clearDiv(playerWeapon);
        clearDiv(aiWeapon);
        createWeaponImg(p,playerWeapon);
        createWeaponImg(c,aiWeapon);



        // Determine outcome
        let outcome = singleRPS(p,c);
        if (outcome == 0) {
            feedback.textContent = `Bummer - It's a tie.`;
            playerWeapon.style['background-color'] = '#faf3dd';
            aiWeapon.style['background-color'] = '#faf3dd';
        }
        else if (outcome == 1) {
            feedback.textContent = `You win - ${p} beats ${c}!`;
            playerWeapon.style['background-color'] = '#b8f2e6';
            aiWeapon.style['background-color'] = '#ffa69e';
            player++;
        }
        else if (outcome == -1) {
            feedback.textContent = `You lose - ${p} loses to ${c}!`;
            playerWeapon.style['background-color'] = '#ffa69e';
            aiWeapon.style['background-color'] = '#b8f2e6';
            ai++;
        }

        // Update Scoreboard
        playerScore.textContent = player;
        aiScore.textContent = ai;

        // Check for winner
        if (parseInt(playerScore.textContent) == 5) {
            setTimeout(function() {
                modal.style.display = 'block';
                modalWinner.textContent = 'Congratulations! You were first to five wins!';
            }, 500);

        }
        if (parseInt(aiScore.textContent) == 5) {
            setTimeout(function() {
                modal.style.display = 'block';
                modalWinner.textContent = 'Sorry! You lost five times.';
            }, 500);
        }

        //Play Again BTN
        playAgain.addEventListener('click', () => {            
            // Clear inputs
            feedback.textContent = 'First to five wins!'
            playerScore.textContent = '0';
            aiScore.textContent = '0';
            player = 0;
            ai = 0;

            clearDiv(playerWeapon);
            clearDiv(aiWeapon);

            playerWeapon.style['background-color'] = 'white';
            aiWeapon.style['background-color'] = 'white';

            modal.style.display = 'none';
            modalWinner.textContent = '';
        });
    });
});
