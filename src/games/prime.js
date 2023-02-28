import { mio, yesNo } from '../index.js';

const prime2 = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const prime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const length = 25;

const jo = () => yesNo(prime2, length);

const prime3 = () => mio(prime, jo);

export default prime3;
