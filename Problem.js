// // Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30]
// // as the input parameter and will return the sum of the odd numbers.

// var array = [0, 1, 2, 3, 4, 5]

// function findOddSum(arr){
//     sum=0;
//     for(i of arr){
//        i%2!=0?sum+=i:null;
//     }
//     return  sum;
// }

// console.log(findOddSum(array));




// // You will be given Celsius as input to the function. 
// // You calculate the temperature and convert it to Fahrenheit and return the output


// function CelsiusToFarenheat(Celsius) {
//     let farenheit = (Celsius * 9/2) + 32
//     return `${farenheit} degrees`
// }

// function fToc(f){
//     return c = (f-32)*9/5
// }

// console.log(CelsiusToFarenheat(0))

// console.log(fToc(32))




// // calculate interest 

// function calculateInterest(amound,rate){
//     let interest = amound*rate/100
//     return `The Interest is ${interest}`
// }

// console.log(calculateInterest(1000,5))





// Compound interest Function
function compoundIntrest(capital,time,rate){
    let amound =capital*( Math.pow((1+rate/100),time));
    let interest = amound - capital
    return {interest:`interest for ${time} Year is ${interest}`,
    total:`Total After ${time} Year Compound interest is ${amound}`
}
}


let obj = compoundIntrest(1000,1,5);
console.log(obj.interest)
console.log(obj.total)