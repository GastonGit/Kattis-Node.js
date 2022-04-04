const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", line => {
    const nums = line.split(' ')

    const hour = parseInt(nums[0])
    const minutes = parseInt(nums[1])

    const rawTime = (hour * 60) + minutes
    let rawTimeAlarm = rawTime - 45

    if (rawTimeAlarm < 0){
        rawTimeAlarm += 1440
    }

    const wakeupHour = Math.floor(rawTimeAlarm / 60)
    const wakeupMinutes = rawTimeAlarm % 60

    console.log(wakeupHour + ' ' + wakeupMinutes)
});