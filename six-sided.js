/*

# `six-sided.js`

Create a file called `six-sided.js` that uses the `Math.random()` to simulate a random dice roll which is then logged out to the user.

The challenge here is transforming the random decimal (between 0 and 0.99999999...) into a number that's either 1, 2, 3, 4, 5, or 6. To do this you'll need to do some multiplying and some `Math.floor()`ing (or `Math.ceil()`ing).

*/

// What operators and variables do I need to setup my foundation?
const prompt = require('prompt-sync')({sigint: true});

let diceRoll = Number(prompt(`Roll the dice by typing '1':`))

let result = Math.floor(Math.random() * 7)

// How do I create a random output of 1-6?

if (diceRoll === 1 && result < 7) {
    console.log (`Your dice has rolled: ${result}!`)
} else {
    console.log (`Error! Please input a valid number!`)
}
