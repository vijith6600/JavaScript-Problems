// // 
// **Write an arrow function where it will do the following:**

// 1. Square each array element
// 2. Calculate the sum of the squared elements
// 3. Return the average of the sum of the squared elements

// **Print the result.**


const squareSum = (array)=>{
    sum=0;
    for(item of array){
      sum+= item**2
    }
    return sum/array.length
}

const numbers = [10, 13, 45, 46];

console.log(squareSum(numbers));