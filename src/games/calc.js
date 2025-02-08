import { getRandomNumber, getRandomOperator, getUserAnswer } from '../utils.js';

const runCalc = () => {
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

  console.log('What is the result of the expression?');

  const answer = getUserAnswer(currentExpression, String(correctAnswer));
  return answer;
};

export default runCalc;
