// always use ===
// equal comparison doesnt work for non-primitive
const first= [34, 33, 55];
const second = [34, 33, 55];
if (first=== second){
    console.log('values are equal')
}
else{
    console.log('values are not equal')
}