let inputFromUser = document.getElementById('userInput');
let outputToUser = document.getElementById('toWords');
let convertBtn = document.getElementById('convert');

let arrayOnes = [' ', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
let arrayTens = [' ', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
let arrayDecades = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

let inputNumber = '';
let numToString = '';
let resultText = '';
let resultHundred = '';
let resultThousand = '';
let resultMillion = '';
let resultBillion = '';
let resultTrillion = '';

convertBtn.addEventListener('click', function () {
    inputNumber = parseInt(inputFromUser.value);
    numToString = inputNumber.toString();
    inputFromUser.value = '';

    console.log(inputNumber);
    console.log(numToString);

    if (inputNumber < 0){
        alert(`Enter a valid number`)
    }

    if (numToString.length > 13){
        alert(`Sorry, works only up to trillion`)
    }

    if (numToString.length > 12) { 
        if (numToString.length == 13){
        resultTrillion = arrayOnes[numToString.charAt(numToString.length - 13)] + 'Trillion'
    
        // Billions
        if ([numToString.charAt(numToString.length - 11)] == 0) {
            resultBillion = arrayOnes[numToString.charAt(numToString.length - 12)] + 'Hundred' + arrayOnes[numToString.charAt(numToString.length - 10)] + 'Billion'
        }

        if ([numToString.charAt(numToString.length - 11)] == 1) {
            resultBillion = arrayOnes[numToString.charAt(numToString.length - 12)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 10)] + 'Billion'
        }

        if ([numToString.charAt(numToString.length - 11)] > 1) {
            resultBillion = arrayOnes[numToString.charAt(numToString.length - 12)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 11)] + arrayOnes[numToString.charAt(numToString.length - 10)] + 'Billion'
        }

         // Millions

         if ([numToString.charAt(numToString.length - 8)] == 0) {
            resultMillion = arrayOnes[numToString.charAt(numToString.length - 9)] + 'Hundred' + arrayOnes[numToString.charAt(numToString.length - 7)] + 'Million'
        }

        if ([numToString.charAt(numToString.length - 8)] == 1) {
            resultMillion = arrayOnes[numToString.charAt(numToString.length - 9)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 8)] + 'Million'
        }

        if ([numToString.charAt(numToString.length - 8)] > 1) {
            resultMillion = arrayOnes[numToString.charAt(numToString.length - 9)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 8)] + arrayOnes[numToString.charAt(numToString.length - 7)] + 'Million'
        }

        // Thousands 

        if ([numToString.charAt(numToString.length - 5)] == 0 && [numToString.charAt(numToString.length - 4)] > 1) {
            resultThousand = arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)] + 'Thousand';
        }
        if ([numToString.charAt(numToString.length - 5)] == 0 && [numToString.charAt(numToString.length - 4)] == 1) {
            resultThousand = arrayTens[numToString.charAt(numToString.length - 1)] + 'Thousand';
        }
        if ([numToString.charAt(numToString.length - 6)] == 0 && [numToString.charAt(numToString.length - 5)] == 0 && [numToString.charAt(numToString.length - 4)] == 0) {
            resultThousand = ' ';
        }


        if ([numToString.charAt(numToString.length - 5)] == 0) {
            resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
        }

        if ([numToString.charAt(numToString.length - 5)] == 1) {
            resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 4)] + 'Thousand'
        }

        if ([numToString.charAt(numToString.length - 5)] > 1) {
            resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
        }


        // Hundreds

        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
        }
        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 2)] != 1) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)]
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] > 1) {
            resultHundred = arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] == 1) {
            resultHundred = arrayTens[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] == 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 1)];
        }
        
    
    }
    }

    if (numToString.length > 9) {
        if (numToString.length == 12) {
            if ([numToString.charAt(numToString.length - 11)] == 0) {
                resultBillion = arrayOnes[numToString.charAt(numToString.length - 12)] + 'Hundred' + arrayOnes[numToString.charAt(numToString.length - 10)] + 'Billion'
            }

            if ([numToString.charAt(numToString.length - 11)] == 1) {
                resultBillion = arrayOnes[numToString.charAt(numToString.length - 12)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 10)] + 'Billion'
            }

            if ([numToString.charAt(numToString.length - 11)] > 1) {
                resultBillion = arrayOnes[numToString.charAt(numToString.length - 12)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 11)] + arrayOnes[numToString.charAt(numToString.length - 10)] + 'Billion'
            }
        }

        if (numToString.length == 11) {
            if (numToString.charAt(numToString.length - 11) == 1) {
                resultBillion = arrayTens[numToString.charAt(numToString.length - 10)] + 'Billion'
            }
            if (numToString.charAt(numToString.length - 11) > 1) {
                resultBillion = arrayDecades[numToString.charAt(numToString.length - 10)] + arrayOnes[numToString.charAt(numToString.length - 10)] + 'Billion'
            }
        }

        if (numToString.length == 10) {
            resultBillion = arrayOnes[numToString.charAt(numToString.length - 10)] + 'Billion'
        }

        // Millions

        if ([numToString.charAt(numToString.length - 8)] == 0) {
            resultMillion = arrayOnes[numToString.charAt(numToString.length - 9)] + 'Hundred' + arrayOnes[numToString.charAt(numToString.length - 7)] + 'Million'
        }

        if ([numToString.charAt(numToString.length - 8)] == 1) {
            resultMillion = arrayOnes[numToString.charAt(numToString.length - 9)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 8)] + 'Million'
        }

        if ([numToString.charAt(numToString.length - 8)] > 1) {
            resultMillion = arrayOnes[numToString.charAt(numToString.length - 9)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 8)] + arrayOnes[numToString.charAt(numToString.length - 7)] + 'Million'
        }

        // Thousands 

        if ([numToString.charAt(numToString.length - 5)] == 0 && [numToString.charAt(numToString.length - 4)] > 1) {
            resultThousand = arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)] + 'Thousand';
        }
        if ([numToString.charAt(numToString.length - 5)] == 0 && [numToString.charAt(numToString.length - 4)] == 1) {
            resultThousand = arrayTens[numToString.charAt(numToString.length - 1)] + 'Thousand';
        }
        if ([numToString.charAt(numToString.length - 6)] == 0 && [numToString.charAt(numToString.length - 5)] == 0 && [numToString.charAt(numToString.length - 4)] == 0) {
            resultThousand = ' ';
        }


        if ([numToString.charAt(numToString.length - 5)] == 0) {
            resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
        }

        if ([numToString.charAt(numToString.length - 5)] == 1) {
            resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 4)] + 'Thousand'
        }

        if ([numToString.charAt(numToString.length - 5)] > 1) {
            resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
        }


        // Hundreds

        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
        }
        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 2)] != 1) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)]
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] > 1) {
            resultHundred = arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] == 1) {
            resultHundred = arrayTens[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] == 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 1)];
        }
    }

    // let arrayOnes = [' ', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    // let arrayTens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    // let arrayDecades = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (numToString.length > 6) {
        // Millions

        if (numToString.length == 9) {
            if ([numToString.charAt(numToString.length - 8)] == 0) {
                resultMillion = arrayOnes[numToString.charAt(numToString.length - 9)] + 'Hundred' + arrayOnes[numToString.charAt(numToString.length - 7)] + 'Million'
            }

            if ([numToString.charAt(numToString.length - 8)] == 1) {
                resultMillion = arrayOnes[numToString.charAt(numToString.length - 9)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 8)] + 'Million'
            }

            if ([numToString.charAt(numToString.length - 8)] > 1) {
                resultMillion = arrayOnes[numToString.charAt(numToString.length - 9)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 8)] + arrayOnes[numToString.charAt(numToString.length - 7)] + 'Million'
            }
        }
        if (numToString.length == 8) {
            if (numToString.charAt(numToString.length - 8) == 1) {
                resultMillion = arrayTens[numToString.charAt(numToString.length - 7)] + 'Million'
            }
            if (numToString.charAt(numToString.length - 8) > 1) {
                resultMillion = arrayDecades[numToString.charAt(numToString.length - 8)] + arrayOnes[numToString.charAt(numToString.length - 7)] + 'Million'
            }
        }


        if (numToString.length == 7) {
            resultMillion = arrayOnes[numToString.charAt(numToString.length - 7)] + 'Million'
        }

        // Thousands 

        if ([numToString.charAt(numToString.length - 5)] == 0 && [numToString.charAt(numToString.length - 4)] > 1) {
            resultThousand = arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)] + 'Thousand';
        }
        if ([numToString.charAt(numToString.length - 5)] == 0 && [numToString.charAt(numToString.length - 4)] == 1) {
            resultThousand = arrayTens[numToString.charAt(numToString.length - 1)] + 'Thousand';
        }
        if ([numToString.charAt(numToString.length - 6)] == 0 && [numToString.charAt(numToString.length - 5)] == 0 && [numToString.charAt(numToString.length - 4)] == 0) {
            resultThousand = ' ';
        }


        if ([numToString.charAt(numToString.length - 5)] == 0) {
            resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
        }

        if ([numToString.charAt(numToString.length - 5)] == 1) {
            resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 4)] + 'Thousand'
        }

        if ([numToString.charAt(numToString.length - 5)] > 1) {
            resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
        }


        // Hundreds

        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
        }
        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 2)] != 1) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)]
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] > 1) {
            resultHundred = arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] == 1) {
            resultHundred = arrayTens[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] == 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 1)];
        }
    }

    // let arrayOnes = [' ', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    // let arrayTens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    // let arrayDecades = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (numToString.length > 3) {
        if (numToString.length == 6) {
            if ([numToString.charAt(numToString.length - 5)] == 0) {
                resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
            }

            if ([numToString.charAt(numToString.length - 5)] == 1) {
                resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 4)] + 'Thousand'
            }

            if ([numToString.charAt(numToString.length - 5)] > 1) {
                resultThousand = arrayOnes[numToString.charAt(numToString.length - 6)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
            }
        }

        if (numToString.length == 5) {
            if (numToString.charAt(numToString.length - 5) == 1) {
                resultThousand = arrayTens[numToString.charAt(numToString.length - 4)] + 'Thousand'
            }
            if (numToString.charAt(numToString.length - 5) > 1) {
                resultThousand = arrayDecades[numToString.charAt(numToString.length - 5)] + arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
            }

        }
        if (numToString.length == 4) {
            resultThousand = arrayOnes[numToString.charAt(numToString.length - 4)] + 'Thousand'
        }
        //  hundreds
        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
        }
        if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 2)] != 1) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] > 1) {
            resultHundred = arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] == 1) {
            resultHundred = arrayTens[numToString.charAt(numToString.length - 1)];
        }
        if ([numToString.charAt(numToString.length - 3)] == 0 && [numToString.charAt(numToString.length - 2)] == 0) {
            resultHundred = arrayOnes[numToString.charAt(numToString.length - 1)];
        }

    }

    // let arrayOnes = [' ', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    // let arrayTens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    // let arrayDecades = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (numToString.length > 0) {
        if (numToString.length == 3) {
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] == 0) {
                resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)];
            }
            if ([numToString.charAt(numToString.length - 2)] == 1 && [numToString.charAt(numToString.length - 1)] != 0) {
                resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayTens[numToString.charAt(numToString.length - 1)];
            }
            if ([numToString.charAt(numToString.length - 2)] != 1) {
                resultHundred = arrayOnes[numToString.charAt(numToString.length - 3)] + 'Hundred' + arrayDecades[numToString.charAt(numToString.length - 2)] + arrayOnes[numToString.charAt(numToString.length - 1)]
            }
        }

        if (numToString.length == 2) {
            if (inputNumber < 20) {
                resultHundred = arrayTens[inputNumber - 10];
            } else {
                resultHundred = arrayDecades[numToString.charAt(0)] + arrayOnes[numToString.charAt(1)];
            }
        }

        if (numToString.length == 1) {
            if (numToString != 0) {
                resultHundred = arrayOnes[inputNumber];
            } else {
                resultHundred = 'Zero'
            }
        }
    }

    outputToUser.innerText = resultTrillion + resultBillion + resultMillion + resultThousand + resultHundred;
})