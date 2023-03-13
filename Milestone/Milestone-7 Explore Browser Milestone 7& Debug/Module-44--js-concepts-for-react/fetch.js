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

// 2. fetch
// fetch('url')
// .then(res=> res.json())
// .then(data=>console.log(data));

// Keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [45, 453, 32, 25, 64, 43, 23, 55, 554];

numbers.forEach((num) => num * 2);

// for of on array like object
//loop on an object using for in

//add or remove from an array
const products = [
  { name: "laptop", price: 90000, brand: "hp", color: "silver" },
  { name: "phone", price: 6000, brand: "vivo", color: "silver" },
  { name: "lgp", price: 400, brand: "wsl", color: "rad" },
  { name: "watch", price: 5000, brand: "apple", color: "black" },
];
const newProduct = { name: "webcam", price: 4000, brand: "HP", color: "rad" };

//    copy products Array and then add newProduct
const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter((p) => p.name !== "phone");
// phone K remove Kora hoiche
