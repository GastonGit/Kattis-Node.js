const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let possibleAaah = ''

rl.on("line", line => {
    if (possibleAaah === ''){
        possibleAaah = line
    } else{
        console.log(possibleAaah.length >= line.length ? 'go' : 'no')
        possibleAaah = ''
    }
});