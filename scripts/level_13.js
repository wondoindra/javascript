var minNumber = 5;
var maxNumber = 100;

function randomnumber(number, number) {
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

console.log(randomnumber(minNumber, maxNumber));