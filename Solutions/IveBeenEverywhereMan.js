const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let counter = 0;
let max = null;
let distinctCities = [];

rl.once("line", () => {
    rl.on("line", line => {
        if (max === null){
            max = parseInt(line);
        } else {
            if (!distinctCities.includes(line)){
                distinctCities.push(line);
            }

            counter++;
            if (counter === max){
                console.log(distinctCities.length);
                resetVariables();
            }
        }
    });
});

function resetVariables(){
    counter = 0;
    max = null;
    distinctCities = [];
}