// //array length
// var car = ["toyota" , "bmw" , "audi"]

// console.log(car.length-1);

// let arr = new Array
// console.log(car);
// arr.push("mango","apple","orange","banana")
// console.log(arr);


// //display value stored in array ("of" is used)
// var car = ["toyota" , "bmw" , "audi"]

// for(item of car){
//     console.log(item);
// }

// // //display index value using ("in" used)
// for(index in car){
//     console.log(index);
// }

// //display index value using normal for loop

// for(let i=0; i<=car.length-1; i++){
//     console.log(i);
// }




// /// // wap to check element 2 is prasent in the array

// var array = [10, 15, 85, 3, 7, 82, 2, 9, 6]

// let count=0

// for(item of array){
//     count++
// if(item==2){
//     console.log("2 is prasent");
//     break
// }
// else{
//     continue
// }
// }

// binary serch
var array = [10, 15, 85, 3, 7, 82, 2, 9, 6]

let sortedarray= array.sort((a,b)=>a-b)

let first = 0;
let last =array.length-1
console.log(last);
const check = 2
let flag=0

let loop=0;

while(first<=last){
    loop++;
    let mid = Math.floor((first+last)/2)
    if(check==sortedarray[mid]){
        flag++
        break
    }
    else if(sortedarray[mid]>check){
        last=mid-1
        console.log("last");
    }
    else {
        first=mid+1
        console.log("first");
    }
}

console.log(flag==1?"number prasent":"no number prasent");
console.log(loop);

