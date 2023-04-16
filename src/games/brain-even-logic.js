import readlineSync from 'readline-sync';
import { correctAnswer, wrongAnswer, endGame, getRandomNumber, isEven } from '../index.js';

const brainEven = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let i = 0;
while (i < 3) {
    let randomNumber = getRandomNumber(2, 1000);
    console.log('Question: ' + randomNumber);
    let answer = readlineSync.question('Your answer: ')
    let e = isEven(randomNumber)
    if (answer === e) {
        console.log('Correct!');
        i = i + 1;
    } else if (answer !== e) {
        wrongAnswer(e, answer, name);
        break;
    }
}
endGame(i, name);
}

export {brainEven};