import { getRandomNumber } from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const runProgressionRound = () => {
  const progressionArr = [];
  const currentDiff = getRandomNumber(1, 20);
  const startNum = getRandomNumber(1, 10);
  const hideNum = getRandomNumber(0, 9);
  let question = '';
  let correctAnswer;

  progressionArr.push(startNum);

  for (let i = 1; i < 10; i += 1) {
    progressionArr.push(progressionArr[i - 1] + currentDiff);
  }

  for (let z = 0; z < 10; z += 1) {
    if (z === hideNum) {
      question = `${question} ..`;
      correctAnswer = String(progressionArr[z]);
    } else {
      question = `${question} ${progressionArr[z]}`;
    }
  }
  question = question.slice(1);

  return [question, correctAnswer];
};

const runProgressionGame = () => runGame(runProgressionRound, description);

export default runProgressionGame;
