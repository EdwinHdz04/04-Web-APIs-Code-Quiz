

var questionwindow = document.querySelector("#questionwindow");
var startbutton = document.querySelector("#startbutton");
var timerEl = document.querySelector("#countdown");
var question = document.querySelector("#question");
var mcA = document.querySelector("#mcA");
var mcB = document.querySelector("#mcB");
var mcC = document.querySelector("#mcC");
var mcD = document.querySelector("#mcD");
var starttext = document.querySelector("#starttext");
var correctanswer = document.querySelector("#correctanswer");
var validationtext = document.querySelector("#validationtext");
var questionnumber = 1;
var timeleft = 70;
var scorebutton = document.querySelector("#scorebutton");
var scores = document.querySelector("#scores");
var initials = document.querySelector("#initials");
var initialsubmit = document.querySelector("#initialsubmit");
var initialfield = document.querySelector("#initialfield");
var leaderboard = document.getElementById("leaderboard");
var userscore = document.querySelector("#userscore");
var GameOver = document.querySelector("#GameOver");
var timeInterval = null
var resetbutton = document.querySelector("#resetbutton");
var getstarted = document.querySelector("#getstarted");

score = 0;
localStorage.setItem("score",score);

scorebutton.addEventListener("click",function(event){
    if (scores.style.display == "block"){
        questionwindow.style.display="block";
        scores.style.display= "none";
        
    }else{
    questionwindow.style.display="none";
    scores.style.display= "block";
    }

});


mcA.addEventListener("click",function(event){validation(event)});
mcB.addEventListener("click",function(event){validation(event)});
mcC.addEventListener("click",function(event){validation(event)});
mcD.addEventListener("click",function(event){validation(event)});

//I click the start button
startbutton.addEventListener("click",function(event)
{countdown();
populatequestiondata(questionnumber);   
startbutton.style.display = "none"

});
resetbutton.addEventListener("click",function(event){
    questionnumber = 1;
    timeleft = 70;
    userscore = 0;
    populatequestiondata(questionnumber); 
    countdown()
    questionwindow.style.display="block";
    starttext.style.display= "block";
    GameOver.style.display="none";
    resetbutton.style.display="none";
});

function populatequestiondata (questionnumber) {
 
    var questionlist = questions(questionnumber);
    if (questionlist[0]) {
        mcA.textContent = questionlist[0].answers[0];
        mcB.textContent = questionlist[0].answers[1];
        mcC.textContent = questionlist[0].answers[2];
        mcD.textContent = questionlist[0].answers[3];
        question.textContent = questionlist[0].questions;
        starttext.style.display= "none";
        getstarted.style.display= "none";
        correctanswer.textContent = questionlist[0].correctanswer;
    } else {
        questionwindow.style.display="none";
        var score = localStorage.getItem("score"); 
        userscore.textContent= score;
        GameOver.style.display= "block";
        initials.style.display= "block";

    }
    
} 


//timer starts and I am presented with a question
function countdown() {
    if(typeof timeInterval!=="undefined"){
        clearInterval(timeInterval);
    }

    
    timeInterval = setInterval(function () {
      timeleft--;
      timerEl.textContent = timeleft;
      if(timeleft <= 0){
        timerEl.textContent = "";
        clearInterval(timeInterval);
        questionwindow.style.display="none";
        initials.style.display= "block";
        GameOver.style.display= "block";
      }
     
      
    }, 1000);
  }
 function questions(params) {
    switch (params) {
        case 1 : 
        var questionlist=[
        {
        questions: "how are you",
        answers: [1,2,3,4],
        correctanswer: 1 }];

            break;
        case 2 :
        var questionlist=[
        {
        questions: "question 2",
        answers: [1,2,3,4],
        correctanswer: 2 }];      
    
        break;
        case 3 :
        var questionlist=[
        {
        questions: "question 3",
        answers: [1,2,3,4],
        correctanswer: 2 }];      
    
        break;
        case 4 :
        var questionlist=[
        {
        questions: "question 4",
        answers: [1,2,3,4],
        correctanswer: 2 }];      
    
        break;
        case 5 :
        var questionlist=[
        {
        questions: "question 5",
        answers: [1,2,3,4],
        correctanswer: 2 }];      
    
        break;
        case 6 :
        var questionlist=[
        {
        questions: "question 6",
        answers: [1,2,3,4],
        correctanswer: 2 }];      
    
        break;
        case 7 :
        var questionlist=[
        {
        questions: "question 7",
        answers: [1,2,3,4],
        correctanswer: 2 }];      
    
        break;
        case 8 :
        var questionlist=[
        {
        questions: "question 8",
        answers: [1,2,3,4],
        correctanswer: 2 }];      
    
        break;
        case 9 :
        var questionlist=[
        {
        questions: "question 9",
        answers: [1,2,3,4],
        correctanswer: 2 }];      
    
        break;
        case 10 :
        var questionlist=[
        {
        questions: "question 10",
        answers: [1,2,3,4],
        correctanswer: 2 }];      
    
        break;
        default: 
        var questionlist = [false];
    
    }
    return questionlist;
 }
 //I answer a question
 //I am presented with another question
 //I answer a question incorrectly
 
 function validation(event) {
    if (event) {
        var useranswer = event.target.textContent;
    if (useranswer == correctanswer.textContent) {
        var score = localStorage.getItem("score");
        score++;
        localStorage.setItem('score',score);
        questionnumber++;
        validationtext.textContent = "";
        populatequestiondata(questionnumber);
    
    }else {
        validationtext.textContent = "wrong";
        timeleft = timerEl.textContent - 10
        clearInterval(timeInterval);
        countdown();
        questionnumber++;
        populatequestiondata(questionnumber);
    }  


    }
    
 }
//  I can save my initials and my score
initialsubmit.addEventListener("click",function(event)
    
    { 
        event.preventDefault();
        console.log(initialfield.value + questionnumber);
        var score = localStorage.getItem("score")
        $("#leaderboard").append($("<tr><td>" + initialfield.value + "</td><td>"+ score + "</td></tr>")); 
        var userdata={"initials":initialfield.value,"score":score}
        localStorage.setItem("userdata",JSON.stringify(userdata));
        resetbutton.style.display ="block"
        initials.style.display= "none"
       });