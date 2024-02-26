//  Find the expensive product 

function Expensiveproduct(product1,product2,product3){
    let maxPrice = Math.max(product1,product2,product3);
    return `The most expensive product is ${maxPrice}`
}

console.log(Expensiveproduct(10000,2222,366));
