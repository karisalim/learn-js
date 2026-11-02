## 1. يعني إيه Code Editor؟

أنت لما بتكتب Python في VS Code، البرنامج مش هو اللي بينفذ Python بنفسه.

خلينا نشوف:

في Python:

```
python app.py
```

اللي بيشغل الكود هو Python Interpreter.

وفي JavaScript باستخدام Node.js:

```
node app.js
```

اللي بيشغل الكود هو Node.js، وبيستخدم محرك V8 لتنفيذ JavaScript.

أما في المتصفح، فالمتصفح نفسه عنده JavaScript Engine.

أول قاعدة: VS Code مجرد بيئة لكتابة الكود وإدارته. مش هو لغة البرمجة، ومش هو الـ Runtime.

## 2. Code Editor ولا IDE؟

|المقارنة|Code Editor|IDE|
|---|---|---|
|الوظيفة الأساسية|كتابة وتحرير الكود|بيئة تطوير متكاملة|
|الإكمال التلقائي|متاح|متاح|
|Debugging|حسب الأدوات والإضافات|غالبًا مدمج|
|إدارة المشاريع|بسيطة أو قابلة للتوسيع|متكاملة غالبًا|
|أمثلة|VS Code، Sublime Text|WebStorm، PyCharm|

وخلي بالك، VS Code مع الإضافات والـ Debugging بيقدم وظائف كثيرة موجودة في الـ IDEs، فالفاصل بينهم مش مطلق.

Visual Studio Code

مناسب لتعلم JavaScript وتطوير الويب وPython.

