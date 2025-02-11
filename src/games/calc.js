import { getRandomNumber, getRandomOperator } from '../utils.js';
import runGame from '../index.js';

const description = 'What is the result of the expression?';

const getCalcRoundData = () => {
  const a = getRandomNumber(1, 20);
  const b = getRandomNumber(1, 20);
  let currentExpression;
  let correctAnswer;

  switch (getRandomOperator()) {
    case '+':
      currentExpression = `${a} + ${b}`;
      correctAnswer = a + b;
      break;
    case '-':
      currentExpression = `${a} - ${b}`;
      correctAnswer = a - b;
      break;
    case '*':
      currentExpression = `${a} * ${b}`;
      correctAnswer = a * b;
      break;
    default:
      console.log('THIS IS IMPOSSIBLE! HOW DO YOU DID IT?');
      break;
  }

  return [currentExpression, String(correctAnswer)];
};

const runCalcGame = () => runGame(getCalcRoundData, description);

export default runCalcGame;
