import readlineSync from 'readline-sync';
import { name, lox } from './cli.js';

const kuk = 3;
const mio = (ho, ho2) => {
  lox();
  console.log(`Hello, ${name}!`);
  console.log(ho);
  for (let i = 0; i < kuk; i += 1) {
    const [question, answer] = ho2();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
const randnum = (num1, num2) => {
  const num = Math.round(Math.random() * (num2 - num1) + num1);
  return num;
};
export { mio, randnum };
