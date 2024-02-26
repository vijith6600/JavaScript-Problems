/* Write a function findLeapYear() that will take the array
[2023,2024,2025,2028,2030] as the input parameter and will check if
each year is a leap year. If a year is a leap year insert that year in a
new array, return the new array and print the result. */



function leapYear(year){
    if(year % 100===0 || year % 400 === 0 || year%4===0){
        return console.log(year + " is a Leap Year");
    }
    else{
        console.log(year+" is not a leap year");
    }
}

leapYear(2018)