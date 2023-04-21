import readlineSync from 'readline-sync';
import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const startBrainProg = () => {
  const instruction = 'What number is missing in the progression?';

  const createMassive = (first, step) => {
    const newMassive = [];
    let n = 0;
    let firstNumber = first;
    while (n < 10) {
      newMassive.push(firstNumber);
      firstNumber += step;
      n += 1;
    }
    return newMassive;
  };

  const generateBrainProgressionData = () => {
    const randomStep = getRandomNumber(1, 10);
    const chosenNumber = getRandomNumber(0, 9);
    const randomNumber = getRandomNumber(1, 50);
    const massive = createMassive(randomNumber, randomStep);
    const correctAnswer = massive[chosenNumber];
    massive[chosenNumber] = '..';
    console.log(`Question: ${massive.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    return [answer, correctAnswer];
  }

  startGame(instruction, generateBrainProgressionData);
};

export default startBrainProg;
