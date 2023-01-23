import readlineSync from 'readline-sync';
import { kaka, name, lox } from './cli.js';

const games = () => {
  console.log(kaka);
  lox();
  let mama = '';
  const anser = ('Answer "yes" if the number is even, otherwise answer "no".');
  console.log(anser);
  let i = 0;
  while (i < 3) {
    const matan = () => Math.floor(Math.random() * 100);
    const dog = matan();
    console.log(`Question: ${dog}`);
    const question = readlineSync.question('Your answer:');
    if (dog % 2 === 0) {
      mama = 'yes';
    } else {
      mama = 'no';
    }
    if (question === mama) {
      console.log('Correct!');
    } else {
      return console.log(`'${question}' is wrong answer ;(. Correct answer was '${mama}'. Let's try again, ${name}!`);
    }
    i += 1;
  }
  return console.log(`Congratulations, ${name}!`);
};
export default games;
