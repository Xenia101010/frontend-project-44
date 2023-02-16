import { mio, randnum } from '../index.js';

const game = 'What is the result of the expression?';
const game2 = () => {
  let answer = '';
  let quest = '';
  const a = randnum(1, 3);
  const num1 = randnum(1, 100);
  const num2 = randnum(1, 100);
  switch (a) {
    case 1:
      quest = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case 2:
      quest = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case 3:
      quest = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
    default:
  }
  return [quest, String(answer)];
};
const gameCalc = () => mio(game, game2);

export default gameCalc;
