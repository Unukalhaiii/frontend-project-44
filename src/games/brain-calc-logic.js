import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const startBrainCalc = () => {
  const instruction = 'What is the result of the expression?';

  const arrayRandElement = (mass) => {
    const randElem = Math.floor(Math.random() * mass.length);
    return mass[randElem];
  };

  const generateRandomOperator = () => {
    const operators = ['+', '-', '*'];
    const randomOperator = arrayRandElement(operators);
    return randomOperator;
  };

  const getSolution = (number1, number2) => {
    let result = '';
    const operator = generateRandomOperator();
    switch (operator) {
      case '+':
        result = String(number1 + number2);
        break;
      case '-':
        result = String(number1 - number2);
        break;
      case '*':
        result = String(number1 * number2);
        break;
      default:
        console.log('Unknown operator');
        break;
    }
    return [result, operator];
  };

  const generateBrainCalcData = () => {
    const randomNumber1 = getRandomNumber(1, 100);
    const randomNumber2 = getRandomNumber(1, 100);
    const [correctAnswer, operator] = getSolution(randomNumber1, randomNumber2);
    const question = `${randomNumber1} ${operator} ${randomNumber2}`;
    return [correctAnswer, question];
  };

  startGame(instruction, generateBrainCalcData);
};

export default startBrainCalc;
