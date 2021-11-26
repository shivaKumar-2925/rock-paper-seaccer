let userScore = 0;
let compScore = 0;

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
let  user_score_span = document.getElementById('user-score')
let  computer_score_span = document.getElementById('comp-score')
let winDisplay = document.getElementById('winDisplay')

//converter function
function converts(convertThis){
if(convertThis === 'r'){return 'Rock'}
if(convertThis === 'p'){return 'Paper'}
if(convertThis === 's'){return 'Scissor'}
}
//win function
function win(user,computer){
  userScore++;
  document.getElementById(user).style.borderColor="#01ff00"
  user_score_span.innerHTML=userScore;
winDisplay.innerHTML=`your ${converts(user)} beats   ${converts(computer)}, you win !`
winDisplay.style.color="#01ff00"
setTimeout(()=>{
  document.getElementById(user).style.borderColor="black"
  winDisplay.style.color="white";
},1000)
}

//lost function
function lost(user,computer){
  compScore++;
  document.getElementById(user).style.borderColor="red"
  computer_score_span.innerHTML=compScore;
  winDisplay.innerHTML=`your ${converts(user)} lost by  ${converts(computer)}, you lost !`
  winDisplay.style.color="red";
setTimeout(()=>{
  document.getElementById(user).style.borderColor="black"
  winDisplay.style.color="white";
},1000)
}

//Draw function
function draw(user,computer){
  document.getElementById(user).style.borderColor="yellow"
  winDisplay.innerHTML=`your ${converts(user)} equal to  ${converts(computer)}, so its Draw!`
  winDisplay.style.color="yellow";
  setTimeout(()=>{
    document.getElementById(user).style.borderColor="black"
    winDisplay.style.color="white";
  },1000)
}


//computer choices
function compChoices(){
let computerChoices = ['r','p','s'];
let options = Math.floor(Math.random()*3)
let compFinalChoice =  computerChoices[options];
return compFinalChoice;
}
//user choices
function userChoice(){

}
//game function 
function game(userChoice){
  let comOption = compChoices()
switch (userChoice+comOption ){
  case 'rs':
  case 'sp':
  case 'pr':
    win(userChoice,comOption)
    break;
    case 'rp':
  case 'sr':
  case 'ps':
    lost(userChoice,comOption)
    break;
    case 'rr':
  case 'ss':
  case 'pp':
    draw(userChoice,comOption)
    break;
}

}
rock_div.addEventListener('click',()=>{
 game('r')
 
})
paper_div.addEventListener('click',()=>{
   game('p')
    
 })
 scissor_div.addEventListener('click',()=>{
  game('s')
   
 })