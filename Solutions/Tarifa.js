const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.once("line", x => {
    const monthlyData = parseInt(x);
    let dataBucket = monthlyData
    let inputCounter = 0

    rl.once("line", n => {
        rl.on("line", p => {
            if (inputCounter < parseInt(n)){
                dataBucket = dataBucket + monthlyData - parseInt(p)
                inputCounter++;
                if (inputCounter === parseInt(n)){
                    console.log(dataBucket)
                }
            }
        })
    })
})
