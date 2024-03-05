// w a p to make a * piramid

//     *
//    * *
//   * * *
//  * * * *
// * * * * *



for(row=1; row<=5;row++){
    pattern=""
    for(space=5; space>=row; space--){
        pattern+=" "
    }
    for(col=1; col<=row; col++){
        pattern+="* "
    }
    console.log(pattern);
}