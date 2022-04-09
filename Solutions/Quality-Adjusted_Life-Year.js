const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let counter = 0;
let total = 0.000;

rl.once("line", n => {
    const max = parseInt(n);
    rl.on("line", line => {
        const nums = line.split(' ');
        const q = parseFloat(nums[0]);
        const y = parseFloat(nums[1]);

        total += q * y;

        counter++;
        if (counter === max){
            console.log(total);
        }
    });
});