let input= 153
const check = input
result=0

while(input != 0){
    last= input%10
    console.log(last);
    result += last**3
    input=parseInt(input/10)
}
result==check?console.log(`given number ${check} is amstrong`):console.log(`given number ${check} is Not amstrong`);