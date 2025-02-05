import readlineSync from 'readline-sync';

const isAnswerCorrect = (question, correctAnswer) => {
  const answer = readlineSync.question(`Question: ${question} \nYour answer: `);
  if (correctAnswer === answer) {
    console.log('Correct!');
    return [true, answer];
  }
  return [false, answer];
};

const getRandomNumber = (max = 100) => Math.floor(Math.random() * (max + 1));

export { isAnswerCorrect, getRandomNumber };
