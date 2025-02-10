import { getRandomNumber, getUserAnswer } from '../utils.js';

const isPrime = (num) => {
  if (num < 2 && num % 2 === 0) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const runPrime = () => {
  const currentNumber = getRandomNumber(1);
  const correctAnswer = isPrime(currentNumber) ? 'yes' : 'no';

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const answer = getUserAnswer(String(currentNumber), correctAnswer);
  return answer;
};

export default runPrime;
