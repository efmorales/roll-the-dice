/*
## `custom-roll.js`

Create a new file, `custom-roll.js`, that prompts the user for how many sides the dice should have, then simulates a roll of a dice with that many sides.

*/

// What operators and variables do I need to setup my foundation?

const prompt = require('prompt-sync')({sigint: true});

let userDice = Number(prompt(`Please create your own custom dice!: `))

let randomChoice = (Math.ceil(Math.random () * userDice))


// What conditions do I need to satisfy for the program to run a random number from the number of sides the user inputted?

if (userDice > 0) {
    console.log(`Your dice of ${userDice} sides shows a result of ${randomChoice}`)
}
