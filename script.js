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

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS'){
        j++;
        console.log('Rock beats scissors, you win!');
    }
    else if(playerSelection == 'ROCK' && computerSelection == 'PAPER'){
        k++;
        console.log('Paper beats rock, you lose!');    
    }
    else if(playerSelection == 'ROCK' && computerSelection == 'ROCK')
        console.log('Draw!');
    else if(playerSelection == 'PAPER' && computerSelection == 'ROCK'){
        j++;
        console.log('Paper beats rock, you win!');
    }
    else if(playerSelection == 'PAPER' && computerSelection == 'SCISSORS'){
        k++;
        console.log ('Scissors beats paper, you lose!');
    }
    else if(playerSelection == 'PAPER' && computerSelection == 'PAPER')
        console.log ('Draw');
    else if(playerSelection == 'SCISSORS' && computerSelection == 'PAPER'){
        j++;
        console.log ('Scissors beats paper, you win!');
    }
    else if(playerSelection == 'SCISSORS' && computerSelection == 'ROCK'){
        k++;
        console.log ('Rock beats scissors, you lose!');
    }
    else if(playerSelection == 'SCISSORS' && computerSelection == 'SCISSORS')
        console.log ('Draw');
}

const rock = document.querySelector ('#rock');

rock.addEventListener('click', () => {
    const newLocal = computerSelection;
    playRound('ROCK', newLocal);
});

const paper = document.querySelector ('#paper');

paper.addEventListener('click', () => {
    const newLocal = computerSelection;
    playRound('PAPER', newLocal);
});

const scissors = document.querySelector ('#scissors');

scissors.addEventListener('click', () => {
    const newLocal = computerSelection;
    playRound('SCISSORS', newLocal);
});