const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", line => {
    const nums = line.split(' ');
    const height = parseInt(nums[0]);
    const degrees = parseInt(nums[1]);

    const minLength = Math.ceil(height / Math.sin(degrees * (Math.PI / 180)));
    console.log(minLength);
});