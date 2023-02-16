import { mio, randnum } from '../index.js';

const games = 'Answer "yes" if the number is even, otherwise answer "no".';
const games2 = () => {
  const num = randnum(1, 100);
  const quest = (`${num}`);
  let answer = '';
  if (num % 2 === 0) {
    answer = 'yes';
  }
  if (num % 2 !== 0) {
    answer = 'no';
  }
  return [quest, String(answer)];
};
const gameEven = () => mio(games, games2);

export default gameEven;
