import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const startBrainCalc = () => {
  const instruction = 'What is the result of the expression?';

  const arrayRandElement = (mass) => {
    const randElem = Math.floor(Math.random() * mass.length);
    return mass[randElem];
  };

  const generateBrainCalcData = () => {
    const massive = ['+', '-', '*'];
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const randomElem = arrayRandElement(massive);
    console.log(`Question: ${randomNumber1} ${randomElem} ${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    const sum = String(randomNumber1 + randomNumber2);
    const diff = String(randomNumber1 - randomNumber2);
    const mult = String(randomNumber1 * randomNumber2);
    let correctAnswer = '';
    switch (randomElem) {
      case '+':
        correctAnswer = sum;
        break;
      case '-':
        correctAnswer = diff;
        break;
      case '*':
        correctAnswer = mult;
        break;
      default:
        break;
    }
    return [answer, correctAnswer];
  };

  startGame(instruction, generateBrainCalcData);
};

export default startBrainCalc;
