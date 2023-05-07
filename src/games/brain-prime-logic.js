import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const startBrainPrime = () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (number) => {
    let i = 2;
    let result = true;
    while (i <= (number / 2)) {
      result = number % i !== 0;
      if (result === false) {
        return result;
      }
      i += 1;
    }
    return result;
  };

  const generateBrainPrimeData = () => {
    const randomNumber = getRandomNumber(2, 100);
    let correctAnswer = '';
    if (isPrime(randomNumber)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const question = randomNumber;

    return [correctAnswer, question];
  };

  startGame(instruction, generateBrainPrimeData);
};

export default startBrainPrime;
