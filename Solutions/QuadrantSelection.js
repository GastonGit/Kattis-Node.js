const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", x => {
    rl.once("line", y => {
        const quadrant = getQuadrant(x,y);
        console.log(quadrant)
    });
});

function getQuadrant(x,y){
    if (x < 0){
        if (y < 0){
            return 3;
        } else{
            return 2;
        }
    } else{
        if (y < 0){
            return 4;
        } else{
            return 1;
        }
    }
}