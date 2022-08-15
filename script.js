/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
let totalScore={computerScore:0,playerScore:0};
function getComputerChoice() {
    let rps=['Rock','Paper','Scissor']
    let computerChoice=Math.floor(Math.random()*rps.length);
    return rps[computerChoice];
  }
  
  // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
  // human wins - getResult('Rock', 'Scissors') 👉 1
  // human loses - getResult('Scissors', 'Rock') 👉 -1
  // human draws - getResult('Rock', 'Rock') 👉 0
  function getResult(playerChoice,computerChoice) {
    // return the result of score based on if you won, drew, or lost
    // let playerChoice=playerChoice;
    // let computerChoice=getComputerChoice();
    let score;
    // All situations where human draws, set `score` to 0
    if(playerChoice==computerChoice){
    score=0;
    }
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
    if(playerChoice=="Rock"&&computerChoice=="Scissor"){
      score=1;
    }
    else if(playerChoice=="Scissor"&&computerChoice=="Paper"){
      score=1;
    }
    else if(playerChoice=="Paper"&&computerChoice=="Rock"){
      score=1;
    }
    // Otherwise human loses (aka set score to -1)
    else{
      score=-1;
    }
    // return score
    return score;
  }
  
  // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
  function showResult(score, playerChoice, computerChoice) {
    // let score=score;
    // let playerChoice=playerChoice;
    // let computerChoice=computerChoice;
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    let playerscore=document.getElementById('player-score');
    let hand=document.getElementById('hands');
    if(score==-1){
      document.getElementById('result').innerText="You Lose!";
    }
    else if(score==1){
      document.getElementById('result').innerText="You Win!";
    }
    else{
      document.getElementById('result').innerText="Draw!";
    }
    playerscore.innerText=`your score is ${totalScore['playerScore']}`
    hand.innerText=`👱${playerChoice} vs 🤖${computerChoice}`;

  }
  
  // ** Calculate who won and show it on the screen **
  function onClickRPS(playerChoice) {
    // let playerChoice=playerChoice;
    let computerChoice=getComputerChoice();
   let gR=getResult(playerChoice,computerChoice);
   totalScore['playerScore']+=gR;
    showResult(gR,playerChoice,computerChoice);
    // totalScore['computerScore']+=gR;
  }
  // ** Make the RPS buttons actively listen for a click and do something once a click is detected **
  function playGame() {
    // use querySelector to select all RPS Buttons
    // let buttons=document.querySelectorAll('.button');
    let rpsButtons=document.querySelectorAll('.rpsButton');
    
  
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    // 1. loop through the buttons using a forEach loop
    rpsButtons.forEach(Button=>{Button.onclick=()=>onClickRPS(Button.value)});
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
  let endgame=document.getElementById("endGameButton");
    endgame.onclick=()=>endGame();
   
  
    // Add a click listener to the end game button that runs the endGame() function on click
    
  }
  
  // ** endGame function clears all the text on the DOM **
  function endGame() {
//   let endgame=document.getElementById("endGame");
    document.getElementById('result').innerText=" ";
    document.getElementById('hands').innerText=" ";
    document.getElementById('player-score').innerText=" ";
    totalScore["playerScore"]=0;
//   endgame.onclick=()=>clear;
  }
  playGame()