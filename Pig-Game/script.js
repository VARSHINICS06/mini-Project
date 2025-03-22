'use strict';
const player0El=document.querySelector( '.player--0');
const player1El=document.querySelector( '.player--1');

const score0El=document.querySelector('#score--0');
const score1El=document.getElementById('score--1');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');

let scores,currentScore,activePlayer,player;
const init=function(){
 scores=[0,0];
 currentScore=0;
 activePlayer=0;
 player=true;
score0El.textContent=0;
score1El.textContent=0;
current0El.textContent=0;
current1El.textContent=0;

diceEl.classList.add('hidden');
player0El.classList.remove('player--winner');
player1El.classList.remove('player--winner');
player0El.classList.add('player--active');
player1El.classList.remove('player--active');
};
init();

const switchplayer=function(){
    document.getElementById(`current--${activePlayer}`).textContent= 0;  
    currentScore=0;
    activePlayer=activePlayer===0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};
//Rolling dice functionality
btnRoll.addEventListener('click',function(){
    if(player){
//1. Generating a random dice roll
const dice=Math.trunc(Math.random()*6)+1;
console.log(dice);
//2. Display dice
diceEl.classList.remove('hidden');
diceEl.src=`dice-${dice}.png`


//3.Check for rolled 1:if true,swich to next player
if(dice!==1){
//Add dice to current score
currentScore+=dice;
document.getElementById(`current--${activePlayer}`).textContent=currentScore;

}else{
    switchplayer()
}
    }
        
});
btnHold.addEventListener('click',function(){
    if(player){
    scores[activePlayer]+=currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent=scores[activePlayer];
    if(scores[activePlayer]>=100){
    
      player=false;
      diceEl.classList.add('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

    }
    else{
    switchplayer();
    }
}

});
btnNew.addEventListener('click',init);

