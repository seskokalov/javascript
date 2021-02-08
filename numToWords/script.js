let inputFromUser = document.getElementById('userInput');
let outputToUser = document.getElementById('toWords');
let convertBtn = document.getElementById('convert');

let arrayOnes = [' ', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
let arrayTens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
let arrayDecades = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

let inputNumber = '';
let numToString = '';
let resultText = '';

convertBtn.addEventListener('click', function(){
    inputNumber = parseInt(inputFromUser.value);
    numToString = inputNumber.toString();
    inputFromUser.value = '';

    console.log(inputNumber);
    console.log(numToString);

    // = 1 length 

    if (numToString.length == 1){
        if(numToString !=0){
        resultText = arrayOnes[inputNumber];
        } else {
        resultText = 'Zero'
        }
    }

    // = 2 length

    if (numToString.length == 2){
        if (inputNumber < 20){
        resultText = arrayTens[inputNumber - 10];
        } else {
            resultText = arrayDecades[numToString.charAt(0)] + arrayOnes[numToString.charAt(1)];
        }
    }

    // = 3 length

    if (numToString.length == 3){
        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0){
            resultText = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
        }
        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0){
            resultText = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 2)] != 1){
            resultText = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)]
        }
    }

    // = 4 length

    if (numToString.length == 4){
        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0){
            resultText = arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
        }
        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0){
            resultText = arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 2)] != 1){
            if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] == 0 && [numToString.charAt(numToString.length - 1)] == 0){
                resultText = arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
            } else {
            resultText = arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)]
            }
        }
    }

    // 5 = length

    // let arrayOnes = [' ', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    // let arrayTens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    // let arrayDecades = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (numToString.length == 5){
        if([numToString.charAt(numToString.length - 5)] == 1){
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0){
                resultText = arrayTens[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
            }
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0){
                resultText = arrayTens[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
            }
            if ([numToString.charAt(numToString.length - 2)] != 1){
                if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] == 0 && [numToString.charAt(numToString.length - 1)] == 0){
                    resultText = arrayTens[numToString.charAt(numToString.length - 4)] + 'Thousand'
                } else {
                resultText = arrayTens[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)]
                }
            }
        }
        if([numToString.charAt(numToString.length - 5)] > 1){
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0){
                resultText = arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
            }
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0){
                resultText = arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
            }
            if ([numToString.charAt(numToString.length - 2)] != 1){
                if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] == 0 && [numToString.charAt(numToString.length - 1)] == 0){
                    resultText = arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
                } else {
                resultText = arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)]
                }
            }
        }
    }

    // 6 = length

    // let arrayOnes = [' ', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    // let arrayTens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    // let arrayDecades = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if(numToString.length == 6){
        if ([numToString.charAt(numToString.length - 5)] == 1 && [numToString.charAt(numToString.length - 4)] == 0){
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0){
                resultText = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
            }
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0){
                resultText = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
            }
            if ([numToString.charAt(numToString.length - 2)] != 1){
                resultText = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)]
            }
        }
        if ([numToString.charAt(numToString.length - 5)] == 1 && [numToString.charAt(numToString.length - 4)] != 0){
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0){
                resultText = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
            }
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0){
                resultText = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
            }
            if ([numToString.charAt(numToString.length - 2)] != 1){
                resultText = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)]
            }
        }
        if ([numToString.charAt(numToString.length - 5)] != 1){
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0){
                resultText = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
            }
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0){
                resultText = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
            }
            if ([numToString.charAt(numToString.length - 2)] != 1){
                resultText = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand' + arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)]
            }
        }
    }

    alert(resultText);
});

