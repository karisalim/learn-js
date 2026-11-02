const productName1 = "Latte";
const productName2 = "Espresso";

const unitPrice1 = 125;
const unitPrice2 = 80;

const quantity1 = 2;
const quantity2 = 3;

const invoiceDiscount = 25;

const subtotal1 = unitPrice1 * quantity1;
const subtotal2 = unitPrice2 * quantity2;

const invoiceSubtotal = subtotal1 + subtotal2;
const grandTotal = invoiceSubtotal - invoiceDiscount;

console.log("Latte:", subtotal1);
console.log("Espresso:", subtotal2);
console.log("Subtotal:", invoiceSubtotal);
console.log("Discount:", invoiceDiscount);
console.log("Grand Total:", grandTotal);