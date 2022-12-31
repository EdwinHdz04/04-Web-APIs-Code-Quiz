
var startbutton = document.querySelector("#startbutton");
var timerEl = document.getElementById("countdown");
var question = document.querySelector("#question");
var mcA = document.querySelector("#mcA");
var mcB = document.querySelector("#mcB");
var mcC = document.querySelector("#mcC");
var mcD = document.querySelector("#mcD");
var starttext = document.querySelector("#starttext");

startbutton.addEventListener("click",function(event)
{countdown();

var questionlist = questions(1);
mcA.textContent = questionlist[0].answers;
question.textContent = questionlist[0].questions;
console.log(questionlist[0].questions);
starttext.textContent = "";





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
    
        default:
            break;
    }
    return questionlist;

 }
