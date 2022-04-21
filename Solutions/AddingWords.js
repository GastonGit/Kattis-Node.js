const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let definitions = {};

rl.on("line", line => {
    const input = line.split(' ');
    const type = input.shift();

    if (type === 'def') {
        definitions[input[0]] = parseInt(input[1]);
    } else if (type === 'calc'){
        const baseResponse = input.toString().replace(/,/g, ' ') + ' ';
        console.log(baseResponse + calculateWord(input));
    } else if (type === 'clear'){
        definitions = {};
    }
});

function calculateWord(calcArray){
    let numericValue = 0;
    calcArray.unshift('+');

    for (let i = 0; i < calcArray.length - 1; i+=2){
        if (calcArray[i + 1] in definitions){
            if (calcArray[i] === '+'){
                numericValue += definitions[calcArray[i + 1]];
            } else {
                numericValue -= definitions[calcArray[i + 1]];
            }
        } else {
            return 'unknown';
        }
    }

    const valueAsWord = Object.keys(definitions).find(key => definitions[key] === numericValue);
    if (typeof valueAsWord !== 'undefined') {
        return valueAsWord;
    } else {
        return 'unknown';
    }
}
