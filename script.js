// challenge 1 : your age in days

function ageInDays() {

  const birthYear = prompt('What year were you born My friend?');
  const myageInDays = (2019-birthYear) * 365;
  const h1 = document.createElement('h1');
  const textAnswer = document.createTextNode('Kevin is  ' + myageInDays + ' days old')
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
