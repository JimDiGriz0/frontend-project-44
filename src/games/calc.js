import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const operators = ['+', '-', '*'];
const description = 'What is the result of the expression?';

const getRandomOperator = () => operators[Math.floor(Math.random() * operators.length)];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const getRound = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));
  return [question, correctAnswer];
};

const runCalcGame = () => runGame(getRound, description);

export default runCalcGame;
