import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i <= (number / 2); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const generateBrainPrimeData = () => {
  const randomNumber = getRandomNumber(2, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [correctAnswer, randomNumber];
};

const startBrainPrime = () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(instruction, generateBrainPrimeData);
};

export default startBrainPrime;
