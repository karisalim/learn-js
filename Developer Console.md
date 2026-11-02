1. إيه هي Developer Console؟
تخيل إن عندك صفحة POS، والكاشير ضغط على منتج، لكن المنتج متضافش للسلة.

المشكلة ممكن تكون في:
- JavaScript فيها Runtime Error.
- الـ API رجعت 400 Bad Request.
- المتصفح مش قادر يوصل للسيرفر.
- الـ Frontend استقبل البيانات لكنه عرضها غلط.
بدل ما تخمن، تفتح DevTools وتعرف إيه اللي حصل.































تفتحها من Chrome أو Microsoft Edge بالضغط على F12 أو Ctrl + Shift + I.

أهم التبويبات:
التبويب	استخدامه
Console	تجربة JavaScript وعرض الأخطاء والرسائل
Network	مراقبة HTTP Requests وResponses
Sources	قراءة الكود وعمل Breakpoints
Elements	فحص HTML وCSS
Application	فحص Cookies وStorage
Performance	تحليل بطء الصفحة

خلينا نبدأ بالـ Console.
2. الفرق بين Python Shell وJavaScript Console
أنت في Python ممكن تفتح:
python


وبعدين تكتب:
>>> x = 10>>> y = 20>>> x + y30



في JavaScript افتح Console واكتب:
let x = 10;
let y = 20;

x + y;


هتشوف:
30


وده لأن الـ Console بيعرض نتيجة التعبير اللي نفذته.

فيه فرق مهم: console.log() بتطبع رسالة، لكن كتابة تعبير مباشرة ممكن تعرض قيمته بدون console.log().
طرق عرض البيانات
console.log("POS Started");

console.warn("Low Stock");

console.error("Payment Failed");

console.table([
  { name: "Latte", price: 125 },
  { name: "Espresso", price: 80 }
]);


Console Output

POS Started

Low Stock

Payment Failed

(index)	name	price
0	Latte	125
1	Espresso	80


عرض توضيحي للأنواع المختلفة من رسائل Console.
console.table() مفيدة جدًا لما تتعامل مع Array فيها Objects، بدل ما تفتح كل Object لوحده.

3. الفرق بين Syntax Error وRuntime Error وLogic Error
دي نقطة مهمة جدًا في البرمجة والـ Testing.
Syntax Error — خطأ في كتابة اللغة
const price = ;


ده كود غير صالح نحويًا، فالمحرك مش هيقدر يحلله.
Runtime Error — خطأ أثناء التنفيذ
const price = 100;

console.log(price);
console.log(quantity);


الكود صحيح نحويًا، لكن quantity مش متعرفة. هيظهر:
100
Uncaught ReferenceError: quantity is not defined


Logic Error — البرنامج اشتغل لكن النتيجة غلط
const price = 100;
const quantity = 3;

const total = price + quantity;

console.log(total); // 103


المفروض الناتج 300، لكن البرنامج طلع 103 لأننا استخدمنا + بدل *.

وده أخطر في بعض السيناريوهات؛ لأن البرنامج ممكن يكمل شغله من غير أي Error ظاهر، رغم إن الحسابات غلط.

4. إزاي تستخدم Breakpoints عشان تفهم الكود؟
الـ Breakpoint بتخلي المتصفح يوقف تنفيذ JavaScript عند سطر معين، فتقدر تشوف قيمة كل متغير.

خلينا ناخد كود من تمرينك السابق:
const unitPrice = 125;
let quantity = 2;
const discount = 10;

const subtotal = unitPrice * quantity;
const total = subtotal - discount;

console.log(total);


افتح الملف في تبويب Sources داخل DevTools، وحدد السطر:
const subtotal = unitPrice * quantity;


اضغط على رقم السطر عشان تضيف Breakpoint، وبعدها اعمل Refresh للصفحة.

لما التنفيذ يقف، استخدم الأدوات دي:
الأداة	وظيفتها
Resume F8	يكمل التنفيذ
Step Over F10	ينفذ السطر من غير الدخول في الدوال المستدعاة
Step Into F11	يدخل داخل الدالة
Step Out Shift + F11	يخرج من الدالة الحالية
Scope	يعرض المتغيرات المتاحة
Watch	يراقب Expressions تختارها

جرب محاكاة الـ Debugger
Mini JavaScript Debugger

الخطوة 1 من 4

1

const unitPrice = 125;

2

let quantity = 2;

3

const discount = 10;

4

const subtotal = unitPrice * quantity;


5

const total = subtotal - discount;

6

console.log(total);


قبل حساب Subtotal
Variable	Value
unitPrice	125
quantity	2
discount	10
subtotal	غير مهيأ بعد
total	غير مهيأ بعد

 السابقStep Over 
المحاكاة بتعرض الحالة بعد كل خطوة، والقيم غير المهيأة هنا تختلف عن undefined.
الدرس المستفاد: بدل ما تبص على الناتج النهائي بس، تقدر تشوف كل خطوة وتحلل المشكلة من أول ما بدأت.

5. Network Tab — أهم جزء للـ API Testing
رغم إن JavaScript.info بيركز في الدرس ده على الـ Console والـ Debugging، خلينا نوسع التطبيق شوية عشان تربط اللي بتتعلمه بشغلك.

تخيل الـ POS بيطلب المنتجات من Django:
GET /api/products/


والسيرفر بيرد:
{
  "results": [
    {
      "id": 1,
      "name": "Latte",
      "price": "125.00"
    }
  ]
}


الـ Frontend بيستخدم JavaScript للتعامل مع الـ Response، وممكن ينفذ حاجة زي:
const response = await fetch("/api/products/");

const data = await response.json();

console.table(data.results);


ده مثال تعليمي لازم يتنفذ في سياق مناسب بيدعم await، والمسار ده لازم يكون موجود على نفس الـ Origin أو يكون فيه إعداد CORS مناسب. وهندرس fetch وasync/await بالتفصيل بعدين.

لما تفتح Network هتقدر تشوف:
- Status Code: هل الطلب رجع 200 أو 401 أو 500؟
- Request Headers: البيانات اللي المتصفح أرسلها مع الطلب.
- Payload: البيانات المرسلة في POST أو PATCH.
- Response: البيانات اللي رجعت من Django.
- Timing: كل مرحلة أخدت وقت قد إيه.
سيناريو اختبار عملي
الكاشير ضغط إضافة منتج، لكن السلة متحدثتش.
اختار نوع المشكلة وشوف طريقة التحليل

HTTP 500 — Internal Server Error

HTTP 401 — Unauthorized

HTTP 400 — Bad Request

HTTP 200 — لكن السلة متحدثتش


ابدأ بالـ Frontend. الطلب نجح على مستوى HTTP، لكن ممكن يكون فيه خطأ في الـ State Management أو Response Mapping أو تحديث الواجهة. نجاح 200 مش دليل إن كل الـ Business Logic نجحت.