import readlineSync from 'readline-sync';
import { correctAnswer, wrongAnswer, endGame, getRandomNumber, arrayRandElement, findGcd } from '../index.js';

const brainGcd = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');
let i = 0;
while (i < 3) {
    let randomNumber1 = getRandomNumber(1, 100);
    let randomNumber2 = getRandomNumber(1, 100);
    let d = String(findGcd(randomNumber1, randomNumber2));
    console.log('Question: ' + randomNumber1 + ' ' + randomNumber2);
    let answer = readlineSync.question('Your answer: ');
    if (answer === d) {
        correctAnswer();
        i += 1;
    } else {
        wrongAnswer(d, answer, name);
        break;
}
endGame(i, name);
}
}

export {brainGcd};