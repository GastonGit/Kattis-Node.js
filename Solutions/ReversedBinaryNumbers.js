const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", line => {
    const input = parseInt(line);
    const binary = input.toString(2);
    const reversedBinary = binary.split('').reverse().join('');
    const reversedBinaryNumber = parseInt(reversedBinary, 2);

    console.log(reversedBinaryNumber);
});