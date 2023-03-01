// array like Object
function sum(a,b,c){
    const args =[ ... arguments];
    // console.log(args);
    const result =a +b+c;
    return result;
}
// console.log(arguments);
const total = sum (34, 44,55, 66,44 ,444,);
// console.log(total);
console.log(sum.length);