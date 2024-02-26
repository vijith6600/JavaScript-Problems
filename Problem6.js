// Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of the odd numbers.

function oddSum(array){
    let oddSum=0;

    for (let item of array){
        if(item % 2 != 0){
            oddSum+=item;
        }
    }
    return oddSum
}

var value=[2,44,5,3,3,7,8,8,5,44,66]

console.log(oddSum(value));