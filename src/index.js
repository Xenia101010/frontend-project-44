import readlineSync from 'readline-sync';
import { name, fun1 } from './cli.js';

const kuk = 3;
const mio = (ho, ho2) => {
  fun1();
  console.log(ho);
  for (let i = 0; i < kuk; i += 1) {
    const [question, answer] = ho2();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${answer}'`);
      return console.log(`Let's try again, ${name}!`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
const randnum = (num1, num2) => {
  const num = Math.round(Math.random() * (num2 - num1) + num1);
  return num;
};
const yesNo = (game, length) => {
  const number = randnum(1, length);
  const question = `${number}`;
  const answer = game(number) ? 'yes' : 'no';
	return [question, String(answer)];
};

export { mio, randnum, yesNo };
