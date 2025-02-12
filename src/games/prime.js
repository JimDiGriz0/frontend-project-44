import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num % 2 === 0) {
    return num === 2;
  }

  const limit = Math.sqrt(num);

  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const getRound = () => {
  const question = getRandomNumber(1);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runPrimeGame = () => runGame(getRound, description);

export default runPrimeGame;
