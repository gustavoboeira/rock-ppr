function computerPlay(){
    let min = Math.ceil(1);
    let max = Math.floor(3);
    let play = Math.floor(Math.random() * (max - min + 1)) + min;
    if(play == 1)
        return 'ROCK';
    else if(play == 2)
        return 'PAPER';
    else if(play == 3)
        return 'SCISSORS';
}

let computerSelection = computerPlay();
let playerSelection;
let i;
let j = 0; //counter of victories for the player
let k = 0; // counter of victories for the computer
const results = document.querySelector("#results");
const scoreboard = document.querySelector("#scoreboard");


function playRound(playerSelection, computerSelection){
    if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        j++;
        results.innerHTML = 'Rock beats scissors, you win!';
        scoreboard.innerHTML = j + ' x ' + k;
    }
    else if(playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        k++;
        results.innerHTML = 'Paper beats rock, you lose!';  
        scoreboard.innerHTML = j + ' x ' + k;  
    }
    else if(playerSelection == 'ROCK' && computerSelection == 'ROCK')
        results.innerHTML = 'Draw!';
    else if(playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        j++;
        results.innerHTML = 'Paper beats rock, you win!';
        scoreboard.innerHTML = j + ' x ' + k;
    }
    else if(playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
        k++;
        results.innerHTML = 'Scissors beats paper, you lose!';
        scoreboard.innerHTML = j + ' x ' + k;
    }
    else if(playerSelection == 'PAPER' && computerSelection == 'PAPER')
        results.innerHTML = 'Draw';
    else if(playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        j++;
        results.innerHTML = 'Scissors beats paper, you win!';
        scoreboard.innerHTML = j + ' x ' + k;
    }
    else if(playerSelection == 'SCISSORS' && computerSelection == 'ROCK'){
        k++;
        results.innerHTML = 'Rock beats scissors, you lose!';
        scoreboard.innerHTML = j + ' x ' + k;
    }
    else if(playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS')
        results.innerHTML = 'Draw';
}

const rock = document.querySelector ('#rock');

rock.addEventListener('click', () => {
    computerPlay();
    const newLocal = computerPlay();
    playRound('ROCK', newLocal);
});

const paper = document.querySelector ('#paper');

paper.addEventListener('click', () => {
    computerPlay();
    const newLocal = computerPlay();
    playRound('PAPER', newLocal);
});

const scissors = document.querySelector ('#scissors');

scissors.addEventListener('click', () => {
    computerPlay();
    const newLocal = computerPlay();
    playRound('SCISSORS', newLocal);
});

