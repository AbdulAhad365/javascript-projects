'use strict';
// console.log(document.querySelector(".message").textContent);
// document.querySelector('.message').textContent="Correct number"
// document.querySelector(".number").textContent=13;
// document.querySelector(".score").textContent=10;
// document.querySelector('.guess').value=24;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.score').textContent=10;

let rand_num=Math.trunc(Math.random()*20)+1;
let count=20;
document.querySelector('.check').addEventListener('click',function(){
    //main part of program
    let guess=document.querySelector('.guess').value
    console.log(guess,typeof guess);
    
    document.querySelector('.score').textContent=count
    //  ------------    CONDITIONS  ----------
    if (!guess){
        document.querySelector('.message').textContent="Enter a number!!"
    }
    else if(count<=0){
        document.querySelector('.message').textContent="YOU HAVE LOST";
        count=20
    }
    else if(Number(guess)===rand_num){
        console.log("number founrand_numd "+rand_num);
        document.querySelector('.message').textContent="Number found ";
        document.querySelector('.number').textContent=rand_num;
        document.querySelector('.won').textContent="You won";
        document.querySelector('body').style.backgroundColor='#2dad80';
        //check highes score and store it
        if (count>Number(document.querySelector('.highscore').textContent)){
            document.querySelector('.highscore').textContent=count
        }


        
    }
    else if (Number(guess)>20 || Number(guess)<0){
        
        document.querySelector('.message').textContent="Number is out of range";
        // count-=1
        // document.querySelector('.score').textContent=count;

    }

    else if (Number(guess)>rand_num){
        document.querySelector('.message').textContent="Guess is too high";
        count=count-1;
        document.querySelector('.score').textContent=count;

        

    }
    else if (Number(guess)<rand_num){
        document.querySelector('.message').textContent="Guess is too low";
        count=count-1;
        document.querySelector('.score').textContent=count;
    }
    // else{
    //     document.querySelector('.message').textContent="Number not found "+rand_num;

    //     console.log("not found "+rand_num);
    // }
    
})
document.querySelector('.again').addEventListener('click',function(){
    //Guess My Number!
    document.querySelector('.won').textContent="Guess My Number!";
    document.querySelector('.message').textContent="Start guessing...";
    document.querySelector('.score').textContent=20;
    document.querySelector('.number').textContent="?";
    document.querySelector('.guess').value="";
    count=20




})