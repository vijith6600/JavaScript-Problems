// // combine 2 array using spred operator

arr1=[2,5,8,65,5,6,67]
arr2=[9,87,76,44,22,55]

console.log([...arr1,...arr2]);







// ## Who is the tallest?
// Tom and his friends are participating in the "Who is the tallest?" competition. As per the name, the person with the highest height will be the winner. Can you find who is the tallest among Tom and all of his friends?

// **Input: The input line can have multiple integer numbers, xi (The height of ith friend in cm).**

// **Output: Print the height of the tallest friend (cm).**

// 1. Sample Input-1: 157 134 188
// - Sample Output-1: 188
// 2. Sample Input-2: 167 100 120 165 137
// - Sample Output-2: 190


function tallest(height){
    let winner = Math.max(...height)
    return `winner is ${winner}`
}

height=[2,33,44,556,533,422]

console.log(tallest(height));

