import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
const fun1 = () => {
  console.log(`Hello,${name}!`);
};

export { name, fun1 };
