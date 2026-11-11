/* 
Type Conversion
*/



// alert(Boolean(1)); // true
// alert(Boolean("")); // false
// alert(Boolean("BKKJJJJKLAD")); // true
// alert(Boolean(0)); // false
// alert(Boolean("0")); // true
// alert(Boolean("1")); // true
// alert(Boolean(" ")); // true
     





let price = 125;
let quantity = "3";

const convertedQuantity = Number(quantity);


let total = convertedQuantity * 125;
console.log(typeof(convertedQuantity));
console.log(total);


