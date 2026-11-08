# JavaScript Fundamentals

1. Variables: var vs let vs const
في Python:
x = 10x = 20



في JavaScript:
let x = 10;
x = 20;

const y = 30;
// y = 40; // TypeError


لكن فيه تفاصيل أهم.

الـ Block Scope:
if (true) {
    let price = 100;
    var quantity = 5;
}

console.log(quantity); // 5
console.log(price);    // ReferenceError


let وconst ليهم Block Scope، بينما var ليه Function Scope أو Global Scope حسب مكان تعريفه.

Hoisting والـ Temporal Dead Zone:
console.log(a); // undefined
var a = 10;

console.log(b); // ReferenceError
let b = 20;


الفرق هنا مش إن let مبيحصلهاش Hoisting؛ لكن الوصول ليها قبل التهيئة ممنوع.
2. Equality: == vs ===
دي من أكبر الفروقات عن Python:
console.log(5 == "5");   // true
console.log(5 === "5");  // false

console.log(false == 0);  // true
console.log(false === 0); // false


الـ == ممكن تعمل Type Coercion، لكن === بتقارن من غير تحويل أنواع.

القاعدة العملية: استخدم === و!== افتراضيًا، إلا لو عندك سبب واضح لاستخدام Loose Equality.
3. Truthy وFalsy
في Python:
if []:    print("True")else:    print("False")



النتيجة False.

لكن في JavaScript:
if ([]) {
    console.log("True");
}


النتيجة True!

لأن Arrays وObjects في JavaScript تعتبر Truthy حتى وهي فاضية.

وده ممكن يعمل Bug في الـ Frontend:
const products = [];

if (products) {
    console.log("Products available");
}


الكود هيطبع الرسالة رغم إن القائمة فاضية.

التصحيح:
if (products.length > 0) {
    console.log("Products available");
}


4. Nullish Coalescing vs Logical OR
بص المثال ده:
const quantity = 0;

console.log(quantity || 10); // 10
console.log(quantity ?? 10); // 0


ليه؟
- || بيرجع البديل لما القيمة تكون Falsy.
- ?? بيرجع البديل فقط لو القيمة null أو undefined.
في الـ POS لو الكمية صفر، استخدام || ممكن يغيرها لقيمة افتراضية من غير قصد.
5. Objects وReferences
const product = {
    name: "Latte",
    price: 125
};

const copy = product;

copy.price = 200;

console.log(product.price); // 200


الاتنين بيشاوروا على نفس الـ Object.

ولو عايز نسخة سطحية مستقلة:
const copy = { ...product };

copy.price = 200;

console.log(product.price); // 125


لكن خد بالك إن الـ Spread بيعمل Shallow Copy، مش Deep Copy.