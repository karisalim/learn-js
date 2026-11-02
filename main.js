const productname = "Coffe latte";
const uniteprice = 125;

let quantity = 2;
let disscount = 10;

const subtotal = uniteprice * quantity;
const total = subtotal - disscount;

console.log("product : " + productname);
console.log("product quantity : " + quantity);
console.log("subtotal : " + subtotal);
console.log("discount : " + disscount);
console.log("total : " + total);