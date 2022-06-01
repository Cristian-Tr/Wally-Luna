document.addEventListener('DOMContentLoaded', function () {

  

  //Relaxation area
  //Click on all the numbers game
  //Timer initialization
  var timer = 0
  document.getElementById('timer').innerHTML = '0' + 0 + ':' + 0 + 0
  //Count numbers from 1 to 50 in ascending order
  var now = 1
  document.getElementById('next').innerHTML = now

  document.getElementById(String(now)).onclick = function () { changeValue(now + 1); document.getElementById('next').innerHTML = now }

  let changeValue = newValue => {
    now = newValue;

    if (now < 51) {
      document.getElementById(String(now)).onclick = function () { changeValue(now + 1); document.getElementById('next').innerHTML = now }
    }

    if (now == 2)
      timer = new Date().getTime()

    if (now == 51) {
      timer = 0
      now = ' '
      document.getElementById('next').innerHTML = now
      document.getElementById(String(now)).onclick = function () { changeValue(now + 1); document.getElementById('next').innerHTML = now }
      document.getElementById(String(50)).onclick = null
    }

    if (now > 1)
      document.getElementById(String(now - 1)).onclick = null
  }

  //Timer settings
  var interval = setInterval(function () {
    if (timer == 0) return;
    var temp = new Date(new Date().getTime() - timer);

    minutes = temp.getMinutes(),

      seconds = temp.getSeconds();

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    document.getElementById('timer').innerHTML = minutes + ':' +
      seconds;
  }, 1000);

  //Reset game button
  function resetGame() {
    now = 1
    document.getElementById('next').innerHTML = now
    document.getElementById(String(now)).onclick = function () { changeValue(now + 1); document.getElementById('next').innerHTML = now }

    timer = 0
    document.getElementById('timer').innerHTML = '0' + 0 + ':' + 0 + 0

  }
  document.getElementById("resetGame").addEventListener("click", resetGame);


 


});