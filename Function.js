// You are in a hurry to go to your school on time. 
// But when you are crossing the road, the traffic signal is red coloured. 
// In this situation, if you try to cross the road, you may be in danger.
// If you notice a yellow coloured traffic signal, you should stop. 
// If you notice a green coloured traffic signal, you should cross the road. 
// So write a JS code, where there is a variable called signal.
//  Its value can be green, yellow or red & we will get different activities 
//  as output depending on the variable. So, hurry up

// siganal="gree"


// function signalWait(signal){
//     signal=="red"||signal=="yellow"?console.log("Stop! Cross the road when signal turn green"):console.log("good to cross the road");
// }
// signalWait(siganal)




/* Write a function called leapYear() and check whether the next year i.e. 2023 is a leap year or not. 
The function will return true if it is a leap year and false if it is not a leap year. */

function leapYear(year){
    let leapDate = new Date(year, 1, 29);
   return leapDate.getMonth()==1 && leapDate.getDate() == 29;
}

result=leapYear(2023)

 console.log(result?"leap year":"not a leap year");