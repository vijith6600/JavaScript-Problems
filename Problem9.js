
// **Write an arrow function where it will do the following:**

// 1. It will take an array where the array elements will be the
// name of your friends

// 2. Check if the length of each element is even, push elements
// with even length to a new array and return the result
// Print the result.


const checkEvenName = (array)=>{
    let evenlengthName=[];
    for(let item of array){
       item.length % 2==0 ? evenlengthName.push(item):null;
    }
    return console.log(evenlengthName);
}

const friendsName = ["Shourav", "Nirob", "Alal", "Jala", "Ashim", "Shipta", "Pritom", "Arko", "Alu"];

checkEvenName(friendsName)