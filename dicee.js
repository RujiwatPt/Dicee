function roll() {
  var dice = Math.floor((Math.random() * 6) + 1);
  return dice;
}

function rollDice(m) {
  diceFace = "images/dice" + m + ".png";
  return diceFace;
}

function diceGame() {
  var dice1 = roll();
  var dice2 = roll();

  if(dice1 > dice2){
    document.querySelector("h1").innerHTML="Player1 Win!!!";
  }else if(dice1 < dice2){
    document.querySelector("h1").innerHTML="Player2 Win!!!";
  }else if(dice1 == dice2){
    document.querySelector("h1").innerHTML="It's a Draw!!!";
  }

  var diceFace1 = rollDice(dice1);
  var diceFace2 = rollDice(dice2);
  document.querySelector(".img1").src = diceFace1;
  document.querySelector(".img2").src = diceFace2;

}


if (window.performance) {
  console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  console.info("This page is reloaded");
  diceGame();
} else {
  console.info("This page is not reloaded");
}
