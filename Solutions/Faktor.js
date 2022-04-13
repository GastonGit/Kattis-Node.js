const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", line => {
    const nums = line.split(' ');
    const articles = parseInt(nums[0]);
    const impact = parseInt(nums[1]);

    const minScientists = 1 + (articles * (impact - 1));

    console.log(minScientists);
});
