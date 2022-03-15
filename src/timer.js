var COUNT_START = 10*10*60; // tenths * seconds * hours
var count = COUNT_START;
var playing = false;

playpause = document.getElementById('playpause');

playpause.onclick = function() {
  if (playing) {
    playing = false; 
    playpause.innerHTML = "Play";
  } else if (!playing) {
    playing = true; 
    playpause.innerHTML = "Resign";
  }
  
}

function countdown(){
    displayTime(); 

    if (count == 0) {
      playing = false;
    } else if (playing) {
      setTimeout(countdown, 100);
      count--;
    } else {
      setTimeout(countdown, 100); 
    }
}
countdown();

function displayTime() {
  
  const tenths = count;  
  let sec = Math.floor(tenths / 10);
  let hours = Math.floor(sec / 3600);
  sec -= hours * (3600);
  var mins = Math.floor(sec / 60);
  sec -= mins * (60);

    document.querySelector('#time_left_white').innerHTML = hours + ':' +LeadingZero(mins)+':'+LeadingZero(sec);
    document.querySelector('#time_left_black').innerHTML = hours+':'+LeadingZero(mins)+':'+LeadingZero(sec);

}

function LeadingZero(Time) {
  return (Time < 10) ? "0" + Time : + Time;
}