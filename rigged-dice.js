/*

## `rigged-dice.js`

Create a new file, `rigged-dice.js`, which prompts the user for a rigged number using a 6-sided die. The dice should roll the rigged number twice as frequently as the other numbers!

Solution TLDR:

1 = 2/6
2 = 1/6
3 = 1/6
4 = 1/6
5 = 1/6
6 = 0

*/



// What operators and variables do I need to setup my foundation?

const prompt = require('prompt-sync')({sigint: true});

let diceRoll = Number(prompt(`Please roll the dice by typing '1': `));

let result = (Math.ceil(Math.random() * 6));

// How do I create a numeral output in a range of 1 to 6, but with a prefference for the # `1` showing up as twice as frequently?

console.log(`Actual roll: ${result}`)

if (diceRoll === 1 && result === 6) {
    console.log(`The dice rolled ${result / 6}!`)    
} else if (diceRoll === 1 && result < 6) {
    console.log (`The dice rolled ${result}!`)    
} else {
    console.log (`Error! please input a valid number`)
}
// My rigged number is `1`. Since `6` is now is sacrificing itself to always be number `1`, now I have doubled my chances for the number `1` to appear in my program.

