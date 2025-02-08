import greetings from './cli.js';

const runGame = (game) => {
  const userName = greetings();
  let winsCount = 0;
  while (winsCount < 3) {
    const isCorrect = game();

    if (isCorrect[0] === true) {
      winsCount += 1;
    } else {
      console.log(`'${isCorrect[2]}' is wrong answer ;(. Correct answer was '${isCorrect[1]}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
