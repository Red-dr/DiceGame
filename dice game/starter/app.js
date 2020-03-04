/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

Init();

//manipulating the #current html tag and setting it to the dice variable
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' +dice + '</em>';

//manipulating the CSS to hide the dice immage.



//when you click on the roll dice button 
document.querySelector('.btn-roll').addEventListener('click', function() {
    //roll dice
    var dice = Math.floor(Math.random() * 6) + 1;

    //dysplay the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    //update the round score only if the number was not a 1;
    if( dice !== 1)   {
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

    } else { 
     
        nextPlayer();
    }

});

document.querySelector('.btn-hold').addEventListener('click', function()
{
    // add the current score to the gobal score.
    scores[activePlayer] += roundScore;

    //update the UI 

    document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];
     

    //check if player won the game. 
     if(scores[activePlayer] >= 100)
     {
        //document.querySelector('#name-'+ activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display ='none';
        document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
     }
     else
     {
         //Next player
        nextPlayer();
     }

});

document.querySelector('.btn-new').addEventListener('click', Init);

function Init(){

    scores=[0,0];
    activePlayer =0;
    roundScore =0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1' ;
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    

}


function nextPlayer ()
{
       // next players turn.
       document.querySelector('#current-' + activePlayer).textContent = 0;
        
       //if active player is 0 then active plaer is now 1 else it is 0;
       
       activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
       roundScore = 0;

       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');

};
























































