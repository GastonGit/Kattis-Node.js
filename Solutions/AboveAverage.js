const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.once("line", () => {
    rl.on("line", line => {
        const nums = line.split(' ');
        const totalNumberOfPeople = parseInt(nums.shift());
        const grades = nums.map(num => parseInt(num));
        const sumOfGrades = grades.reduce((a, b) => a + b, 0);

        const averageGrade = Math.floor(sumOfGrades / totalNumberOfPeople);
        const numberOfPeopleAboveAverage = grades.filter((grade) => grade > averageGrade).length;
        const aboveAverageFloat = numberOfPeopleAboveAverage / totalNumberOfPeople;

        const aboveAverage = `${(aboveAverageFloat * 100).toFixed(3)}%`;
        console.log(aboveAverage);
    });
});