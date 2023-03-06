console.log(1);
console.log(2);

// ++x vs x++
// /i++ vs ++i 

let num = 0;
const intervalId  =setInterval(
    ()=>{console.log(++num)
    if (num ===10)
    clearInterval(intervalId);
    }
)