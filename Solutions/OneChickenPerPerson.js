const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", line => {
    const nums = line.split(' ');
    const people = parseInt(nums[0]);
    const chickenPieces = parseInt(nums[1]);

    const difference = Math.abs(people - chickenPieces);
    const pieceForm = difference === 1 ? 'piece' : 'pieces';

    if (people < chickenPieces){
        console.log(`Dr. Chaz will have ${difference} ${pieceForm} of chicken left over!`);
    } else {
        console.log(`Dr. Chaz needs ${difference} more ${pieceForm} of chicken!`);
    }
});