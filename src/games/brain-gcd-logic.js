import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const startBrainGcd = () => {
  const instruction = 'Find the greatest common divisor of given numbers.';

  const findGcd = (a, b) => {
    let n = 1;
    let result = 0;
    if (a > b) {
      while (n <= b) {
        if (a % n === 0 && b % n === 0) {
          result = n;
        }
        n += 1;
      }
    } else if (a < b) {
      while (n <= a) {
        if (a % n === 0 && b % n === 0) {
          result = n;
        }
        n += 1;
      }
    }
    return result;
  }

  const generateBrainGcdData = () => {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const correctAnswer = String(findGcd(randomNumber1, randomNumber2));
    console.log(`Question: ${randomNumber1} ${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    return [answer, correctAnswer];
  }

  startGame(instruction, generateBrainGcdData);
};

export default startBrainGcd;
