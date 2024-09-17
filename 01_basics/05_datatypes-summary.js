// The way the data is stored in the memory, in that way the categorization is done in Js. Primitive and non-primitive

// Primitive
// 7 types : String, Number, Bigint, Boolean, null, undefined, symbol

const score = 100
const scoreVal = 100.9

const isLoggedIn = false
const outsideTemp = null

let userEmail = undefined
let userEmailX;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 2392183981289122n


// Reference(Non-primitive)
// array, objects, functions

const alphas = ["a","b","c"]

let myObj = {
    name: "hitesh",
    age: 22
}

const myFunc = function(){
    console.log("Function called");
}

console.log(typeof alphas)
console.log(typeof myObj)
console.log(typeof myFunc)