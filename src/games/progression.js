import { mio, randnum } from '../index.js';

const gamerule = 'What number is missing in the progression?';
const prog = () => {
  const start = randnum(1, 20);
  const interval = randnum(2, 10);
  const length = 10;
  const arr = [];
  let jo = start;
  for (let i = 0; i < length; i += 1) {
    arr.push(jo);
    jo += interval;
  }
  return arr;
};
const prog2 = () => {
  const hidden = randnum(1, 9);
  const arr = prog();
  const answer = arr[hidden];
  arr[hidden] = '..';
  const quest = arr.join(' ');
  return [quest, String(answer)];
};
const progression = () => mio(gamerule, prog2);

export default progression;
