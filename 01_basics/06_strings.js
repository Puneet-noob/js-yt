const name = "hitesh"
const repoCount = 22

// console.log(name + repoCount + " value")

//string interpolation
console.log(`My name is ${name.toUpperCase()} and repo count is ${repoCount} `)

const gameName = new String("Apex Legends")

console.log(gameName[2])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('x'))

const newStr = gameName.substring(0,3)
console.log(newStr)

const anotherStr = gameName.slice(-4,12)
console.log(anotherStr);

const newStrOne = "    javscr    "
console.log(newStrOne);
console.log(newStrOne.trim());

const url = "https://tc39.es/ecma262/#sec-%20string.prototype.touppercase"
console.log(url.replace("%20",""));
console.log(url.includes("tc39"));
console.log(url.includes("tc49"));

// convert this string into an array based on '-'
const rcGame = "bash-git-hub"
console.log(rcGame.split("-"))
