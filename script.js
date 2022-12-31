
var startbutton = document.querySelector("#startbutton");
var timerEl = document.getElementById('countdown');
startbutton.addEventListener("click",function(){countdown();});

function countdown() {
    var timeLeft = 160;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
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

