// write js functio to reverse astring

// function reverse(str){
//     let reverseString=""
//     for(let i=str.length-1; i>=0; i--){
//         reverseString+= str[i]
//     }
//     return console.log(reverseString);
// }
// reverse("hello")



// wite a function to reverse a number
function reverseNum(num){
    num = num.toString();  
    let reversedNum = '';   
    for (let i = num.length - 1; i >= 0; i--) {
        reversedNum += num[i];
    }
    return parseInt(reversedNum);
}

 console.log(reverseNum(123));
