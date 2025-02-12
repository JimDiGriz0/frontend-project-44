import getRandomNumber from '../utils.js';
import runGame from '../index.js';

const description = 'What number is missing in the progression?';

const buildProgression = (start, step, length = 10) => {
  const result = [];
  result.push(start);
  for (let i = 1; i < length; i += 1) {
    result.push(result[i - 1] + step);
  }
  return result;
};

const getRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 20);
  const progression = buildProgression(start, step);
  const hiddenIndex = getRandomNumber(0, progression.length - 1);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');

  return [question, correctAnswer];
};

getRound();

const runProgressionGame = () => runGame(getRound, description);

export default runProgressionGame;
