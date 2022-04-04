const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.once("line", line => {
    const nums = line.split(' ')
    const problems = nums[1]
    console.log(problems)
});