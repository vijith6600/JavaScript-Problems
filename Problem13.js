// ## Practice Problem 49 **reduce()**

// You have **an array [ 1, 9, 17, 22 ].** Add the all elements
// of this array and give output. Do this using `for loop` &
// `array.reduce()` method.


const array = [ 1, 9, 17, 22 ]

const arraySum = (array).reduce((a,b) =>a+b)
console.log("The sum is: ", arraySum);