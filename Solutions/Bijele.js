const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.once("line", line => {
    const nums = line.split(' ');
    let result = ''

    for (let i = 0; i < nums.length; i++){
        if (i < 2){
            result += (' ' + (1 - parseInt(nums[i])));
        } else if (i < 5){
            result += (' ' + (2 - parseInt(nums[i])));
        } else{
            result += (' ' + (8 - parseInt(nums[i])));
        }
    }
    result = result.trim();

    console.log(result)
})
