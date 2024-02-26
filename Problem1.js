/*  Can you find out who will get the delicious cake?
    (Part II)
This year, not only Jim & Dela but also Chinku are doing hard work to secure the first position. Can you find out who will get the delicious cake?

**Input: The input line has three values, x (The marks Jim has got), y (The marks Dela has got) and z (The marks Chinku has got)**

**Output: Print the name of the topper.**

1. Sample Input-1: 84 99 77
- Sample Output-1: Dela

2. Sample Input-2: 69 97 99
- Sample Output-2: Chinku */


function cakeWinner(jim,dela,chinku){
    if(typeof(jim)==="number" && typeof(dela)==="number" && typeof(chinku)==="number"){
        if(jim > dela && jim> chinku){
            return `Cake Winner is Jim! with  a score ${jim}`;
        }
        else if(dela > jim && dela > chinku){
            return `Cake Winner is dela! with  a score ${dela}`;
        }
        else{
           return `Winner is chinku! with  a score ${chinku}`
        }
    }
    else{
        return "invalid input"
    }
}



 console.log(  cakeWinner(11,55,90));