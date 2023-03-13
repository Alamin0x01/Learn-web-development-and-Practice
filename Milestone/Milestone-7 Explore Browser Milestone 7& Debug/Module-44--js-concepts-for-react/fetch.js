// 1. JSON     => stringify, parse

const student = {
  name: "Mr. Been",
  age: 32,
  movies: ["king man", "super man"],
};

//   normal js file to JSON
const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

// JSON to js file
const studentObj = JSON.parse(studentJSON);
console.log(studentObj);
