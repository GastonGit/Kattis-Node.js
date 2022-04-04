const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    let count = parseInt(line);

    if (count % 2 === 0){
        console.log('Bob')
    } else{
        console.log('Alice')
    }
});











