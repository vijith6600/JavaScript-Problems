const check=7

for(i=2;i<=check;i++){
    if(check%i==0){
        break;
    }
}

if(i==check){
    console.log(check+" is a prime number");
}
else{
    console.log(check+" is not a prime number")
}  