const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", n => {
    let total = 0;
    let inputCounter = 0;

    rl.on("line", line => {
        const base = parseInt(line.substring(0, line.length - 1));
        const exponent = parseInt(line.substring(line.length - 1));

        total += Math.pow(base, exponent);

        inputCounter++;
        if (inputCounter === parseInt(n)){
            console.log(total);
        }
    });
});
