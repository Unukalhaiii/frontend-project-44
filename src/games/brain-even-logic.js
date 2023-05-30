import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const generateBrainEvenData = () => {
  const randomNumber = getRandomNumber(2, 1000);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [String(correctAnswer), randomNumber];
};

const startBrainEven = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(instruction, generateBrainEvenData);
};

export default startBrainEven;
