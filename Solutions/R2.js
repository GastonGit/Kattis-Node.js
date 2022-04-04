const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let nums = line.split(' ');

    let r1 = parseInt(nums[0]);
    let s = parseInt(nums[1]);

    console.log((s * 2) - r1);
});