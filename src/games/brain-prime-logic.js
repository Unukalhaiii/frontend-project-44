import readlineSync from 'readline-sync';
import { correctAnswer, wrongAnswer, endGame, getRandomNumber, isPrime } from '../index.js';

const brainPrime = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let i = 0;
while (i < 3) {
    let randomNumber = getRandomNumber(2, 100);
    console.log('Question: ' + randomNumber);
    let answer = readlineSync.question('Your answer: ')
    let p = isPrime(randomNumber)
    if (answer === p) {
        correctAnswer();
        i += 1;
    } else if (answer !== p) {
        wrongAnswer(p, answer, name);
        break;
    }
}
endGame(i, name);
}

export {brainPrime};
