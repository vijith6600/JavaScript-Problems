// average of 5 subject

// var maths = 20
// var english = 40
// var hindi = 70
// var tamil = 90

// const averageMark = Math.floor(maths+english+hindi+tamil / 4);
// console.log(averageMark);




// // Concantinate 2 string

// var firstName="John"
// var LastName="Doe"

// console.log(`${firstName} ${LastName}`);



// // find the reminder divided by 5

// var num = 166

// console.log(`The reminder  when ${num} is divided by 5 is = ${num % 5}`);




// // You are given an array:

// var fruits = ['Apple', 'Banana', 'Orange'];

// // a) Find the index of ‘Banana’ and replace ‘Banana’ with ‘Mango’.
// // b) Remove ‘Orange’ and add ‘Watermelon’.

//  console.log(fruits.indexOf('banana'));





// // find largest number

// a=10
// b=9
// c=2

// if(a>b && a>c){
//     console.log("Largest Number is "+a)
// }
// else if(b>c){

//     console.log("Largest Number is "+b)
// }
// else{
//     console.log("largest number is "+c);
// }




// // check the traingle is isosuless or not

// side1 =80
// side2=80
// side3=80

// if(side1==side2 && side1==side3 && side2==side3){
//     console.log(" is a equalatral trangle");
// }
// else if(side1==side2 || side1==side3 || side2==side3){
//     console.log("trangle is isosuless");
// }

// else{console.log("Traingle is not ispsulus");}





// // Print all number bitween 58 and 98

// let start = 58;
// let end = 98;
// for(let i=start;i<=end;i++){
//     console.log(i);
// }

// // print all even number bitween 10  to 40

// let start = 10
// let end = 20
// for(let i=start;i<=end;i++) {
//     i%2==0?console.log(`${i}`):null
// }



// // print all the odd number bitween number

// start=1
// end=10

// for(i=start;i<end;i++){
//     (i % 2 != 0) ? console.log(i) : null
// }




// // Create a function called 'fullName' that takes the first part of your name and the last part of your name as parameters. 
// // And it will return your full name as the output by concatenating the two parts of your name.
// //  For example, given hablu and kanto as input parameters, hablu will return kanto as output.

// function fullName(firstNmae,lastName){
//     return console.log(`${firstNmae} ${lastName}`);
// }


// fullName("vijith","vijayan")




// Write a function that if you give a number as input it will square that number and return that square.

// That is, if you give 5 as input, it will get 25 as output squared.

// function square(number){
//     return console.log(number**2);
// }

// square(2)




// // Write a function called foo() which prints "foo" and a function called bar() which prints "bar".
// //  Call function bar() in the foo() function after printing. What will be the output?
// //   Now call the foo() to see the output.

// function  foo(){
//     console.log('foo');
//     Bar()
// }

// function Bar(){
//     console.log('Bar')
// }

// foo()



// // Write a function called make_avg() which will take an three integers and return the average of those values.

// function average(num1,num2,num3){
//     return (num1+num2+num3)/3;
// }
// console.log(average(4,66,8));



// // Challenging: Write a function called make_avg() which will take
// //  an array of integers and the size of that array and return the average of those values.

// function make_avg(array){
//     sum=0;
// for(let item of array){
//     sum+=item;
// }
// return  sum/array.length;
// }

// number=[2,4]

//  console.log(make_avg(number));
