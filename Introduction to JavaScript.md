# 1. What is JavaScript?

## أولًا: يعني إيه Programming Language؟

الكمبيوتر في النهاية بينفذ تعليمات محددة جدًا. وإحنا كبشر مش هنكتب البرامج كلها باستخدام تعليمات المعالج مباشرة، فبنستخدم Programming Languages للتعبير عن العمليات اللي عايزين ننفذها.

## الJavaScript اتعملت ليه أصلًا؟

في البداية كانت صفحات الويب مبنية بشكل أساسي على HTML لهيكلة المحتوى، وCSS للتنسيق.

لكن إزاي نخلي الصفحة تتفاعل مع المستخدم؟

تخيل عندك صفحة بيع فيها زرار اسمه Add to Cart. لما المستخدم يضغط عليه، عايز تحدث السلة وتعرض الإجمالي الجديد من غير ما تضطر تعيد تحميل الصفحة بالكامل

## JavaScript vs Java

سؤال مشهور جدًا: هل JavaScript نسخة من Java؟

لأ. الاتنين لغتين مختلفتين.

الJavaScript كان اسمها في البداية LiveScript، وبعدها اتغير الاسم إلى JavaScript لأسباب تسويقية مرتبطة بشعبية Java وقتها.

لكن JavaScript تطورت كلغة مستقلة، وليها مواصفة خاصة اسمها ECMAScript.

## JavaScript vs ECMAScript

ودي من أول الحاجات اللي عايزك تفهمها كويس.

- الECMAScript: المواصفة القياسية اللي بتحدد قواعد اللغة وسلوكها.
    
- الJavaScript: اللغة اللي بتطبق المواصفة، وبتشتغل في بيئات مختلفة.
    
-الJavaScript Engine: البرنامج اللي بيفهم وينفذ كود JavaScript.
    
- الRuntime Environment: بيئة التشغيل اللي بتوفر المحرك وإمكانيات إضافية.
    

مثلًا `Array` و`Promise` و`Map` من إمكانيات اللغة القياسية، لكن `document` من واجهات بيئة المتصفح، و`node:fs` واجهة خاصة بـ Node.js.

مش كل حاجة بتستخدمها وأنت بتكتب JavaScript هي جزء من ECMAScript نفسها.

ودي نقطة أساسية لفهم ليه كود ممكن يشتغل في Browser ويفشل في Node.js.



# 2. JavaScript Engines

دلوقتي السؤال المهم: لما نكتب JavaScript، مين بينفذ الكود؟

الإجابة: JavaScript Engine.

المحرك مسؤول عن تحليل الكود وتنفيذه وإدارة جوانب من تشغيله، بما فيها الذاكرة.

## أشهر المحركات

| Engine         | مكان استخدامه         |
| -------------- | --------------------- |
| V8             | Chrome وEdge وNode.js |
| SpiderMonkey   | Firefox               |
| JavaScriptCore | Safari                |

المحركات دي ممكن تختلف في طريقة التنفيذ الداخلية والأداء، لكن المفروض تلتزم بسلوك اللغة المحدد في مواصفة ECMAScript للميزات المدعومة.

## الكود بيتحول لإيه؟

خلينا نتخيل إننا كتبنا:

```
let price = 100;
let quantity = 3;

console.log(price * quantity);
```

![[Pasted image 20261029121048.png]]
### يعني إيه Parsing؟

الـ Parser بيقرأ الكود ويتأكد إن تركيب التعليمات صحيح من ناحية الـ Syntax.

مثلًا:

```
let price = ;
```

ده Syntax Error، لأن التعبير ناقص.

أما:

```
let price = 100;
```

فده تركيب صحيح.

### يعني إيه JIT Compilation؟

JIT اختصار لـ Just-In-Time Compilation.

بعض محركات JavaScript الحديثة، زي V8، بتستخدم استراتيجيات متعددة للتنفيذ والتحسين. ممكن تبدأ بتنفيذ تمثيل وسيط للكود، ثم تحول أجزاء مناسبة منه إلى Machine Code محسّن بناءً على سلوك البرنامج.

يعني مش دقيق نقول إن JavaScript مجرد لغة Interpreted، أو إن كل الكود بيتحوّل مرة واحدة إلى Machine Code قبل التشغيل.

### مقارنة مع Python

| المقارنة                 | Python (CPython)                | JavaScript (V8)                              |
| ------------------------ | ------------------------------- | -------------------------------------------- |
| تحليل الكود              | Parsing                         | Parsing                                      |
| التنفيذ                  | غالبًا عبر Bytecode Interpreter | مستويات تنفيذ تشمل Bytecode وتجميعًا محسّنًا |
| نوع اللغة                | Dynamic                         | Dynamic                                      |
| إدارة الذاكرة            | تلقائية                         | تلقائية                                      |
| ضمان شكل التنفيذ الداخلي | يختلف حسب التنفيذ               | يختلف حسب المحرك                             |

لاحظ إننا بنقارن تنفيذين محددين: CPython وV8، مش قاعدة عامة على كل تطبيقات اللغتين.

مهم للـ OOP مستقبلًا: فهم كيفية تخزين الـ Objects ومشاركة المراجع والـ Garbage Collection هيخلينا نفهم سلوك الـ Instances بشكل أفضل.


# 3. What can in-browser JavaScript do?

الJavaScript اللي بتشتغل داخل المتصفح تقدر تعمل حاجات كتير، لكن من خلال الإمكانيات اللي المتصفح بيوفرها.

أهم الأمثلة:

1. تعديل محتوى الصفحة والعناصر والتنسيقات.
    
2. الاستجابة للضغط على الأزرار وحركة الماوس والكيبورد.
    
