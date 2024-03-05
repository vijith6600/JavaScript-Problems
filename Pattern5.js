// w a p to make a HOLO piramid

//     *
//    * *
//   *   *
//  *     *
// * * * * *

for(row=1; row<=5; row++){
    pattern=""
    for(col=1; col<=8; ++col){
        if(col==1 || col==row ||row==5 ){
            pattern+="*"
        }
        else{
            pattern+=" "
        }
    }
    console.log(pattern);
}