const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let count = parseInt(line);

    for (let i = 0; i < count; i++){
        console.log((i+ 1) + ' Abracadabra');
    }
});







