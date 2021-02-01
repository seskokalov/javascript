// JS function that will insert dashes after every even number


let input = document.getElementById('input01');
let btn = document.getElementById('submit');
let dashedNum = document.getElementById('result')

btn.addEventListener('click', function(){

    let string = input.value.toString();
    let result = [string[0]];

    for (var i = 1; i < string.length; i++) {
        if ((string[i - 1] % 2 === 0)) {
            result.push('-', string[i]);
        }
        else {
            result.push(string[i]);
        }
    }
    (result.join(''));

    dashedNum.innerText = `Dashed number is: ${result}`;
});


// JS function that will divide only numbers by 7 and 3 in an array from 1 to 100
let myArray = [];
let htmlArray = document.getElementById('myarray');


for (let index = 0; index <= 100; index++) {
    if (index % 7 == 0 && index % 3 == 0){
    myArray.push(index);
}};

console.log(myArray);

htmlArray.innerText = `This are the numbers divisible by 7 and 3 in an array from 1 to 100: ${myArray}`;

// ATM Machine


let withdrawBtn = document.getElementById('withdraw');
let depositBtn = document.getElementById('deposit');
let balanceBtn = document.getElementById('balance');
let exitBtn = document.getElementById('exit');
let atmBalanceDisplay = document.getElementById('atmbalancedisplay');
atmBalance = 10000;
let byeAtm = document.getElementById('byeatm');

balanceBtn.addEventListener('click', function(){
    atmBalanceDisplay.innerText = `Your balance is: ${atmBalance}`;
})

withdrawBtn.addEventListener('click', function(){
    let withdraw = parseInt(prompt(`Enter the amount you want to withdraw:`)); 
    atmBalance = atmBalance - withdraw
    atmBalanceDisplay.innerText = `Your balance is: ${atmBalance}`;
})

depositBtn.addEventListener('click', function(){
    let deposit = parseInt(prompt(`Enter the amount you want to deposit:`)); 
    atmBalance = atmBalance + deposit;
    atmBalanceDisplay.innerText = `Your balance is: ${atmBalance}`;
})

exitBtn.addEventListener('click', function(){
    // alert(`Thank you for using our services`);
    byeAtm.innerHTML = `Thank you for using our services`
})