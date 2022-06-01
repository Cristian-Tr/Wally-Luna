document.addEventListener('DOMContentLoaded', function () {


  var buttonA = document.querySelector('#button1');
  var plants = ['🍒', '🌲', '🌳', '🌴', '🌵', '🌶️', '🌷', '🌸', '🌹', '🌺', '🌻', '🌼', '🌽', '🍀', '🍄', '🍅', '🍆', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍐', '🍑', '🍓', '🥑', '🥕', '🥝', '🥥', '🥭', '🌾', '🌿', '🍇', '🌰', '🍃'];

  buttonA.addEventListener('click', function () {
    var randPlant = Math.floor(Math.random() * 37);
    document.getElementById("plant").innerHTML = plants[randPlant];
  });

  var buttonB = document.querySelector('#button2');
  var animals = ['🐠', '🐢', '🐧', '🐪', '🐫', '🐬', '🐛', '🐙', '🐘', '🐖', '🐕', '🐐', '🐏', '🐎', '🐍', '🐌', '🐋', '🐊', '🐈', '🐇', '🐆', '🐅', '🐄', '🐃', '🐂', '🐁', '🐒', '🐿️', '🦔', '🦕', '🦘', '🦛', '🦧', '🦦', '🦨', '🦮', '🦀', '🦐', '🦂', '🦏', '🦢', '🦞', '🦎', '🦍', '🦈', '🐜', '🐤', '🐓', '🐦', '🐞', '🐌', '🦚', '🦜', '🦉', '🦆', '🦅', '🦃', '🦒', '🦓', '🦕', '🦗', '🐝'];

  buttonB.addEventListener('click', function () {
    var randAnimal = Math.floor(Math.random() * 62);
    document.getElementById("animal").innerHTML = animals[randAnimal];
  });


  var buttonC = document.querySelector('#button3');
  var shapes = ['✖️', '➔', '⚪', '▰', '🔺', '◖', '⬜️', '➖', '➕', '➗', '❤️', '❄', '⭐️', '🔶', '	✔️', '⛔️'];

  buttonC.addEventListener('click', function () {
    var randShape = Math.floor(Math.random() * 16);
    document.getElementById("shape").innerHTML = shapes[randShape];
  });


  var buttonD = document.querySelector('#button4');
  var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'];

  buttonD.addEventListener('click', function () {
    var randLetter = Math.floor(Math.random() * 25);
    document.getElementById("letter").innerHTML = letters[randLetter];
  });

  var buttonE = document.querySelector('#button5');
  var figures = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  buttonE.addEventListener('click', function () {
    var randFigure = Math.floor(Math.random() * 10);
    document.getElementById("figure").innerHTML = figures[randFigure];
  });

  var buttonF = document.querySelector('#button6');
  var colors = ['white', 'blue', 'pink', 'red', 'green', 'maroon', 'yellow', 'black', 'purple', 'grey', 'violet', 'cyan', 'lime', 'magenta', 'orange'];

  buttonF.addEventListener('click', function () {
    var randColor = Math.floor(Math.random() * 12);
    document.getElementById("button6").style.backgroundColor = colors[randColor];
  });



  var buttonG = document.querySelector('#button7');
  var sports = ['🎾', '⛷️', '🏀', '🏂', '🏃', '🏄', '🏇', '🏈', '🏉', '🏊', '🏋️', '🏌️', '🏍️', '🏎️', '🏐', '🏒', '🏓', '🏔️', '🚴', '🚵', '🚣', '🤽', '🤾', '🤿', '⛳️', '⛸️', '⛺️', '⛹️', '🥌'];

  buttonG.addEventListener('click', function () {
    var randSport = Math.floor(Math.random() * 28);
    document.getElementById("sport").innerHTML = sports[randSport];
  });

  var buttonH = document.querySelector('#button8');
  var numbers = ['10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '30', '31', '32', '33', '35', '40', '44', '50', '51', '55', '60', '62', '70', '75', '77', '80', '88', '89', '90', '94', '99', '100'];

  buttonH.addEventListener('click', function () {
    var randNumber = Math.floor(Math.random() * 35);
    document.getElementById("number").innerHTML = numbers[randNumber];
  });


  var buttonI = document.querySelector('#button9');
  var vehicles = ['🚑', '🚒', '🚓', '🚐', '🚕', '🚗', '🚙', '🚚', '🚜', '🚝', '🚟', '🚎', '🚌', '🚋', '🚄', '🚂', '🚁', '🚀', '🚢', '🚤', '🛵', '🛴', '🛳️', '🛺', '🛰️', '🛷', '🛸', '🛹', '🛶', '🚲', '🛩️', '🛬', '🪂'];

  buttonI.addEventListener('click', function () {
    var randVehicle = Math.floor(Math.random() * 32);
    document.getElementById("vehicle").innerHTML = vehicles[randVehicle];
  });


//Greetings
var date = new Date();
var hour = date.getHours();
var initialGreeting;
var finalGreeting;

if (hour < 5) {
  initialGreeting = "Salut!";
  finalGreeting = "Good night!";
}
if (hour < 10) {
  initialGreeting = "Bună dimineața!";
  finalGreeting = "Have a nice morning!";
}
else if (hour < 18) {
  initialGreeting = 'Bună ziua!';
  finalGreeting = "Have a nice afternoon!";
}
else if (hour < 24) {
  initialGreeting = "Bună seara!";
  finalGreeting = "Have a nice evening!";
}

document.querySelector("#initial-greeting").innerHTML = "<br>" + initialGreeting + "<br>";
document.querySelector("#final-greeting").innerHTML = "Bye!<br>" + finalGreeting + "<br>";

}); 