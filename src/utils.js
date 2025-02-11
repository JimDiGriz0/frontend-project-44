/* eslint-disable object-curly-newline */

const isEven = (num) => num % 2 === 0;

const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

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

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  if (num % 2 === 0) {
    return num === 2;
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

export { getRandomNumber, getGcd, getRandomOperator, isEven, isPrime };
