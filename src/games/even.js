import { getRandomNumber, isEven } from '../utils.js';
import runGame from '../index.js';

const description = "Answer 'yes' if the number is even, otherwise answer 'no'.";

const runEven = () => {
  const question = getRandomNumber(1, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runEvenGame = () => runGame(runEven, description);

export default runEvenGame;