3. إرسال HTTP Requests إلى Backend APIs.
    
4. تخزين بعض البيانات محليًا باستخدام Web Storage وIndexedDB.
    
5. التعامل مع إمكانيات الجهاز اللي المتصفح بيتيحها وفقًا لشروط الأمان والصلاحيات.
    

## مثال: JavaScript تتواصل مع Django API

تخيل إن عندك API:

`GET /api/products/`

وعايز تجيب المنتجات في JavaScript.

```
async function loadProducts() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/products/"
  );

  if (!response.ok) {
    throw new Error("Request failed");
  }

  const products = await response.json();

  console.log(products);
}

loadProducts().catch(console.error);
```

مش مطلوب تحفظ الكود ده دلوقتي؛ هنتعلم `async/await` و`fetch` في الفصول المخصصة ليهم.

المهم تفهم رحلة الطلب:![[Pasted image 20261029121526.png]]

---
# 4. What can't in-browser JavaScript do?

الدرس الأصلي بيشرح إن المتصفح بيشغّل JavaScript في بيئة مقيدة أمنيًا، أو ما يُعرف بالـ Sandbox.

ليه؟

لأنك ممكن تدخل موقع غير موثوق. مينفعش الكود بتاع الموقع ده يفتح ملفاتك الخاصة أو يتحكم في الكمبيوتر بحرية.

## أهم القيود

### الوصول لملفات الجهاز

صفحة ويب عادية مش مسموح لها تقرأ أي ملف على جهازك بدون مسار وصول مصرح به.

لكن ممكن المستخدم يختار ملف بنفسه:

```
<input type="file">
```

وقتها JavaScript تقدر تتعامل مع الملف اللي المستخدم اختاره.

### الكاميرا والميكروفون

المتصفح بيوفر APIs لطلب الوصول، لكن الاستخدام بيخضع للصلاحيات وسياسات الأمان.

### Same-Origin Policy

من أهم قواعد حماية بيانات المستخدم في المتصفح.

الـ Origin بيتحدد عادة بثلاثة أجزاء:

`scheme + hostname + port`

شوف الأمثلة:

|Origin A|Origin B|نفس الـ Origin؟|
|---|---|---|
|`https://shop.com`|`https://shop.com`|نعم|
|`https://shop.com`|`http://shop.com`|لا|
|`https://shop.com`|`https://api.shop.com`|لا|
|`http://localhost:3000`|`http://localhost:8000`|لا|

اختلاف البروتوكول أو اسم المضيف أو المنفذ يعني Origin مختلف.

لكن خلي بالك: Same-Origin Policy مش معناها إن المتصفح ممنوع يرسل أي Request إلى Origin مختلف. قواعد CORS بتحدد إمتى JavaScript تقدر تقرأ استجابات Cross-Origin عبر Fetch مثلًا، وفيه أنواع طلبات وسلوكيات مختلفة.

### Browser vs Node.js

وده الفرق الأساسي:

الJavaScript نفسها مش محظورة من التعامل مع الملفات. إنما المتصفح بيفرض قيود على الصفحات العادية. أما Node.js فبيوفر File System APIs بصلاحيات العملية والقيود التشغيلية المعمول بها.

----
# 5. What makes JavaScript unique?

الدرس الأصلي بيذكر ثلاث خصائص ساعدت JavaScript على الانتشار:

- التكامل المباشر مع HTML وCSS.
    
- سهولة تنفيذ التفاعلات البسيطة.
    
- دعمها بشكل أساسي في جميع المتصفحات الرئيسية.
    

لكن من منظور Software Engineering، فيه خصائص تانية محتاجين نفهمها عشان نكون مستعدين للـ OOP.

## A. Dynamic Typing

في JavaScript مش لازم تحدد نوع المتغير عند تعريفه.

```
# JS
let value = 15
value = 15 
value = "karim"
value = True

---
console.log("5" + 2);
// "52"

# Python
print("5" + 2) 
# TypeError    print("5" + str(2))  # Output: 52
print(int("5") + 2)  # Output: 7
print(f"{5}{2}")  # Output: 52
```

ليه؟

لأن عامل `+` في JavaScript ممكن يعمل String Concatenation وفقًا لقواعد تحويل الأنواع، مش مجرد جمع أرقام.

وده سبب من الأسباب اللي هتخلينا نذاكر Type Conversions بعمق لما نوصل له في Fundamentals.

## B. Functions are First-Class Values

في JavaScript الدالة تقدر تخزنها في متغير، أو تبعتها كـ Argument، أو ترجعها من دالة تانية.

```
function calculate(price, quantity) {
  return price * quantity;
}

const operation = calculate;

console.log(operation(100, 3));
// 300
```

لاحظ:

`operation = calculate` مش معناها إننا نفذنا الدالة؛ إحنا أسندنا قيمة الدالة نفسها.

لكن:

`operation(100, 3)` معناها إننا نفذناها.

Python برضه بتدعم First-Class Functions.

دي هتبقى أساس مهم لما نذاكر Closures وCallbacks وHigher-order Functions.

## C. Prototype-Based Object Model

وده أهم جزء مرتبط بهدفنا في الـ OOP.

في JavaScript ممكن تكتب Class:

```
class Product {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const product = new Product("Keyboard");

console.log(product.getName());
```

لكن خلف الـ Class Syntax فيه نظام وراثة مبني على الـ Prototypes.

يعني لما تكتب:

```
product.getName();
```

المحرك بيبحث عن الخاصية أو الـ Method حسب قواعد Property Lookup، ومنها المرور عبر الـ Prototype Chain إذا لم يجد الخاصية على الـ Object نفسه.

![[Pasted image 20261029122841.png]]