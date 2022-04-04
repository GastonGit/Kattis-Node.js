const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.once("line", () => {
    rl.on("line", integer => {
        console.log(integer % 2 === 0 ? integer + ' is even' : integer + ' is odd');
    });
})