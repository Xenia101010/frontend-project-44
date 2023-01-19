import readlineSync from 'readline-sync';

const lox = () => {
  const name = readlineSync.question('May I have your name? ');
  return console.log(`Hello,${name}!`);
};

export default lox;
