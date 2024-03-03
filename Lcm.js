num1 = 4
num2 = 6


function lcm(num1,num2){
    const max = Math.max(num1, num2)
    const min = Math.min(num1,num2)
    
   for(i = max;;i+=max){
    i%min==0
        return i;
    }
}

console.log(lcm(num1,num2));


