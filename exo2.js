const [node, path, ...arguments] = process.argv

let total = 0;
arguments.forEach((argument) => total += Number(argument))
console.log(total)

// Ou encore mieux :
// console.log(arguments.reduce((total, argument) => total + Number(argument), 0))

