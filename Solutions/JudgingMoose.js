const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", line => {
    const nums = line.split(' ');
    const leftTines = parseInt(nums[0]);
    const rightTines = parseInt(nums[1]);
    const tines = leftTines < rightTines ? rightTines * 2 : leftTines * 2;

    if (leftTines === 0 && rightTines === 0){
        console.log('Not a moose');
    } else {
        if (leftTines === rightTines){
            console.log(`Even ${tines}`);
        } else {
            console.log(`Odd ${tines}`);
        }
    }
});