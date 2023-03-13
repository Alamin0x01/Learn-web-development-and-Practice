const numbers = [867, 45, 456, 56, 76, 68];

const student = {
  name: "Mr. Been",
  age: 32,
  movies: ["king man", "super man"],
};

// 1. template String ......
const about = `My Name is ${student.name} age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[1]} `;
console.log(about);

// 2 . array function
const getFiftyFive = () => 55;
const addSixtyFive = (num) => num + 65;
const isEven = (x) => x % 2 == 0;
const addTree = (x, y, z) => x + y + z;
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// spread operator

const bdTaka = [66, 86, 45, 456, 56, 76, 68];
const newTaka = [...bdTaka];

// create a new array from an older array and add an element
const currentBdTaka = [...bdTaka, 55];

bdTaka.push(77);
bdTaka.push(77);
bdTaka.push(77);

console.log(bdTaka);
console.log(newTaka);
console.log(currentBdTaka);
