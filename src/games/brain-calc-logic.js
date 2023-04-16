import readlineSync from 'readline-sync';
import {
  correctAnswer, wrongAnswer, endGame, getRandomNumber, arrayRandElement,
} from '../index.js';

const brainCalc = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let i = 0;
  const massive = ['+', '-', '*'];
  while (i < 3) {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const randomElem = arrayRandElement(massive);
    console.log(`Question: ${randomNumber1} ${randomElem} ${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    const sum = String(randomNumber1 + randomNumber2);
    const diff = String(randomNumber1 - randomNumber2);
    const mult = String(randomNumber1 * randomNumber2);
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
};

export default brainCalc;
