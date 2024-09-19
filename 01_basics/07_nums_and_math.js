const score = 4090
// console.log(score);

const scr = new Number(3450.98)
// console.log(scr);

// console.log(scr.toString().length)
// console.log(scr.toFixed(1));

const otherNum = 142.39987
// console.log(otherNum.toPrecision(4));

const bigNum = 1000000000
// console.log(bigNum.toLocaleString('en-IN'));

// ++++++++++++++ MATHS ++++++++++++++ 
// console.log(Math)
// console.log(Math.abs(-4)) //converts negative to positive, not vice-versa
// console.log(Math.round(4.6));
// console.log(Math.ceil(5.1)); // consider ceiling value
// console.log(Math.floor(7.9));
// console.log(Math.min(1,9,0,88))
// console.log(Math.max(1,9,0,88))

console.log(Math.random())  // random number between 0 and 1
console.log(Math.floor(Math.random()*10+1)) // +1 because the random value can be 0.041 something

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)
