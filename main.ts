import inquirer from "inquirer";
import chalk from "chalk";

let secretNumber : number = Math.round(Math.random() * 10);
let numberOfGuesses : number = 0;
let guess;

do {

    guess = await inquirer.prompt({
        name: "guess",
        type: "number",
        message: "Guess the secret number: "
    });

    if (guess.guess < secretNumber) {
        console.log(`${chalk.red('Your number is too low, try again!!')} attempts (${++numberOfGuesses})`);
    } else if (guess.guess > secretNumber) {
        console.log(`${chalk.red('Your number is too high, try again!!')} attempts (${++numberOfGuesses})`);
    } else {
        console.log(`${chalk.greenBright('Congratulations!! You have guessed the number!!')} attempts (${++numberOfGuesses})`);
    }
    
} while (guess.guess != secretNumber);
