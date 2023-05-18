import { getRandomNumber, arrayRandElement } from '../utils.js';
import startGame from '../index.js';

const createProgression = (first, step) => {
  const newProgression = [];
  let i = 0;
  let firstNumber = first;
  const elementAmount = 10;
  while (i < elementAmount) {
    newProgression.push(firstNumber);
    firstNumber += step;
    i += 1;
  }
  return newProgression;
};

const generateBrainProgressionData = () => {
  const randomStep = getRandomNumber(1, 10);
  const randomNumber = getRandomNumber(1, 50);
  const numberRow = createProgression(randomNumber, randomStep);
  const correctAnswer = arrayRandElement(numberRow);
  numberRow[numberRow.indexOf(correctAnswer)] = '..';
  const question = numberRow.join(' ');
  return [correctAnswer, question];
};

const startBrainProgression = () => {
  const instruction = 'What number is missing in the progression?';
  startGame(instruction, generateBrainProgressionData);
};

export default startBrainProgression;
