let myTitle = document.getElementById('myTitle');
myTitle.innerHTML = 'Changed Title';

let myPar01 = document.getElementById('first').lastElementChild;
myPar01.innerHTML = 'Changed Paragraph';

let myPar02 = document.getElementsByTagName('div')[1].firstElementChild;
myPar02.innerHTML = 'Changed Paragraph';

let nextSibling = myPar02.nextElementSibling;
nextSibling.innerHTML = 'Changed Text';

let myPar03 = document.getElementsByTagName('div')[2];
let firstHeader = myPar03.firstElementChild;
firstHeader.innerText = 'Changed Header';

let nextHeader = firstHeader.nextElementSibling;
nextHeader.innerText = 'Antoher Changed Header';