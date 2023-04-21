import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const startBrainEven = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = (num) => {
    if (num % 2 === 0) {
      return 'yes';
    }
    return 'no';
  };

  const generateBrainEvenData = () => {
    const randomNumber = getRandomNumber(2, 1000);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = isEven(randomNumber);
    return [answer, correctAnswer];
  };

  startGame(instruction, generateBrainEvenData);
};

export default startBrainEven;
