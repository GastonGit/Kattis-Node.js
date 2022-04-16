const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", line => {
    const nums = line.split(' ');
    const width = parseInt(nums[1]);
    const height = parseInt(nums[2]);

    const widthPow = Math.pow(width, 2);
    const heightPow = Math.pow(height, 2);
    const diagonal = Math.sqrt(widthPow + heightPow);
    const maxLength = Math.floor(diagonal);

    rl.on("line", line2 => {
        const length = parseInt(line2);

        if (length <= maxLength){
            console.log('DA');
        } else{
            console.log('NE');
        }
    });
});