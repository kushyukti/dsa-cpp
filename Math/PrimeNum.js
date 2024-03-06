//    Prime Number
//  Problem 0 Give natural number n, determine if the number is prime or bot

//  A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

function isPrime(n) {
  if (n === 2) {
    return true;
  }

  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(6));
console.log(isPrime(13));
console.log(isPrime(83));

//  optimized primality test
//  integers larger than the square root do not need to be checked because , whenever n = a*b , one of the two factors a and b is less than or equal to the sqaure root of n

// n = 24, a = 4 , b = 6

// sqaure root of 24 is 4.89

// 4 is less than 4.89
// a is less than suare root of n

function optimezedIsPrime(n) {
  if (n === 2) {
    return true;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(optimezedIsPrime(6));
console.log(optimezedIsPrime(13));
console.log(optimezedIsPrime(83));
console.log(optimezedIsPrime(24));
