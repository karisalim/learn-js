// console.log("POS STRATED");
// console.warn("LOW STOCK");
// console.error("CRITICAL ERROR PAYMENT");

// console.table([
//     {
//         name:"latte", price:50
//     },
//     {
//         name:"espresso", price:100
//     },
//     {
//         name:"cappuccino", price:150
//     }
// ])

const unitPrice = 125;
let quantity = 2;
const discount = 10;

const subtotal = unitPrice * quantity;
const total = subtotal - discount;

console.log(total);