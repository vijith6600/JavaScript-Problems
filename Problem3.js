// ## Find the lowest price product 


function minProduct(product1,product2,product3){
    let lowest = Math.min(product1,product2,product3);
    return `The lowest priced product is ${lowest}`;
}

console.log(minProduct(7,66,1));