import { getRandomNumber, isPrime } from '../utils.js';
import runGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runPrimeRound = () => {
  const currentNumber = getRandomNumber(1);
  const correctAnswer = isPrime(currentNumber) ? 'yes' : 'no';

  return [currentNumber, correctAnswer];
};

const runPrimeGame = () => runGame(runPrimeRound, description);

export default runPrimeGame;
