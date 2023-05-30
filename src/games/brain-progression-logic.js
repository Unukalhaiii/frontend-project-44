import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const createProgression = (first, step, elementAmount = 10) => {
  const newProgression = [];
  let firstNumber = first;
  for (let i = 0; i < elementAmount; i += 1) {
    newProgression.push(firstNumber);
    firstNumber += step;
  }
  return newProgression;
};

const generateBrainProgressionData = () => {
  const randomStep = getRandomNumber(1, 10);
  const randomNumber = getRandomNumber(1, 50);
  const numberRow = createProgression(randomNumber, randomStep);
  const correctAnswer = numberRow[getRandomNumber(0, 9)];
  numberRow[numberRow.indexOf(correctAnswer)] = '..';
  const question = numberRow.join(' ');
  return [String(correctAnswer), question];
};

const startBrainProgression = () => {
  const instruction = 'What number is missing in the progression?';
  startGame(instruction, generateBrainProgressionData);
};

export default startBrainProgression;
