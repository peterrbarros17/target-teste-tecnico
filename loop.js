// 3 - Loop

const loop = () => {
  let index = 12;
  let sum = 0;
  let k = 1;

  while (k < index) {
    k = k + 1;

    sum = sum + k;
  }
  return sum;
};

const res = loop();

console.log(res);
