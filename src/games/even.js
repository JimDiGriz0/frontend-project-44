import { getUserAnswer, getRandomNumber } from '../utils.js';

const isEven = (num) => num % 2 === 0;
const runEven = () => {
  const currentCheckNum = getRandomNumber(1, 1000);
  const correctAnswer = isEven(currentCheckNum) ? 'yes' : 'no';

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const answer = getUserAnswer(currentCheckNum, correctAnswer);
  return answer;
};

export default runEven;
