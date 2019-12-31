// challenge 1 : your age in days

function ageInDays() {

  const birthYear = prompt('What year were you born My friend?');
  const myageInDays = (2019-birthYear) * 365;
  const h1 = document.createElement('h1');
  const textAnswer = document.createTextNode('Your are  ' + myageInDays + ' days old')
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}


function reset() {
  document.getElementById('ageInDays').remove();
}

//............................................................................

function generateLion() {

  const image = document.createElement('img');
  let div = document.getElementById('flex-lion-gen');
  image.src = "https://i.gifer.com/160g.gif"
  div.appendChild(image);
}

//..............................................................................

// challenge3:  Rock,Paper,Scissors

function rpsGame(yourChoice) {
   console.log(yourChoice);
   let humanChoice, botChoice;
   humanChoice = yourChoice.id;

   botChoice = numberToChoice(randToRpsInt());
   console.log('computer choice:', botChoice);

   results = decideWinner(humanChoice, botChoice);
   console.log(results);

   message = finalMessage(results);
   console.log(message);
   rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {

   return ["rock", "paper", "scissors"] [number];

}

function decideWinner(yourChoice, computerChoice) {
  const rpsDatabase = {
     'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
     'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
     'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
  };

  let yourScore = rpsDatabase[yourChoice][computerChoice];
  let computerScore =  rpsDatabase[computerChoice][yourChoice];

   return [yourScore,  computerScore ];
}

function finalMessage([yourScore, computerScore]) {

   if (yourScore === 0) {
      return {'message': 'You Lost', 'color': 'red'};
   } else if (yourScore === 0.5) {
    return { 'message': 'You Tied', 'color': 'blue'};
   }else{
    return {'message': 'You Won', 'color': 'green'};
   }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {

  const imagesDatabase = {

    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src

  }
  // let's remove elements when you click
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  let humanDiv = document.createElement('div');
  let botDiv = document.createElement('div');
  let messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1); '>"
  messageDiv.innerHTML =  "<h1 style='color: " + finalMessage['color'] + ";font-size: 60px; padding: 30px;'>" + finalMessage ['message'] + "</h1>"
  botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1); '>"



  document.getElementById('felx-box-rps-div').appendChild(humanDiv);
  document.getElementById('felx-box-rps-div').appendChild(messageDiv);
  document.getElementById('felx-box-rps-div').appendChild(botDiv);

}

//-- ............................................................................................................................... -->
//Challenge 4 :How many fingers am I holding up?


document.getElementById('myButton').onclick=function() {
  let x = Math.random();
  x= x*6;
  x = Math.floor(x);

  if (x== document.getElementById('answer').value) {
    alert('answer is correct');
  } else {
      alert('answer is wrong! my number was '+x);
  }

}

