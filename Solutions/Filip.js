const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", line => {
    const nums = line.split(' ');
    const A = parseInt(reverseString(nums[0]));
    const B = parseInt(reverseString(nums[1]));

    console.log(A > B ? A : B);
});

function reverseString(string){
    return string.split('').reverse().join('');
}