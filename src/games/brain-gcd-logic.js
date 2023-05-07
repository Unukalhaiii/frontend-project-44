import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const startBrainGcd = () => {
  const instruction = 'Find the greatest common divisor of given numbers.';

  const findGcd = (a, b) => {
    let result = 0;
    if (b === 0) {
      result = a;
    } else {
      result = findGcd(b, a % b);
    }
    return result;
  };

  const generateBrainGcdData = () => {
    const randomNumber1 = getRandomNumber(1, 50);
    const randomNumber2 = getRandomNumber(1, 100);
    let correctAnswer = '';
    if (randomNumber1 > randomNumber2) {
      correctAnswer = String(findGcd(randomNumber1, randomNumber2));
    } else {
      correctAnswer = String(findGcd(randomNumber2, randomNumber1));
    }
    const question = `${randomNumber1} ${randomNumber2}`;
    return [correctAnswer, question];
  };

  startGame(instruction, generateBrainGcdData);
};

export default startBrainGcd;
