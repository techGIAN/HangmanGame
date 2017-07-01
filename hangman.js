var wordList = ["vacuous", "unpredictable", "surface", "centroid", "habitual", "empathetic", "hoverboard", "derivative", "mythology", "deliberation"];
var correctAnswer;
var guessesLeft = 6;
var wordArray1 = [];
var wordArray2 = [];
var guessList = [];
var guessMe;

function startup() {
    document.getElementById("guessList").innerHTML = "";
    document.getElementById("typeTextHere").value = "";
    document.getElementById("guessButton").disabled = false;
    document.getElementById("message").innerHTML = "";
    document.getElementById("tries").innerHTML = "6";
    document.getElementById("tries").style.color = "green";
    document.getElementById("hang").src = "hangman6.png";
    wordArray1 = [];
    wordArray2 = [];
    guessList = [];
    guessesLeft = 6;
    var word = document.getElementById("word");
    var random = Math.floor(Math.random()*wordList.length);
    correctAnswer = wordList[random];
    guessMe = "";

    for (var i = 0; i < correctAnswer.length; i++) {
      wordArray1.push(correctAnswer.charAt(i));
      wordArray2.push("_");
      guessMe = guessMe + "_" + " ";
    }

    word.innerHTML = guessMe;
      //remove this later
    document.getElementById("cA").innerHTML = correctAnswer;
}

function guess() {
  var letter = document.getElementById("typeTextHere").value;
  var doesItInclude = guessList.includes(letter);
  if (doesItInclude) {
    document.getElementById("message").innerHTML = "You have already picked that letter.";
    return;
  } else {
    document.getElementById("message").innerHTML = "";
    guessList.push(letter);
  }
  var doesItInclude1 = wordArray1.includes(letter);
  if (doesItInclude1) {
    for (var i = 0; i < wordArray1.length; i++) {
      if (letter == wordArray1[i]) wordArray2[i] = letter;
    }
    guessMe = "";
    for (var i = 0; i < wordArray2.length; i++) {
      guessMe = guessMe + wordArray2[i] + " ";
    }
    document.getElementById("word").innerHTML = guessMe;
  } else {
    guessesLeft = guessesLeft - 1;
    var image = document.getElementById("hang");
    image.src = "hangman" + guessesLeft + ".png";
    var z = document.getElementById("tries");
    z.innerHTML = parseInt(z.innerHTML)-1;
    if (z.innerHTML == 3) {
      document.getElementById("tries").style.color = "yellow";
    } else if (z.innerHTML == 2) {
      document.getElementById("tries").style.color = "orange";
    } else if (z.innerHTML == 1) {
      document.getElementById("tries").style.color = "red";
    } else if (z.innerHTML == 0) {
      document.getElementById("message").innerHTML = "You lose! The correct answer is " + correctAnswer;
      document.getElementById("guessButton").disabled = true;
      return;
    }
  }
  var x = "";
  for (var i = 0; i < guessList.length; i++) {
    x = x + guessList[i] + " ";
  }
  document.getElementById("guessList").innerHTML = x;
  var doesItInclude2 = wordArray2.includes("_");
  if (!doesItInclude2) {
    document.getElementById("guessButton").disabled = true;
    document.getElementById("message").innerHTML = "You won the game!";
    return;
  }
}
