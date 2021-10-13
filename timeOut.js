const num1 = 1111;
const num2 = 22222;
const num3 = 33333;

console.log(num1);

// setTimeOut do the thing only one time and after the all the thing done.
setTimeout(() => {
    console.log('doIt')
},2000);

//setInterval do the thing again and again.
setInterval(() => {
    console.log('do it again and again.')
}, 2000);

console.log(num3);