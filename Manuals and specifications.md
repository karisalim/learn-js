# JavaScript — الدرس 02: Manuals and Specifications

النهارده هنتعلم حاجة مهمة لأي Software Engineer: إزاي تعرف JavaScript المفروض تشتغل إزاي، وإزاي تتأكد إن الكود اللي بتكتبه صح؟

وده تاني درس في منهج [JavaScript.info](https://javascript.info/manuals-specifications?utm_source=chatgpt.com).

## 1. يعني إيه Specification؟

تخيل إنك بتبني API في Django، وعندك قواعد بتحدد إيه اللي الـ API لازم يعمله.

مثلًا:

```
POST /api/products/
```

وفي الـ Documentation مكتوب:

- `name` لازم يكون String.
    
- `price` لازم يكون Number.
    
- السعر مينفعش يكون بالسالب.
    
- لو البيانات غلط، يرجع Validation Error.
    

دي قواعد العقد اللي الـ API لازم يلتزم بيها.

نفس الفكرة موجودة في JavaScript.

فيه معيار رسمي اسمه ECMAScript (ECMA-262)، وده بيحدد طريقة عمل اللغة نفسها.

مثلًا:

```
console.log(10 + 5);   // 15
console.log("10" + 5); // "105"
```

ليه الأولى طلعت `15` والتانية `"105"`؟

لأن قواعد JavaScript بتحدد إزاي عملية `+` تتعامل مع الأرقام والنصوص، بما فيها التحويل التلقائي للأنواع.

الـ Specification هي المرجع الرسمي للسلوك ده.

## 2. الفرق بين ECMAScript وJavaScript وV8

المعيار بيحدد قواعد اللغة، والمحركات المختلفة بتنّفذ القواعد دي.

خليني أفصّلهالك:

ECMAScript: المعيار اللي بيحدد شكل اللغة وسلوكها.

JavaScript: اللغة اللي بتكتب بيها برامجك، واللي بتتبع معيار ECMAScript.

V8: محرك تنفيذ JavaScript المستخدم في Chrome وNode.js.

مهم تفهم إن Node.js مش لغة برمجة مختلفة. هو Runtime بيشغل JavaScript خارج المتصفح.

## 3. المراجع الثلاثة اللي لازم تفرق بينهم

[Standard ECMA-262 ECMAScript 2016 Language Specification | Online Playground](https://images.openai.com/static-rsc-4/6KfZdIX8dy5gJvvZCg9j6tX5-9WGhTcm2-PHybC0SxF4xHZ5f1nrS3mr6cqRnx4Plcpi99T0QD3r_skWx-Tx0Jki8fQMKyHziPN1EKauORQ4KuhVSehWBLWIJCEJqFPNlm3NUa4NicwRWN9yTxLkyHJuUhvDHtdqEGXvtwqdXVw?purpose=inline)

[ECMAScript Specification](https://tc39.es/ecma262/?utm_source=chatgpt.com)

المرجع الرسمي الدقيق لقواعد اللغة. تستخدمه لما تحتاج تفهم السلوك من منظور تقني عميق جدًا.

[Creating HTML - Wes Bos](https://images.openai.com/static-rsc-4/gddz7C-29hj1Uf366aaPxkhMmVDa8icOFQPvkj5RuSfFzA2bdi-sw-fbMihpsVAqSnLtsswGln2N29wkOawuSTI7j0E4z9Dx40XJTKB2siQsWjuk7K7e8Q1XnQ28hI25SWfhsx0vpvusBwiHTWjb-QsD4QIoPElvEUdLbXhMCmI?purpose=inline)

[MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript?utm_source=chatgpt.com)

مرجع عملي للمبرمج، فيه شرح وأمثلة وBrowser Compatibility.

[Top 3 Free Vanilla Javascript books to get started | by Kaung Myat Lwin | Medium](https://images.openai.com/static-rsc-4/TmAucfohOZ5_VsA8CTq5yzZT3TLa7n0mYFMPiIseuML9s-KJDQ-BjQYqQTFMylpxAkuBGYcGmXX0Jc3vj3LQKAXfuxtj0rkl9gIwIY0b9IncO7aL41fS0yNWWe22xdzjkS-5P8eypDU3HpY6j0Y_qbIUW4ZeP9J-QXDPo-cp82U?purpose=inline)

[JavaScript.info](https://javascript.info/?utm_source=chatgpt.com)

ده منهجنا الأساسي؛ بيعلمك المفاهيم بالتدريج، بأمثلة وتمارين.

## 4. طيب أستخدم أنهي مرجع في شغلي؟

خلينا ناخد مثال واقعي في الـ POS.

عندك أسعار منتجات:

```
const prices = [100, 250, 50];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total); // 400
```

لو مش فاهم `reduce()`:

1. تبدأ بـ JavaScript.info عشان تتعلم التعامل مع Arrays.
    
2. ترجع لـ MDN عشان تشوف parameters والـ return value وأمثلة مختلفة.
    
3. لو اكتشفت سلوك غريب أو محتاج دقة شديدة، ترجع لـ ECMA-262.
    

فيه كمان حاجة اسمها Compatibility: هل الميزة اللي عايز تستخدمها مدعومة في المتصفحات المستهدفة؟ تقدر تعرف ده من جداول التوافق في MDN أو [Can I Use](https://caniuse.com/?utm_source=chatgpt.com).

javascript.info+1