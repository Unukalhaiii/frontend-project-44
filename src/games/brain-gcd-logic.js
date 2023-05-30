import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const findGcd = (a, b) => {
  if (a > b) {
    const result = (b === 0) ? a : findGcd(b, a % b);
    return result;
  }
  const result = (a === 0) ? b : findGcd(a, b % a);
  return result;
};

const generateBrainGcdData = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);
  const correctAnswer = findGcd(randomNumber1, randomNumber2);
  const question = `${randomNumber1} ${randomNumber2}`;
  return [String(correctAnswer), question];
};

const startBrainGcd = () => {
  const instruction = 'Find the greatest common divisor of given numbers.';
  startGame(instruction, generateBrainGcdData);
};

export default startBrainGcd;
