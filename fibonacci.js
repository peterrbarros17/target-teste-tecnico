// 1 - Fibonacci

const fibonacci = (number) => {
  let a = 0;
  let b = 1;
  let next = 0;

  while (next < number) {
    next = a + b;
    a = b;
    b = next;
  }

  if (number === 0 || number === 1 || number === next) {
    console.log(number + " pertence a sequência.");
  } else {
    console.log(number + " não percente sequência. ");
  }
};

const res = fibonacci(21);

console.log(res);
