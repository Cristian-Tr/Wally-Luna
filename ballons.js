document.addEventListener('DOMContentLoaded', function () {

  

  //Balloons game
  const balloons = document.querySelectorAll('.balloon');
  const scoreBoard = document.querySelector('.score');
  const newGame = document.querySelector('#newGame');
  const blackBalloon = document.querySelectorAll('.blackBalloon');
  let lastBalloon;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomBalloon(balloons) {
    const idx = Math.floor(Math.random() * balloons.length);
    const balloon = balloons[idx];
    if (balloon === lastBalloon) {
      return randomBalloon(balloons);
    }
    lastBalloon = balloon;
    return balloon;
  }

  function flyingBalloon() {
    const time = randomTime(500, 1000);
    const balloon = randomBalloon(balloons);
    balloon.classList.add('up');
    setTimeout(() => {
      balloon.classList.remove('up');
      if (!timeUp) flyingBalloon();
    }, time);
  }

  function start() {
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    flyingBalloon();
    newGame.style.display = 'none';
    setTimeout(() => {
      timeUp = true;
      newGame.style.display = 'block';

    }, 18000)
  }

  document.getElementById("newGame").addEventListener("click", start);

  function clickedBalloon(e) {
    if (!e.isTrusted) return;
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }

  function hideBalloon(e) {
    if (!e.isTrusted) return;
    this.style.display = 'none';
    setTimeout(() => {
      this.style.display = 'block';
    }, 1000)

  }

  blackBalloon.forEach(mole => mole.addEventListener('click', clickedBalloon));
  blackBalloon.forEach(mole => mole.addEventListener('click', hideBalloon));



});