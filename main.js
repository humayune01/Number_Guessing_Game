#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let secretNumber = Math.round(Math.random() * 10);
let numberOfGuesses = 0;
let guess;
let answer;
let playOnce = true;
async function play() {
    do {
        guess = await inquirer.prompt({
            name: "guess",
            type: "number",
            message: "Guess the secret number: "
        });
        if (guess.guess < secretNumber) {
            console.log(`${chalk.red('Your number is too low, try again!!')} attempts (${++numberOfGuesses})`);
        }
        else if (guess.guess > secretNumber) {
            console.log(`${chalk.red('Your number is too high, try again!!')} attempts (${++numberOfGuesses})`);
        }
        else if (isNaN(guess.guess)) {
            console.log(`${chalk.red('Please enter numbers only, try again!!')} attempts (${++numberOfGuesses})`);
        }
        else {
            console.log(`${chalk.greenBright('Congratulations!! You have guessed the number!!')} attempts (${++numberOfGuesses})`);
        }
    } while (guess.guess != secretNumber || isNaN(guess.guess));
    await playAgain();
}
async function playAgain() {
    if (!playOnce) {
        answer = await inquirer.prompt({
            type: "confirm",
            name: "play",
            message: "Do you want to play again?"
        });
        while (answer.play) {
            numberOfGuesses = 0;
            await play();
        }
    }
    else {
        playOnce = false;
        await play();
    }
}
playAgain();
