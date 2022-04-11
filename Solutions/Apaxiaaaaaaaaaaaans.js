const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", name => {
    const nameAsArray = name.split('');
    const compactNameAsArray = nameAsArray.filter((letter, index) => letter !== nameAsArray[index - 1]);
    const compactName = compactNameAsArray.join('');

    console.log(compactName);
});