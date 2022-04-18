const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", line => {
    const iterations = parseInt(line);
    const square = Math.pow(2, iterations) + 1;
    const points = square * square;

    console.log(points);
});





