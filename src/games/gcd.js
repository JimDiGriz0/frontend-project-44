import { getRandomNumber, getGcd } from '../utils.js';
import runGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcdRoundData = () => {
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);

  const gcd = getGcd(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;

  return [question, String(gcd)];
};

const runGcdGame = () => runGame(getGcdRoundData, description);

export default runGcdGame;
