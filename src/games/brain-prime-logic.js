import { getRandomNumber } from '../utils.js';
import startGame from '../index.js';

const isPrime = (number) => {
  let i = 2;
  let result = true;
  while (i <= (number / 2)) {
    result = (number % i) !== 0;
    if (result === false) {
      return result;
    }
    i += 1;
  }
  return result;
};

const generateBrainPrimeData = () => {
  const randomNumber = getRandomNumber(2, 100);
  const correctAnswer = (isPrime(randomNumber)) ? 'yes' : 'no';
  return [correctAnswer, randomNumber];
};

const startBrainPrime = () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(instruction, generateBrainPrimeData);
};

export default startBrainPrime;
