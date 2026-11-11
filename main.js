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
     




let customer = {
    id: 1,
    name: "Ahmed"
};

// console.log(String(customer));  // "[object Object]"



console.log(JSON.stringify(customer)) // '{"id":1,"name":"Ahmed"}'




const invoice = {
    number: 1050,
    total: 1500,
    isPaid: true,
    customerName: "Ahmed"
};

const paymentStatus = invoice.isPaid
    ? "Paid"
    : "Unpaid";


const message = `
Invoice: ${invoice.number}
Customer: ${invoice.customerName}
Total: ${invoice.total} EGP
Paid: ${invoice.isPaid}
Status: ${paymentStatus}

`;

console.log(message);
