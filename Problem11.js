// **Write an arrow function where it will do the following:**
// 1. It will take two array inputs
// 2. Combine the two arrays and assign them in a new array
// 3. Find the maximum number from the new array and return the
// result

// **Print the result.**

const LargeNmumber = (array1,array2)=>{
    const newArray = array1.concat(array2);
    return Math.max(...newArray)
}


const numberListOne = [10, 20, 30, 50, 512, 101375];
const numberListTwo = [60, 70, 80, 19, 100, 1375];


console.log(LargeNmumber(numberListOne,numberListTwo));

