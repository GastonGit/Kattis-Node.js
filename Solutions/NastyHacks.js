const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", n => {
    rl.on("line", line => {
        const nums = line.split(' ');

        const revenue = parseInt(nums[0]);
        const advertisementRevenue = parseInt(nums[1]);
        const advertisementCost = parseInt(nums[2]);
        const advertisementProfit = advertisementRevenue - advertisementCost;

        if (revenue === advertisementProfit){
            console.log('does not matter');
        } else {
            console.log(revenue > advertisementProfit ? 'do not advertise' : 'advertise');
        }
    });
});
