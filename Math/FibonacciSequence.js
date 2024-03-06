//          Fibonacci Sequence

//  Problem - Given a number n , find the first n elements of fibonacci sequence

//  the first two numbers in the seq are 0 and 1

//  fib(2) = [0,1]
//  fib(3) = [0,1,1]
//  fib(7) = [0,1,1,2,3,5,8]

function fibonacci(n) {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
