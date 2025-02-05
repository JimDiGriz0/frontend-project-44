import { isAnswerCorrect, getRandomNumber } from '../index.js';
import { getUserName } from '../cli.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const userName = getUserName();

const brainCalc = () => {
  console.log('What is the result of the expression?');
  let correctAnswersCount = 0;
  let currentExpression;

  while (correctAnswersCount < 3) {
    const a = getRandomNumber();
    const b = getRandomNumber();
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
        return;
    }
    const userAnswer = isAnswerCorrect(
      currentExpression,
      String(correctAnswer)
    );
    if (userAnswer[0]) {
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${userAnswer[1]}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export { brainCalc };
