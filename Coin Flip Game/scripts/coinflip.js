
let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loss: 0,
};

updateScoreElements();

function playGame(playerGuess)
{
    const computerToss = pickcomputerToss();

    let result = '';

    if(playerGuess === 'heads')
    {
        if(computerToss === 'heads')
        {
            result = 'You WON';
        }
        if(computerToss === 'tails')
        {
            result = 'You LOST';
        }
    }
    else if(playerGuess === 'tails')
    {
        if(computerToss === 'tails')
        {
            result = 'You WON';
        }
        if(computerToss === 'heads')
        {
            result = 'You LOST';
        }
    }

    if(result === 'You WON')
    {
        score.win += 1;
    }
    else if(result === 'You LOST')
    {
        score.loss += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result').innerHTML = result;
    
    document.querySelector('.js-moves').innerHTML = `You guessed <img class="image-icon" src="images/${playerGuess}.png"> - Toss result is <img  class="image-icon" src="images/${computerToss}.png">`;
    
    updateScoreElements();

}

function updateScoreElements()
{
    const scoreElement = document.querySelector('.js-score');
    scoreElement.innerHTML = `Win: ${score.win}, Loss: ${score.loss}`;
}

function resetScore()
{
    score.win = 0;
    score.loss = 0;
    localStorage.removeItem('score');
}

function pickcomputerToss()
{
    const randomNumber = Math.random();

    let computerToss = ''; 

    if(randomNumber > 0.5)
    {
        computerToss = 'heads';
    }
    else if(randomNumber < 0.5)
    {
        computerToss = 'tails';
    }

    return computerToss;
}