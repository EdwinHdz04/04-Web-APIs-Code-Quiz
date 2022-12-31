
var startbutton = document.querySelector("#startbutton");
var timerEl = document.querySelector("#countdown");
var question = document.querySelector("#question");
var mcA = document.querySelector("#mcA");
var mcB = document.querySelector("#mcB");
var mcC = document.querySelector("#mcC");
var mcD = document.querySelector("#mcD");
var starttext = document.querySelector("#starttext");
var correctanswer = document.querySelector("#correctanswer");

mcA.addEventListener("click",function(event){validation(event)});



startbutton.addEventListener("click",function(event)
{countdown();

var questionlist = questions(1);
mcA.textContent = questionlist[0].answers[0];
mcB.textContent = questionlist[1].answers[1];
mcC.textContent = questionlist[2].answers[2];
mcD.textContent = questionlist[3].answers[3];
question.textContent = questionlist[0].questions;
console.log(questionlist[0].questions);
starttext.textContent = "";
correctanswer.textContent = questionlist[0].correctanswer;




});

function countdown() {
    var timeLeft = 160;
  
    var timeInterval = setInterval(function () {
      timeLeft--;
      timerEl.textContent = timeLeft;
      if(timeLeft === 0){
        timerEl.textContent = "";
        clearInterval(timeInterval)
        displayMessage();
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
    
      
    }
    return questionlist;
 }

 function validation(event) {
    if (event) {
        var useranswer = event.target.textContent;
    if (useranswer == correctanswer.textContent) {
        
    }  
    
    }
    
  
    
 }
