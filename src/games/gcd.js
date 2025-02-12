import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const getRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const correctAnswer = getGcd(num1, num2);
  const question = `${num1} ${num2}`;

  return [question, String(correctAnswer)];
};

const runGcdGame = () => runGame(getRound, description);

export default runGcdGame;
