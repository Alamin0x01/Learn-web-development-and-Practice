// 8 ways to get Undefine

// 1. variable that is not initialized will give undefined

let first;
// console.log (first);

// 2. function with no return

function second(a, b) {
  const total = a + b;
}
const result = second();

// console.log(result);

// 3. parameter that is not passed will be undefined

function third(a, b, c, d) {
  const total = a + b + c + d;
  console.log(a, b, c, d);
}
// third(2, 5);

// 4. if return has nothing on the right side will return undefined

function noNegative(a, b) {
  if (a < 0 || b < 0) {
    return;
  }
  return a + b;
}
const total = noNegative(2, 5);
// console.log(total);

// 5. property that doesn't exists on an object will give you undefined

const fifth = { id: 2, name: "ponchom", age: 40 };
// console.log(fifth.age, fifth.salary);

// 6 accessing array elements outside of the  index range
// 7. deleting an element inside an array
const sixth = [33, 34, 4, 55, 66, 45];
// delete sixth [1];
// console.log(sixth[1], sixth[5], sixth[200]);

// console.log(sixth);

// 8. set a value directly to undefined
const eighth = undefined;
const ninth = null;
const data = { results: [], updated: null };
// console.log(typeof undefined);
console.log(typeof null);
