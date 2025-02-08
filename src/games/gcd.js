import greetings from '../cli.js';
import isAnswerCorrect from '../index.js';
import getRandomNumber from '../utils.js';

const userName = greetings();

const gcd = (firstNum, secondNum) => {
  let a = firstNum;
  let b = secondNum;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const runGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    const firstNum = getRandomNumber(1);
    const secondNum = getRandomNumber(1);
    const divider = gcd(firstNum, secondNum);
    const answer = isAnswerCorrect(`${firstNum} ${secondNum}`, String(divider));
    if (answer[0]) {
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer[1]}' is wrong answer ;(. Correct answer was '${divider}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGcd;
