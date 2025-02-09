/* eslint-disable object-curly-newline */
import readlineSync from 'readline-sync';

const getRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;

const getUserAnswer = (question, correctAnswer) => {
  const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);

  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return [true, correctAnswer, userAnswer];
  }

  return [false, correctAnswer, userAnswer];
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};

const isEven = (num) => num % 2 === 0;

export { getRandomNumber, getUserAnswer, getRandomOperator, isEven };
