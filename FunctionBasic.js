// add two number
function add(n1,n2){
    return n1+n2
}
console.log(add(5,5));


// Subtract Two Number
function sub(n,n){
    return n-n
}
console.log(sub(5,5));


// Function to find Exponent of a number
function exp(num){
    return num**num
}
console.log(exp(3));


const exp1 = (num)=>num**num
console.log(exp1(2));


// wite a function to check odd or even
function check(num){
    return num%2==0?`${num} is even` : `${num} is odd`
}
console.log(check(6));


// wite arrow  function to check odd or even

const check2 = (num) => num%2==0?`${num} is even` : `${num} is odd`
console.log(check2(5));




// Sunstrac largest value  to smallest value using arraow function
const subfromlarge = (n1,n2)=>n1>n2?n1-n2:n2-n1;
console.log(subfromlarge(3,6));


// function to validate phone number length
const validate = (number)=>number.length==10 ?`number valid`:`number invalid`;
console.log(validate("1111111111"));



// validate gmail using endwith using arrow function
const gmailcheck = (mail)=>mail.endsWith("@gmail.com")? "valid" : "invalid";
console.log(gmailcheck("aniket@gmail.com"));



// Check the first letter is caps or not

function checkCaps(string){
    return string.charCodeAt(0)>=65 && string.charCodeAt(0)<=90 ? `The Word start with uppercase`:`Word is lowercase`
}

console.log(checkCaps('aniket'));