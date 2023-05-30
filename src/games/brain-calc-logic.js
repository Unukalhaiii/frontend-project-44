import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const generateRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomOperator = operators[getRandomNumber(0, 2)];
  return randomOperator;
};

const getSolution = (number1, number2) => {
  let result = 0;
  const operator = generateRandomOperator();
  switch (generateRandomOperator()) {
    case '+':
      result = number1 + number2;
      return [result, '+'];
    case '-':
      result = number1 - number2;
      return [result, '-'];
    case '*':
      result = number1 * number2;
      return [result, '*'];
    default:
      throw new Error(`Unknown opperator: ${operator}`);
  }
};

const generateBrainCalcData = () => {
  const randomNumber1 = getRandomNumber(1, 100);
  const randomNumber2 = getRandomNumber(1, 100);

  const [correctAnswer, operator] = getSolution(randomNumber1, randomNumber2);
  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  return [String(correctAnswer), question];
};

const startBrainCalc = () => {
  const instruction = 'What is the result of the expression?';
  startGame(instruction, generateBrainCalcData);
};

export default startBrainCalc;
