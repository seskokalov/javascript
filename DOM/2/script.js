// show array in html

let myArray = [1, 8, 77, 90, 4, 99, -5, 185];
let htmlArray = document.getElementById('array');
htmlArray.innerText = myArray;

// list the array

let myListArray = document.getElementById('list');

for (let number of myArray){
    myListArray.innerHTML += `<li>${number}</li>`
}

// sum of the array

let total = 0;

for (let i = 0; i < myArray.length; i++) {
    total += myArray[i];
}

let printSum = document.getElementById('sum');
printSum.innerText = `The sum of the array is ${total}`
