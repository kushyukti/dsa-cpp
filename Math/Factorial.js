//  Factorial

//  Given an integer n , find the factorial of that integer

//  the factorial of a non-negative integer 'n', denoted n! is the product of all positive integers less than or equal to 'n'

//  factorial of 0 = 1
// fac(4) = 4*3*2*1 = 24

function factorial(n) {
  let x = 1;

  for (let i = 1; i <= n; i++) {
    x = x * i;
  }
  return x;
}

console.log(factorial(4));
console.log(factorial(5));
