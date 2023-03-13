// 1. Array destructuring
const numbers = [44, 55];
// const x =numbers[0];
// const y = numbers[1];

// const [x, y] = [44,55]
const [x, y] = numbers;

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

// console.log(boxify(44,34));

// const [first, second] =[44,55]
const [first, second] = boxify(44, 55);
// console.log(boxify(44,34));

const student = {
  name: "Mr. Been",
  age: 32,
  movies: ["king man", "super man"],
};

const [firstMovie, secondMovie] = student.movies;

//   Object destructuring
const { name1, age1 } = { name: "alu", age: 24 };
const { name, age } = { id: 33, name: "alu", age: 24 };

const employee = {
  ide: "vs code",
  designation: "developer",
  machine: "mac",
  languages: ["html", "css", "js"],
  specifications: {
    hight: 33,
    weight: 44,
    address: "dhaka",
    drink: "water",
    watch: {
      color: "black",
      price: 555,
      brand: "apple",
    },
  },
};

const { machine, ide } = employee;
const { weight, address } = employee.specifications;
const aaa = ({ brand } = employee?.specifications?.watch);

console.log(aaa);
