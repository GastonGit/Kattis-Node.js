const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.once("line", line => {
    console.log(line.split('-').filter((name) => name !== '-').map((name) => name[0]).join(''))
})
