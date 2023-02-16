import { mio, randnum } from '../index.js';

const ho = 'Find the greatest common divisor of given numbers.';
const ho2 = () => {
  const num1 = randnum(1, 100);
  const num2 = randnum(1, 100);
  const quest = (`${num1} ${num2}`);
  let answer = 0;
  for (let i = 0; i <= Math.min(num1, num2); i += 1) {
    if (Math.min(num1, num2) % i === 0) {
      if (Math.max(num1, num2) % i === 0) {
        answer = i;
      }
    }
  }
  return [quest, String(answer)];
};
const gameGcd = () => mio(ho, ho2);

export default gameGcd;
