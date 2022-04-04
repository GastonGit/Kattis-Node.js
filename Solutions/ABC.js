const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", line => {
    const nums = line.split(' ').sort(((a, b) => {
        return parseInt(a) - parseInt(b);
    }))
    const integers = {
        A: nums[0],
        B: nums[1],
        C: nums[2]
    }

    rl.once("line", order =>{
        const result = integers[order.charAt(0)] + ' ' + integers[order.charAt(1)] + ' ' + integers[order.charAt(2)];
        console.log(result)
    })
});
