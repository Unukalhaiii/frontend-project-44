import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const startBrainEven = () => {
  const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

  const isEven = (number) => number % 2 === 0;

  const generateBrainEvenData = () => {
    const randomNumber = getRandomNumber(2, 1000);
    let correctAnswer = '';
    if (isEven(randomNumber)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    const question = randomNumber;
    return [correctAnswer, question];
  };

  startGame(instruction, generateBrainEvenData);
};

export default startBrainEven;
