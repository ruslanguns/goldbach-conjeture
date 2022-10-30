/**
 * Check whether not a number is prime
 *
 * There are ignored numbers:
 * 0: Zero is neither prime nor composite. Since any number times zero
 *    equals zero, there are an infinite number of factors for a
 *    product of zero. A composite number must have a finite number
 *    of factors.
 * 1: Using this definition, 1 can be divided by 1 and the number itself,
 *    which is also 1, so 1 is a prime number. However, modern
 *    mathematicians define a number as prime if it is divided by exactly
 *    two numbers. For example: 13 is prime, because it can be divided by
 *    exactly two numbers, 1 and 13.
 * 4: The number 4 is not prime, since it has three divisors ( 1 , 2 , and 4 ),
 *    and 6 is not prime, since it has four divisors ( 1 , 2 , 3 , and 6 ).
 *    Definition: A composite number is a whole number with more than two
 *    integral divisors. So all whole numbers (except 0 and 1 ) are either
 *    prime or composite.
 * @param n number to validate
 * @returns if it's a prime number
 */
const isPrimeNumber = (n: number) => {
  const ignoredNumbers = [0, 1, 4];
  if (ignoredNumbers.includes(n)) return false;

  for (let x = 2; x < n / 2; x++) {
    if (n % x === 0) return false;
  }

  return true;
};

/**
 * Get the primes numbers under a number
 * @param n number to calculate
 * @returns Array of primes number bellow n
 */
const getPrimeNumbers = (n: number) => {
  let primes: Array<number> = [];

  for (let i = 0; i < n; i++) {
    if (isPrimeNumber(i)) primes.push(i);
  }

  return primes;
};

/**
 * From a even number we will get the primes that when being added gives n
 * @param n number to calculate (must me even number)
 * @returns Array of an array of numbers that when added give n
 */
const getSumOfPrimesFromANumber = (n: number) => {
  if (n % 2 !== 0) return [];

  const primesOfN = getPrimeNumbers(n);
  const res: Array<number[]> = [];

  for (let i = 0; i < primesOfN.length; i++) {
    for (let j = 0; j < primesOfN.length; j++) {
      if (primesOfN[i] <= primesOfN[j] && primesOfN[i] + primesOfN[j] === n) {
        res.push([primesOfN[i], primesOfN[j]]);
      }
    }
  }

  return res;
};

/**
 * Get all even number within a range
 * @param fromNumber From what number it will find even number
 * @param toNumber To what number it will find the even number to
 * @returns an array of even numbers
 */
const getAllEvenNumberInARange = (fromNumber: number, toNumber: number) => {
  const res: Array<number> = [];

  for (let i = 0; i < toNumber; i++) {
    if (i > fromNumber && i % 2 === 0) res.push(i);
  }

  return res;
};

/**
 * Is Goldbash Conjeture Valid from a number
 * All even number greater than 2, can be written as the sum of two prime numbers
 *
 * @param n number to calculate
 * @returns if it is valid
 */
const isGoldBashConjetureValid = (n: number) => {
  if (n <= 2 || n % 2 === 1) {
    throw new Error("Can only be calculated with even numbers above 2");
  }

  return getSumOfPrimesFromANumber(n).length > 0;
};

/**
 * Loops until reach the base number to get the all possibilities to match the goldbash conjeture.
 * @param baseNumber Base number represent the top for the loop process
 * @returns false if it finds that the conjeture is wrong.
 */
const validateGoldbashFromABase = (baseNumber: number) => {
  const evens = getAllEvenNumberInARange(2, baseNumber);
  let isValid = true;

  for (let i = 0; i < evens.length; i++) {
    if (!isGoldBashConjetureValid(evens[i])) {
      isValid = false;
      break;
    }
  }

  return isValid;
};

const res = validateGoldbashFromABase(10000);

console.log(res);
