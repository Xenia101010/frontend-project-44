import readlineSync from 'readline-sync';

const kaka = console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
const lox = () => {
  console.log(`Hello,${name}!`);
};

export { kaka, name, lox };
