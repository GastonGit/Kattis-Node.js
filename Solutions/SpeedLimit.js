const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n = null;
let counter = 0;
let elapsedTime = 0;
let milesDriven = 0;

rl.on("line", line => {
    if (n !== null){
        const numbers = line.split(' ');
        const mph = parseInt(numbers[0]);
        const hours = parseInt(numbers[1]) - elapsedTime;

        milesDriven += mph * hours;
        elapsedTime = parseInt(numbers[1]);
        counter++;

        if (counter === n){
            console.log(milesDriven + ' miles');
            n = null;
            counter = 0;
            elapsedTime = 0;
            milesDriven = 0;
        }
    } else{
        n = parseInt(line);
    }
});