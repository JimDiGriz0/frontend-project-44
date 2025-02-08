import greetings from '../cli.js';
import isAnswerCorrect from '../index.js';
import getRandomNumber from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

const userName = greetings();

const runPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const currentNumber = getRandomNumber(2);
    const correctAnswer = isPrime(currentNumber) ? 'yes' : 'no';
    const answer = isAnswerCorrect(currentNumber, correctAnswer);
    if (answer[0]) {
      correctAnswersCount += 1;
    } else {
      console.log(`'${answer[1]}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runPrime;