[Editor basics | WebStorm Documentation](https://images.openai.com/static-rsc-4/cG_QUi6OTVT2lCv0cGDIvUOpzr7chVNTN-XzyCORF5nRrCqgQLD9TkAhrwVfBdUf45U-7Jx9CiXUImJkUX9GTCPEYOi3jeIvkE41U2apcJKfpp85uJntPzcwa3JjkuwkmJnTvXp2dYETostdB3tyLlhx4PBKoyrWsKUSHYsCCf0?purpose=inline)

WebStorm

IDE متخصص في JavaScript وTypeScript وتطوير الويب.

بما إنك بتستخدم VS Code بالفعل مع Python وDjango، هنكمل عليه بدل ما نضيع وقت في تغيير الأدوات.

## 3. تجهيز JavaScript على Windows

هنستخدم VS Code وMicrosoft Edge أو Chrome، وNode.js لتشغيل الملفات خارج المتصفح.

### الخطوة الأولى — اعمل مشروع جديد

افتح Terminal في VS Code (`Ctrl + Backtick`) ونفذ:

```
mkdir javascript-learning
cd javascript-learning
code .
```

لو أمر `code .` مش متعرف عندك، افتح المجلد من VS Code باستخدام File ثم Open Folder.

### الخطوة الثانية — إنشاء الملفات

javascript-learning/

`index.html` — صفحة الويب

`app.js` — كود JavaScript

### الخطوة الثالثة — اكتب HTML

داخل `index.html`:

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Learning</title>
</head>
<body>
  <h1>My First JavaScript App</h1>

  <script src="./app.js"></script>
</body>
</html>
```

لاحظ السطر:

```
<script src="./app.js"></script>
```

ده معناه إن المتصفح هيحمل ملف `app.js` وينفذه عند الوصول للـ `<script>`.

### الخطوة الرابعة — اكتب JavaScript

داخل `app.js`:

```
const username = "Karim";
const language = "JavaScript";

console.log("Hello " + username);
console.log("Learning " + language);
```

افتح `index.html` في المتصفح واضغط `F12` ثم Console.

هتشوف:

```
Hello Karim
Learning JavaScript
```

سؤال مهم: ليه مظهرش الكلام داخل الصفحة؟

لأن `console.log()` بيكتب في Console فقط. مش بيضيف عناصر للـ HTML.

ودي نقطة هنرجعلها لما ندرس DOM.

## 4. مقارنة عملية بين Python وJavaScript

تخيل عندنا عملية بيع فيها سعر وكمية وخصم.

Python

```
price = 200quantity = 3discount = 50total = price * quantityfinal = total - discountprint(final)
```

JavaScript

```
const price = 200;
const quantity = 3;
const discount = 50;

const total = price * quantity;
const final = total - discount;

console.log(final);
```

الاتنين هيطلعوا `550`.

خلينا نفهم فروق مهمة:

أولًا: `const` و`let`

```
const price = 200;
let quantity = 3;

quantity = 5; // OK
price = 300;  // TypeError
```

ال`const` معناها مينفعش تعيد إسناد قيمة جديدة للمتغير، بينما `let` تسمح بكده. لكن `const` مش معناها إن محتوى كل Object هيبقى غير قابل للتعديل.

في Python مفيش كلمة `const` مكافئة على مستوى اللغة بنفس السلوك ده.

ثانيًا: الفاصلة المنقوطة `;`

الJavaScript فيها آلية اسمها Automatic Semicolon Insertion (ASI)، بتسمح بحذف `;` في حالات كثيرة، لكن مش كلها.

عشان كده هنستخدم `;` في أمثلتنا لتثبيت أسلوب واضح.

ثالثًا: أنواع البيانات

```
const price = 200;
const name = "Laptop";
const available = true;

console.log(typeof price);      // number
console.log(typeof name);       // string
console.log(typeof available);  // boolean
```

في Python بنستخدم `type()`:

```
price = 200print(type(price))  # <class 'int'>
```

خلي بالك: JavaScript العادية فيها نوع `number` للأعداد الصحيحة والعشرية الشائعة، مش `int` و`float` كنوعين منفصلين زي Python. وفيه كمان `bigint` للأعداد الصحيحة الكبيرة.

## 5. أهم أدوات VS Code اللي هتستخدمها

|الأداة|الاختصار|الفائدة|
|---|---|---|
|Integrated Terminal|`Ctrl + Backtick`|تشغيل الأوامر|
|Command Palette|`Ctrl + Shift + P`|الوصول للأوامر|
|IntelliSense|`Ctrl + Space`|اقتراحات الكود|
|Format Document|`Shift + Alt + F`|تنسيق الملف|
|Toggle Breakpoint|`F9`|إيقاف التنفيذ عند سطر|
|Start Debugging|`F5`|تشغيل الـ Debugger|
|Step Over|`F10`|تنفيذ السطر التالي|

VS Code فيه دعم مدمج لـ JavaScript وTypeScript وNode.js Debugging، فمش محتاج تنزل Extension لتشغيل أبسط مثال Node.js.

Visual Studio Code+1

### تجربة Debugging

في `app.js` اكتب:

```
const price = 100;
let quantity = 2;

quantity = quantity + 3;

const total = price * quantity;

console.log(total);
```

اعمل الآتي:

1. حط Breakpoint على سطر `quantity = quantity + 3` باستخدام `F9`.
    
2. افتح Run and Debug، وشغّل الملف باستخدام Node.js.
    
3. راقب قيمة `quantity` قبل تنفيذ السطر.
    
4. اضغط `F10` وشوف القيمة اتحولت من `2` إلى `5`.
    
5. كمل لحد `total`، وهتلاقي القيمة `500`.
    

ودي واحدة من أهم مهارات الـ Debugging: بدل ما تحط `console.log()` في كل حتة، تقدر توقف التنفيذ وتفحص حالة البرنامج.

## 6. تشغيل JavaScript باستخدام Node.js

لو Node.js متثبت، افتح Terminal واكتب:

```
node --version
npm --version
```

لو رجع أرقام إصدارات، شغّل:

```
node app.js
```

لو أمر `node` غير معروف، ثبّت إصدار LTS من [Node.js](https://nodejs.org/en/download?utm_source=chatgpt.com) وافتح Terminal جديدة.

الفرق العملي:

||Browser|Node.js|
|---|---|---|
|تشغيل JavaScript|نعم|نعم|
|`console.log()`|نعم|نعم|
|`document`|نعم|لا افتراضيًا|
|DOM|نعم|لا افتراضيًا|
|التعامل مع الملفات|عبر Web APIs مقيدة|عبر Node APIs|
|بناء Backend Server|ليس مباشرة كبيئة Node|نعم|

مثال:

```
console.log(typeof document);
```

في صفحة ويب عادية فيها DOM:

```
object
```

وفي Node.js افتراضيًا:

```
undefined
```

دي من أهم الحاجات اللي لازم تفهمها قبل ما تشتغل على JavaScript مع APIs.

## 7. التطبيق العملي — Mini POS Calculator

هنعمل حاجة بسيطة شبه نظام نقاط البيع، فيها أصناف وسعر وكمية وحساب الإجمالي.

JavaScript Practice

## Mini POS — حساب فاتورة

تجربة تفاعلية

صنف: Coffee Latte

EGP

سعر الوحدة

الخصم على الإجمالي

الكمية

## 2

الإجمالي قبل الخصم

250.00 EGP

الخصم

10.00 EGP

المبلغ المطلوب

# 240.00 EGP

نسخ نتيجة الفاتورةتقدر تغير السعر والخصم والكمية وتشوف عملية الحساب مباشرة.

دلوقتي دورك تكتب نفس الفكرة في `app.js`:

```
const productName = "Coffee Latte";
const unitPrice = 125;

let quantity = 2;
let discount = 10;

const subtotal = unitPrice * quantity;
const grandTotal = subtotal - discount;

console.log("Product:", productName);
console.log("Quantity:", quantity);
console.log("Subtotal:", subtotal);
console.log("Discount:", discount);
console.log("Total:", grandTotal);
```

بعد ما تشغله، المفروض النتيجة تكون:

```
Product: Coffee Latte
Quantity: 2
Subtotal: 250
Discount: 10
Total: 240
```

ملاحظة هندسية: إحنا هنا بنستخدم `number` للتعلم فقط. لما نوصل لحسابات مالية حقيقية في ERP، هنتكلم عن مشكلة دقة الأرقام العشرية وإزاي نتجنب أخطاء التقريب.