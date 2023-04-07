#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { correctAnswer, wrongAnswer, endGame, getRandomNumber, arrayRandElement } from '../index.js';

const brainCalc = () => {
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');
let i = 0;
const massive = ['+','-','*'];
while (i < 3) {
    let randomNumber1 = getRandomNumber(1, 100);
    let randomNumber2 = getRandomNumber(1, 100);
    let randomElem = arrayRandElement(massive)
    console.log('Question: ' + randomNumber1 + ' ' + randomElem + ' ' + randomNumber2);
    let answer = readlineSync.question('Your answer: ')
    let sum = String(randomNumber1 + randomNumber2);
    let diff = String(randomNumber1 - randomNumber2);
    let mult = String(randomNumber1 * randomNumber2);
    if (answer === sum && randomElem === '+') {
        correctAnswer();
        i += 1;
    } else if (answer !== sum && randomElem === '+') {
        wrongAnswer(sum, answer, name);
        break;
    } else if (answer === diff && randomElem === '-') {
        correctAnswer();
        i += 1;
    } else if (answer !== diff && randomElem === '-') {
        wrongAnswer(diff, answer, name);
        break;
    } else if (answer === mult && randomElem === '*') {
        correctAnswer();
        i += 1;
    } else if (answer !== mult && randomElem === '*') {
        wrongAnswer(mult, answer, name);
        break;
    }
}
endGame(i, name);
}

export {brainCalc};
