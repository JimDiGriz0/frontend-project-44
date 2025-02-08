import { getRandomNumber, getUserAnswer } from '../utils.js';

const getGcd = (firstNum, secondNum) => {
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
  const firstNum = getRandomNumber(1, 100);
  const secondNum = getRandomNumber(1, 100);

  const gcd = getGcd(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;
  console.log('Find the greatest common divisor of given numbers.');
  const answer = getUserAnswer(question, String(gcd));
  return answer;
};

export default runGcd;
