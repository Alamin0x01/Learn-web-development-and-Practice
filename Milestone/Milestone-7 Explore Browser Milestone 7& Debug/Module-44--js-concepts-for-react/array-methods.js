// 1. map
const products = [
  { name: "laptop", price: 90000, brand: "hp", color: "silver" },
  { name: "phone", price: 6000, brand: "vivo", color: "silver" },
  { name: "lgp", price: 400, brand: "wsl", color: "rad" },
  { name: "watch", price: 5000, brand: "apple", color: "black" },
];

const brands = products.map((product) => product.brand);

// console.log(brands);

const prices = products.map((product) => product.price);

// console.log(prices);

// 2. forEach
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));

products.forEach((product) => {
  // akhan get ElementbyId apply kora jai
});

// 3. filter
const cheap = products.filter((product) => product.price <= 5000);
// console.log(cheap);

const specificName = products.filter((p) => p.name.includes("n"));
// console.log(specificName);

// 4. find

const special = products.find((p) => p.name.includes("n"));

console.log(special);
