const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", line => {
    const inputAsArray = line.split('');
    const outputAsArray = [];

    for (let i = 0; i < inputAsArray.length; i++){
        if (inputAsArray[i] === '<'){
            outputAsArray.pop();
        } else{
            outputAsArray.push(inputAsArray[i]);
        }
    }

    const output = outputAsArray.join('');
    console.log(output);
});