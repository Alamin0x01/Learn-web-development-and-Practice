// 1. How to declare a variable using let and const
const fatherName = "fine";

// Jai function er data jokhon 1 ta hobe tokhon const  -------- r ---- ar data jokhon akadik hote pare tokhon let deta korte hoi.... and var avoid korai vlo...

let season = "rainy";
season = "winter";

// 2. conditions
// 6 basic conditions : > , <, ===, !==,<=, >=
// multiple conditions : &&, ||
if (fatherName === "fine" || season === "rainy") {
} else if (fatherName === "Fine") {
} else {
}

// 3. Array declare
// index,
// length, push,
const numbers = [867, 45, 456, 56, 76, 687];
numbers[0] = 54;

//  4. for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  // console.log(number);
}

// 5 . function

function multiple(num1, num2) {
  const result = num1 * num2;
  return result;
}

const output = multiple(34, 87);

// 6. object
//  3 ways to access property by name
const student = {
  name: "Mr. Been",
  age: 32,
  movies: ["king man", "super man"],
};

const myVariable = "age";

// direct by property---
console.log(student.age);





// access via property name string
console.log(student["age"]);

// access via property name in a variable
console.log(student[myVariable]);
