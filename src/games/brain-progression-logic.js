import readlineSync from 'readline-sync';
import { correctAnswer, wrongAnswer, endGame, getRandomNumber, createMassive } from '../index.js';

const brainProg = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
let i = 0;
while (i < 3) {
    let randomNumber1 = getRandomNumber(1, 10);
    let randomNumber2 = getRandomNumber(0, 9);
    let numb = getRandomNumber(1, 50);
    const massive = createMassive(numb, randomNumber1)
    let searchedNumb = massive[randomNumber2];
    massive[randomNumber2] = '..'
    console.log('Question: ' + massive.join(' '));
    let answer = readlineSync.question('Your answer: ')
    if (answer === String(searchedNumb)) {
        correctAnswer();
        i += 1;
    } else {
        wrongAnswer(searchedNumb, answer, name);
        break;
    }
endGame(i, name);
}
}

export {brainProg};