const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", line => {
    const nums = line.split(' ');
    const x = parseInt(nums[0]);
    const y = parseInt(nums[1]);
    const n = parseInt(nums[2]);

    for (let i = 1; i <= n; i++){
        let result = ''
        if (i % x === 0){
            result += 'Fizz'
        }
        if(i % y === 0){
            result += 'Buzz'
        }
        console.log(result === '' ? i : result)
    }
});