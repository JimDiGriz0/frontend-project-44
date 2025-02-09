import { getUserAnswer, getRandomNumber, isEven } from '../utils.js';

const runEven = () => {
  const currentCheckNum = getRandomNumber(1, 1000);
  const correctAnswer = isEven(currentCheckNum) ? 'yes' : 'no';

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const answer = getUserAnswer(currentCheckNum, correctAnswer);
  return answer;
};

export default runEven;
