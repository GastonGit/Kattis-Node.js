const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", line => {
    const moves = line.split('');
    let cups = [null, true, false, false];

    for (let i = 0; i < moves.length; i++){
        const cup1 = cups[1];
        const cup2 = cups[2];
        const cup3 = cups[3];

        if (moves[i] === 'A'){
            cups[1] = cup2;
            cups[2] = cup1;
        } else if (moves[i] === 'B'){
            cups[2] = cup3;
            cups[3] = cup2;
        } else if (moves[i] === 'C'){
            cups[1] = cup3;
            cups[3] = cup1;
        }
    }

    const cupWithBall = cups.indexOf(true);
    console.log(cupWithBall);
});