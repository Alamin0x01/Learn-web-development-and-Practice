
/*
truthy:
1. true
2. any number (+ve, -ve) will be truthy other then 0
3. any string other than empty string
4. "0", "false"
falsy:
1. false
2. 0
3. '' (empty string)
*/
const x = 0;
if(x){
    console.log('value of x is truthy');
}
else {
    console.log ('value of x is falsy');
}

// optional
// check falsey

// if (!y){
//     console.log('value is falsy')
// }
// const z = { class: 9};

// check true
// if(!!x){
//     console.log('value is truthy');
// }
