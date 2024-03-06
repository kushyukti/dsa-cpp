//  Power of two

//  give a positive integer , n determine if the number is a power of 2 or not

//  an integer is a power of two if there exists an integer 'x' such that 'n' === 2^x

//  isPowerOfTwo(1) = true      (2^0)
//  isPowerOfTwo(2) = true      (2^1)
//  isPowerOfTwo(5) = fales

// Pseudo Code
// n =8
// 8/2 = 4 (remainder = 0)
// 4/2 = 2 (remainder = 0)
// 2/2 = 1 (remainder = 0)

// if remainder is not 0 in any step, n is not a power of two
// if remainder is 0 and n comes down to 1 eventually , n is a power of two

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n = n / 2;
  }
  return true;
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));

// in bimary a number that is power of two ends with 0 except of 1

//  1  -   1
//  2  -   10
//  3  -   100
//  4  -   1000

//

function bitwiseIsPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(bitwiseIsPowerOfTwo(1));
console.log(bitwiseIsPowerOfTwo(2));
console.log(bitwiseIsPowerOfTwo(8));
