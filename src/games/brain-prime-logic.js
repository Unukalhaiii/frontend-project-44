import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const startBrainPrime = () => {
  const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const isPrime = (number) => {
    let n = 2;
    while (n <= (number / 2)) {
      if (number % n === 0) {
        return 'no';
      }
      n += 1;
    }
    return 'yes';
  }

  const generateBrainPrimeData = () => {
    const randomNumber = getRandomNumber(2, 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(randomNumber);
    return [answer, correctAnswer];
  }

  startGame(instruction, generateBrainPrimeData);
};

export default startBrainPrime;
