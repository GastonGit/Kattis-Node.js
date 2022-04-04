const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const nums = line.split(' ');

    const n1 = parseInt(nums[0]);
    const n2 = parseInt(nums[1]);

    const difference = n1 > n2 ? n1 - n2 : n2 - n1

    console.log(difference);
});