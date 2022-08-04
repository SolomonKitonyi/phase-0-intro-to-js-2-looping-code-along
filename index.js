// Code your solutions in this file
const names = ["Ada", "Brendan", "Ali"];
let newArray = [];

function writeCards (arr, event) {
    for(let count=0;count < arr.length;count++) {
        newArray.push(`Thank you, ${arr[count]}, for the wonderful ${event} gift!`)
    }
    return newArray;
}
function countDown(num) {
    for(let count=num; count >= 0; count--){
        console.log(count);
    }
}