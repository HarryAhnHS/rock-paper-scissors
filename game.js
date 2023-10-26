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

function main() {
    // Counts
    let pc = 0;
    let cc = 0;

    while (pc < 3 && cc < 3) {
        // Get weapons
        let p = prompt("Enter your weapon:");
        let c = getComputerChoice();

        let outcome = singleRPS(p,c);
        if (outcome == 0) {
            console.log(`Bummer! It's a tie between ${p}.`)
        }
        else if (outcome == 1) {
            console.log(`You win: ${p} beats ${c}!`);
            pc++;
        }
        else if (outcome == -1) {
            console.log(`You lose: ${p} gets destroyed by ${c}!`)
            cc++;
        }
    }

    if (pc == 3) {
        console.log("Congratulations! You were first to three wins!")
    }
    else {
        console.log("Unlucky! Computer beat you three times first.")
    }   

    return;
}

main();