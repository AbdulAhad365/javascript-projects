'use strict';
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const btnCloseModel=document.querySelector('.close-modal')
const btnOpenModel=document.querySelectorAll('.show-modal')
console.log(btnOpenModel)


// -----------------           WAY 1    -------

// console.log(modal);
// for (let i=0;i<btnOpenModel.length;i++)
//     btnOpenModel[i].addEventListener('click',function(){
//         modal.classList.remove('hidden')
//         overlay.classList.remove('hidden')
//     })
// //click on the button
// btnCloseModel.addEventListener('click',function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden')
// })
// //same when we click on the overlay
// overlay.addEventListener('click',function(){
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden')
// })


// -------------------             WAY2     --------
let add_hidden=function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

};
let remove_hidden=function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
};

for (let i=0;i<btnOpenModel.length;i++){
    // console.log(btnOpenModel[i].textContent)
    btnOpenModel[i].addEventListener('click',remove_hidden);}
//now for the close
btnCloseModel.addEventListener('click',add_hidden)
overlay.addEventListener('click',add_hidden)
//---------------           for the esc on keyboard
document.addEventListener('keydown',function(e){
    if (e.key==='Escape' && !modal.classList.contains('hidden')){
        add_hidden();
    }
    console.log(e);
})