const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", () => {
    rl.on("line", line => {
        const initial = line.substring(0, 10);
        const command = line.substring(10);

        if (initial === 'Simon says'){
            console.log(command)
        }
    });
});