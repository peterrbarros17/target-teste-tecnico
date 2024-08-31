// 2 - String

const countLetters = (str, letter) => {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let initialLetter = letter;

    if (initialLetter === str[i]) {
      sum += 1;
    }
  }

  return sum;
};

const myString = "pharmacy";

const res = countLetters(myString, "a");

console.log("A quantidade de letra que se repetem nessa palavra são " + res);
