const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const leader = {contestant: -1, score: -1};
let round = 1;

rl.on("line", line => {
    const numbers = line.split(' ').map(num => parseInt(num));
    updateLeader(numbers);

    if (round === 5) {
        console.log(leader.contestant + ' ' + leader.score);
    } else {
        round++;
    }
});

function updateLeader(grades){
    const score = grades.reduce((a, b) => a + b, 0);
    if (score > leader.score){
        leader.contestant = round;
        leader.score = score;
    }
}