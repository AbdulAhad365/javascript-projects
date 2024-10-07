'use strict';
let score0=document.querySelector('#score--0');
let score1=document.querySelector('#score--1');
let image=document.querySelector('.dice');
let btn_new=document.querySelector('.btn--new')
let btn_hold=document.querySelector('.btn--hold')
let btn_roll=document.querySelector('.btn--roll')
let current0=document.querySelector('#current--0')
let current1=document.querySelector('#current--1')
const player0=document.querySelector('.player--0')
const player1=document.querySelector('.player--1')
const name0=document.querySelector('#name--0')
const name1=document.querySelector('#name--1')


// starting conditions
score0.textContent=0;
score1.textContent=0;
image.classList.add('hidden');
let current=0
let arr=[0,0]
let player=0
let win=true

//function images


//event handler roll dice
btn_roll.addEventListener('click',function(){
    const store_player=player===0?arr[0]:arr[1]
    let rand_num=Math.trunc(Math.random()*6)+1;

    if (win){
    current+=rand_num;
    image.src=`dice-${rand_num}.png`
    image.classList.remove('hidden')
    //store the value present in the score-- value
        // co
    console.log(store_player,player);}
    if (Number(store_player)>=20){
        console.log(`player ${player} has won`);
        document.querySelector(`#name--${player}`).textContent=`PLAYER ${player+1} won`
        win=false
        
    }
    else if (rand_num===1){
        //swtich player
        current=0
        // arr[player]=0
        //          ----METHORfD 1: TERNARY
        // document.querySelector(``)
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')

        //print player to 0
        document.querySelector(`#score--${player}`).textContent=0

        document.querySelector(`#current--${player}`).textContent=0;
        player=player===0 ? 1:0
        //------        METHORD 2   ------
        // if (player===0){
        //     player=1;
        //     current0.textContent=arr[0]
        // }
        // else{
        //     player=0
        //     current1.textContent=arr[1]

        // }

        // console.log(arr[0],arr[1]);

    }
    else{

        document.querySelector(`#current--${player}`).textContent=current;
        // arr[player]=current
        // if (player===0){
        //     current0.textContent=arr[0]
        // }
        // else{
        //     current1.textContent=arr[1]

        // }
        // console.log(arr[0],arr[1]);
    }
    //image of dice show it

})

//hold
btn_hold.addEventListener('click',function(){
    
    const store_player=player===0?arr[0]:arr[1]
    if (Number(store_player)>=20){
        console.log(`player ${player} has won`);
        document.querySelector(`#name--${player}`).textContent=`PLAYER ${player+1} won`
        win=false
        
    }

    //switch player
    if(win ){
        arr[player]+=current;
        document.querySelector(`#score--${player}`).textContent=arr[player]
        player=player===0?1:0;
        current=0
        
        //now color change
        player0.classList.toggle('player--active')
        player1.classList.toggle('player--active')}
        
    //condions to exit
    // if ()
    console.log(store_player,player);
    

})

btn_new.addEventListener('click',function(){
    // console.log(rand_num)
    player0.classList.add('player--active')
    player1.classList.remove('player--active')

    name0.textContent="PLAYER 1 ";
    name1.textContent="PLAYER 2 ";
    // document.querySelector('')
    score0.textContent=0;
    score1.textContent=0;
    current0.textContent=0;
    current1.textContent=0;
    image.classList.add('hidden')
    arr=[0,0]
    player=0
    win=true
})