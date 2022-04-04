const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.once("line", () => {
    rl.once("line", line => {
        const temperatures = line.split(' ');
        let coldDays = 0;

        for (let i = 0; i < temperatures.length; i++){
            if (parseInt(temperatures[i]) < 0){
                coldDays++;
            }
        }

        console.log(coldDays);
    });
})