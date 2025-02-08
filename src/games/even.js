import greetings from '../cli.js';
import isAnswerCorrect from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const userName = greetings();

const runEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const currentCheckNum = getRandomNumber();
    const correctAnswer = isEven(currentCheckNum) ? 'yes' : 'no';
    const answer = isAnswerCorrect(currentCheckNum, correctAnswer);
    if (answer[0]) {
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer[1]}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runEven;
