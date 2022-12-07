const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readLine.question(`What should you do when the company owes your salary? Please input your choose: `, (yourChoose) => {
    console.log(`Your choose: \x1b[34m${unpaidWages(yourChoose || 0).toUpperCase() }!`);
    readLine.close();
});

const unpaidWages = (yourChoose = 0) => {
    return {
        0: "out",
        1: "wait to die",
        2: "wait in crazy",
        3: "Wakanda Forever",
        4: "wait when playing game",
        5: "wait in processing another job",
        6: "Smoking thinking about life"
    }[yourChoose];
}