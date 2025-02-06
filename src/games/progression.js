import { isAnswerCorrect, getRandomNumber } from '../index.js';
import { getUserName } from '../cli.js';
const userName = getUserName();

const getProgressionDiff = () => {
  let diff = getRandomNumber(20);
  if (diff === 0) {
    diff += getRandomNumber(9);
  }
  return diff;
};

const progressionGame = () => {
  let correctAnswersCount = 0;
  console.log(`What number is missing in the progression?`);
  while (correctAnswersCount < 3) {
    const progressionArr = [];
    const currentDiff = getProgressionDiff(20);
    const startNum = getRandomNumber(40);
    const hideNum = getRandomNumber(9);
    let question = '';
    let correctAnswer = '';

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
    const answer = isAnswerCorrect(question, correctAnswer);
    if (answer[0]) {
      correctAnswersCount += 1;
    } else {
      console.log(
        `'${answer[1]}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return;
};
export { progressionGame };
