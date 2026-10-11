**Question Bank**  

1. What happens if you put a `<p>` tag inside another `<p>` tag?  
```html
<p> hi <p> bye </p> </p>
```
a) It is works fine as it is a valid html syntax  
b) The browser auto-closes the first `<p>`  
c) It throws an error and won't render  
d) It nests correctly  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Block-level paragraph elements cannot be nested. The browser resolves this syntactical issue by automatically closing the outer `<p>` tag before initiating the inner one.
</details>

2. Which is TRUE about IDs in HTML?  
a) Multiple elements can share the same id  
b) An id must be unique on a page  
c) id is only used for styling  
d) id is required only for `<label>` elements  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - The HTML specification requires `id` values to be strictly unique document-wide so they can reliably be used as targeted hooks for CSS and JavaScript logic.
</details>

3. Which attribute is required in an `<img>` tag for accessibility?  
a) src  
b) placeholder  
c) alt  
d) description  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - The `alt` (alternative text) attribute is structurally required for `<img>` tags to ensure screen readers can describe the image to visually impaired users.
</details>

4. Which of the following is not an inline element?  
a) `<img>`  
b) `<p>`  
c) `<a>`  
d) `<input>`  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Paragraph tags are structural, block-level elements that default to taking up the full width of their container, whereas `<img>`, `<a>`, and `<input>` display inline.
</details>

5. An element matches both `h3 { color: green; }` and `.section-title { color: blue; }`. Which color is applied?  
a) Green, because the element selector appears first  
b) Blue, because the class selector is more specific  
c) Green, because element selectors override classes  
d) Whichever color the browser chooses as its default  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - In CSS specificity hierarchies, a class selector (`.section-title`) structurally outweighs a broad tag element selector (`h3`).
</details>

6. Which property is most likely to be inherited by child elements from a parent?  
a) margin  
b) border  
c) font-family  
d) width  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Typography and text-coloring properties cascade and inherit from parents, whereas box-model structural properties (margin, border, width) explicitly do not.
</details>

7. With the default `box-sizing: content-box`, an element has `width: 200px`, `padding: 20px` on both sides, and a `5px` border on both sides. What is the visible width of the box, excluding margins?  
a) 200px  
b) 230px  
c) 250px  
d) 290px  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - When using standard `content-box` sizing, you calculate visible width by adding the core width (200px) + left/right padding (20px + 20px) + left/right border (5px + 5px) = 250px.
</details>

8. Which statement best describes the main difference between Flexbox and Grid?  
a) Flexbox is mainly one-dimensional; Grid explicitly supports rows and columns  
b) Flexbox is responsive, but Grid is not  
c) Grid can position children, but Flexbox cannot  
d) Flexbox works only horizontally, while Grid works vertically  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - Flexbox aligns fluid items along a single axis (row or column) at a time. CSS Grid handles two-dimensional spatial layouts natively.
</details>

9. A badge has `position: absolute; top: 5px; right: 5px;`. You want it positioned in the top-right corner of its `.pet` card. What should normally be added to `.pet`?  
a) `display: block`  
b) `position: relative`  
c) `position: absolute`  
d) `visibility: visible`  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - To anchor an absolutely positioned child element relative to its direct parent container, the parent must be assigned a position property other than default `static`.
</details>

10. What is printed by this code?  
```javascript
let x = 10;
x = "hello";
console.log(typeof x);
```
a) number  
b) string  
c) boolean  
d) undefined  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - JavaScript utilizes dynamic typing. Reassigning a variable from numerical data to textual data automatically updates its fundamental type to `"string"`.
</details>

11. What is the value of result?  
```javascript
const nums = [1, 2, 3];
const result = nums.map(n => n * 2);
```
a) [1, 2, 3]  
b) [1, 4, 9]  
c) [2, 4, 6]  
d) 6  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - The array `map()` method creates an entirely new array populated with the results of applying the callback (`n * 2`) to every specific element.
</details>

12. What is printed?  
```javascript
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a.length);
```
a) 3  
b) undefined  
c) An error occurs  
d) 4  
<details>
  <summary>Click to reveal the answer</summary>
  
  **d** - JavaScript objects and arrays are reference types. Variable `b` operates as a pointer to the exact same memory array as `a`, so pushing to `b` modifies the underlying referenced array directly.
</details>

13. What does this call return?  
```javascript
function f(first, ...rest) {
  return rest;
}
f("A", "B", "C");
```
a) ["B", "C"]  
b) ["A", "B", "C"]  
c) "B", "C"  
d) ["C"]  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - The rest parameter syntax (`...rest`) gathers all arguments beyond the explicitly named first parameter into a single, cohesive array structure.
</details>

14. Given the code below, which call is equivalent?  
```javascript
const a = [3, 5, 1];
Math.max(...a);
```
a) `Math.max(a)`  
b) `Math.max([3, 5, 1])`  
c) `Math.max(3, 5, 1)`  
d) `Math.max(a[0])`  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - The spread operator (`...a`) destructures the array, expanding its internal elements into individual standalone arguments passed to the function.
</details>

15. What is printed?  
```javascript
const a = [1, 2];
const b = [...a];
b.push(3);
console.log(a.length, b.length);
```
a) 2 2  
b) 2 3  
c) 3 3  
d) 3 2  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Using the spread operator inside an array literal (`[...a]`) creates a distinct shallow copy of the data. Modifying `b` afterwards has zero impact on `a`.
</details>

16. What does a closure in JavaScript capture?  
a) Only this  
b) Only variables declared inside the function  
c) Variables from its outer lexical scope  
d) The global object  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Closures afford functions persistent access to the local scope in which they were originally defined, preserving outer variable states even after outer executions complete.
</details>

17. Which statement about arrow functions is correct?  
a) Arrow functions create their own this  
b) this is undefined  
c) Arrow function has no 'this'. So, this is from the outer lexical scope.  
d) this is Window  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Arrow functions intentionally omit internal `this` bindings; instead, they transparently inherit `this` from their enclosing lexical context.
</details>

18. What happens when you use a normal function inside setTimeout in strict mode?  
a) this refers to the object that called setTimeout  
b) this is undefined  
c) this is always the window object  
d) this is the global object  
<details>
  <summary>Click to reveal the answer</summary>
  
  **d** - Even in strict mode, web browsers execute `setTimeout` callbacks originating in the global environment, hardbinding `this` back to the window/global object.
</details>

19. What gets logged?  
```javascript
function outer() {
  let x = 5;
  return function inner() {
    x++;
    console.log(x);
  };
}
let fn = outer();
fn();
fn();
```
a) 5 then 5  
b) 5 then 6  
c) 6 then 6  
d) 6 then 7  
<details>
  <summary>Click to reveal the answer</summary>
  
  **d** - The inner return function establishes a persistent closure over the mutable variable `x`. The first execution alters the state to 6, and the second continues from that state to 7.
</details>

20. What will it log (strict mode)?  
```javascript
let user = {
  name: "Leo",
  sayHi: function() {
    console.log(this.name);
  }
};
let fn = user.sayHi;
fn();
```
a) "Leo"  
b) Window  
c) The Global object  
d) Undefined  
<details>
  <summary>Click to reveal the answer</summary>
  
  **d** - Calling an extracted method natively drops its structural object context (`user`). In strict mode, `this` structurally falls back to `undefined`.
</details>

21. What is the output?  
```javascript
function outer() {
  this.value = 42;
  return () => console.log(this.value);
}
let fn = outer.call({ value: 99 });
fn();
```
a) undefined  
b) 42  
c) 99  
d) Error  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - `outer.call({value: 99})` overrides the function's internal context to the passed object, which is then mutated to `42`. The dynamically returned arrow function lexically captures this exact modified context.
</details>

22. What is printed?  
```javascript
console.log(add(2, 3));
function add(a, b) {
  return a + b;
}
```
a) undefined  
b) 5  
c) An error occurs because add is called before its definition  
d) 23  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - JavaScript hoists standard function declarations completely to the top of their enclosing scope, permitting execution referencing before actual code definition.
</details>

23. What is printed?  
```javascript
function makeCounter() {
  let count = 0;
  return () => ++count;
}
const c1 = makeCounter();
const c2 = makeCounter();
console.log(c1(), c1(), c2());
```
a) 1 1 1  
b) 1 2 3  
c) 1 2 1  
d) 0 1 0  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Factory functions returning closures establish distinct lexical environments per execution. `c1` operates entirely independently of the fresh closure state returned for `c2`.
</details>

24. What is printed?  
```javascript
const user = {
  name: "Maya",
  sayHi() {
    return this.name;
  }
};
const admin = { name: "Admin" };
admin.sayHi = user.sayHi;
console.log(admin.sayHi());
```
a) Maya  
b) Admin  
c) undefined  
d) An error occurs  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Standard function context is dynamically resolved based heavily on invocation style. Calling `admin.sayHi()` securely binds `this` directly to `admin`.
</details>

25. What is printed?  
```javascript
const user = {
  name: "Maya",
  run(callback) {
    callback();
  }
};
user.run(function () {
  console.log(this === user);
});
```
a) true  
b) false  
c) Maya  
d) The callback is never executed  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Unbound callbacks invoked dynamically inside other functions behave as standard standalone calls, meaning their internal `this` fundamentally fails to point back to the `user` object.
</details>

26. What is printed?  
```javascript
const user = {
  name: "Maya",
  showName() {
    const callback = () => this.name;
    return callback();
  }
};
console.log(user.showName());
```
a) Maya  
b) undefined  
c) callback  
d) An error occurs  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - The arrow function cleanly inherits its `this` context from the enclosing method `showName`, which evaluates to `user`.
</details>

27. After a browser loads an HTML file, JavaScript changes the text of an `<h1>` using `textContent`. Which statement is correct?  
a) The original HTML file is modified.  
b) The browser modifies the DOM, but the original HTML file remains unchanged.  
c) The browser reparses the original HTML file and saves the changes.  
d) JavaScript cannot modify HTML after the page is loaded.  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - JavaScript edits the localized, active Document Object Model residing natively in system memory rather than the flat source file hosted on the origin server.
</details>

28. Why is a tree a natural representation for an HTML document?  
a) HTML elements always appear alphabetically.  
b) Every HTML element has exactly two children.  
c) HTML naturally contains nested parent-child relationships.  
d) Trees make CSS unnecessary.  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - The inherent nesting behavior of HTML tags naturally graphs to a logical DOM tree featuring distinct nodes, parents, and children.
</details>

29. Suppose `ul` refers to a `<ul>` element. Why might `ul.childNodes.length` return a larger number than `ul.children.length`?  
a) children ignores the last child.  
b) childNodes can include text nodes created by whitespace and line breaks.  
c) children includes only visible elements.  
d) childNodes includes the parent element.  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - The `.children` property strictly filters for standard element nodes, while `.childNodes` retrieves all DOM components, including localized text and structural comment nodes.
</details>

30. Consider the code below. What happens to `item`?  
```javascript
const item = document.querySelector("#list1 li");
document.querySelector("#list2").append(item);
```
a) A copy of item is added to list2.  
b) item remains in list1 and also appears in list2.  
c) item is removed from list1 and moved to list2.  
d) An error occurs because an existing node cannot be appended.  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - DOM specifications mandate that physical nodes fundamentally exist in exactly one location at a time. Appending a live node detaches it from its previous structural location.
</details>

31. Consider the following code. After this, which statement may be true?  
```javascript
const firstItem = document.querySelector("li");
ul.innerHTML += "<li>New item</li>";
```
a) firstItem must now refer to the newly added `<li>`.  
b) The existing child nodes may have been replaced by newly created DOM objects.  
c) innerHTML only adds the new node and never affects existing nodes.  
d) The original HTML file is modified.  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Concatenating via `innerHTML` fundamentally destroys the current localized parsing tree and sequentially rebuilds all integrated objects from scratch.
</details>

32. Suppose you want to visually indicate that an element is selected. Which approach best maintains separation between JavaScript behavior and CSS presentation?  
a) `element.style.color = "red";`  
b) `element.style.backgroundColor = "yellow";`  
c) `element.classList.add("selected");` with the appearance of selected defined in CSS.  
d) `element.innerHTML = "<b>Selected</b>";`  
e) `document.write("selected");`  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - This optimal workflow cleanly delegates logical state handling to JavaScript while actively deferring layout and painting strictly to CSS.
</details>

33. Consider the code. When the button is clicked, which handlers run?  
```javascript
button.onclick = handler1;
button.onclick = handler2;
button.addEventListener("click", handler3);
```
a) handler1 only  
b) handler2 only  
c) handler2 and handler3  
d) handler1, handler2, and handler3  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Explicit assignments (`button.onclick = handler2`) deterministically overwrite previous ones, whereas `.addEventListener()` attaches standalone listeners without affecting others.
</details>

34. Which correctly removes this listener? `button.addEventListener("click", handler);`  
a) `button.removeEventListener("click");`  
b) `button.removeEventListener("click", handler);`  
c) `button.removeEventListener("click", () => handler());`  
d) `button.onclick = null;`  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Completely disengaging a listener requires explicitly matching both the event string and providing the exact memory reference of the originally attached callback.
</details>

35. A click handler is attached to a `<div>`. A button inside the `<div>` is clicked, and the event bubbles to the `<div>`. Inside the `<div>` handler, what are `event.target` and `event.currentTarget`?  
a) Both are the button  
b) Both are the `<div>`  
c) target is the button; currentTarget is the `<div>`  
d) target is the `<div>`; currentTarget is the button  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - The structurally deep element where the click originally happened natively registers as `target`, while the parent actively running the bubble-phase code operates as `currentTarget`.
</details>

36. A form's submit handler detects invalid input. What should it call to prevent the browser from performing the normal form submission?  
a) `event.stopPropagation()`  
b) `event.preventDefault()`  
c) `event.remove()`  
d) `event.stopDefault()`  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - This native function definitively cancels the standardized browser response (like navigating away or triggering an HTTP POST via a form) tied to the specific user event.
</details>

37. A button is inside a `<div>`, which is inside `<body>`. All three have click handlers. The button is clicked. Assuming normal bubbling, in what order do the handlers execute?  
a) body -> div -> button  
b) button -> body -> div  
c) button -> div -> body  
d) Only the button handler executes  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Event bubbling dictates that localized execution fundamentally triggers innermost target node handlers first before radiating upwards sequentially through parent ancestors.
</details>

38. A table contains hundreds of `<td>` elements. When any cell is clicked, that cell should be highlighted. Which is the best approach based on event bubbling?  
a) Attach a separate click handler to every `<td>`  
b) Attach one click handler to the table and inspect event.target  
c) Attach a click handler to document and call preventDefault()  
d) Attach a handler to each `<tr>` and stop propagation  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - This establishes an "event delegation" pattern, saving system memory by securely utilizing the bubbling behavior rather than binding hundreds of distinct localized listeners.
</details>

39. What must be true before a queued callback can begin executing?  
a) The JavaScript call stack must be empty  
b) The asynchronous operation must still be running  
c) The callback must return a Promise  
d) The callback must be declared with async  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - The background JS event loop inherently waits for the main active call stack to physically complete all synchronous tasks before securely pushing queued callbacks.
</details>

40. What is the output?  
```javascript
console.log("A");
setTimeout(() => {
  console.log("B");
}, 0);
console.log("C");
```
a) B A C  
b) A C B  
c) The order of B and C is unpredictable  
d) A B C  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Synchronous logs (`A`, `C`) securely execute sequentially. The `setTimeout` strictly delays execution (`B`), dropping the callback to the event queue until synchronous tasks functionally conclude.
</details>

41. Suppose a timer has expired, but JavaScript is still executing a long-running synchronous computation. What happens to the timer callback?  
a) It interrupts the current computation  
b) It waits until the current JavaScript execution finishes  
c) The timer callback is discarded  
d) It executes on a second JavaScript thread  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Since JavaScript fundamentally operates on a single execution thread, expired asynchronous timers absolutely cannot forcefully interrupt currently running synchronous code blocks.
</details>

42. Consider the code below. Why might this fail?  
```javascript
loadScript("./myscript.js");
sayHi();
```
a) JavaScript cannot load external scripts dynamically  
b) `loadScript()` must always return the function it loads  
c) Loading the script may not be complete when `sayHi()` executes  
d) `sayHi()` cannot be called from another script  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Asynchronous external script fetching strictly means the system fundamentally initiates the download but sequentially continues localized execution without waiting.
</details>

43. What is the main problem illustrated by deeply nested asynchronous callbacks?  
a) Nested callbacks always execute in parallel  
b) Callbacks cannot handle errors  
c) Control flow and error handling become increasingly difficult to follow  
d) Each callback creates a new JavaScript thread  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Nested standalone callbacks explicitly create confusing logic structures colloquially dubbed "callback hell," which obscure core logic execution paths and standard error flows.
</details>

44. A newly created Promise begins in which state?  
a) undefined  
b) pending  
c) resolved  
d) fulfilled  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Before an asynchronous task cleanly resolves or heavily rejects, a fresh Promise exclusively exists in an unsettled `pending` operational state.
</details>

45. What value is received by the second `.then()`?  
```javascript
Promise.resolve(5)
  .then(value => {
    return value * 2;
  })
  .then(value => {
    console.log(value);
  });
```
a) 10  
b) A Promise object  
c) 5  
d) undefined  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - A resolved `.then()` handler structurally packages its definitive return statement (`5 * 2`) and resolves the progressively returned subsequent Promise.
</details>

46. What is `p`?  
```javascript
const p = new Promise((resolve, reject) => {
  resolve(10);
});
```
a) 10  
b) A promise object  
c) object  
d) asynchronous function  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - The explicit invocation of the standard `new Promise()` constructor returns a distinct Promise class object specifically designed to cleanly map asynchronous event progression.
</details>

47. Which statement is TRUE?  
a) A Promise can be fulfilled and later rejected  
b) A Promise can change state multiple times  
c) A Promise settles only once  
d) A Promise must always resolve  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Promises explicitly represent fixed tasks. Once definitively shifting from `pending` to specifically `fulfilled` or `rejected`, the localized state securely locks permanently.
</details>

48. When does a Promise become fulfilled?  
a) When `new Promise()` is created  
b) When `.then()` is called  
c) When `resolve()` is executed  
d) When `.catch()` runs  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Initiating the internal `resolve` callback fundamentally triggers the Promise transition to the secure, definitive `fulfilled` status.
</details>

49. What happens if an error is thrown inside `.then()`?  
```javascript
new Promise((resolve) => {
  resolve(10);
})
.then(x => {
  throw new Error("Oops");
})
.catch(err => console.log("Caught"));
```
a) Cannot predict the behavior  
b) Error is ignored as it is not generated by the promise  
c) Promise becomes rejected  
d) Promise stays fulfilled  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Directly throwing functional runtime errors within a `.then()` automatically flags the progressively chained returned Promise as definitively `rejected`.
</details>

50. When does catch execute?  
a) After the last then  
b) When a promise is rejected  
c) When a promise is resolved  
d) always after then  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - The integrated `.catch()` handler specifically intercepts thrown standard errors and explicit localized unhandled Promise rejections.
</details>

51. What does this print?  
```javascript
new Promise((resolve) => {
  resolve(5);
})
.then(x => x * 2)
.then(x => console.log(x));
```
a) 5  
b) undefined  
c) 10  
d) none of the above  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - The structural `.then` definitively evaluates `x * 2` (resolving as 10), which cleanly chains explicitly into the next `.then`'s dynamic console execution.
</details>

52. What is the output?  
```javascript
new Promise((resolve) => {
  resolve(1);
})
.then(x => {
  return new Promise((resolve) => {
    resolve(x + 1);
  });
})
.then(x => console.log(x));
```
a) 1  
b) A promise object  
c) error  
d) 2  
<details>
  <summary>Click to reveal the answer</summary>
  
  **d** - Returning a distinct nested Promise locally forces the overarching Promise chain to fundamentally pause and inherit the nested resolution state before correctly continuing.
</details>

53. What will this print?  
```javascript
new Promise((resolve, reject) => {
  reject("Failed");
})
.then(() => console.log("Success"))
.catch(err => console.log(err));
```
a) Failed  
b) Success  
c) Error  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - An explicitly rejected Promise bypasses all subsequent successful `.then()` handlers, jumping securely down the localized chain directly to the `.catch()` block.
</details>

54. What happens if you don't return inside `.then()`?  
```javascript
new Promise((resolve) => {
  resolve(5);
})
.then(x => {
  x * 2;
})
.then(x => console.log(x));
```
a) 5  
b) undefined  
c) 10  
d) Error  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Functions dynamically lacking standard return parameters explicitly evaluate to `undefined`, resolving the next strictly chained Promise definitively with that baseline value.
</details>

55. What will this print?  
```javascript
console.log("Start");
new Promise((resolve) => {
  resolve();
}).then(() => console.log("Inside"));
console.log("End");
```
a) Start Inside End  
b) Inside Start End  
c) Start End Inside  
d) Cannot be determined  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Localized `.then()` handlers explicitly queue as standard asynchronous microtasks, executing dynamically immediately upon completion of the localized synchronous active call stack.
</details>

56. What does `then` return?  
```javascript
const p2 = p1.then(x => x + 1);
```
a) value of x + 1  
b) The same Promise p1  
c) A new promise  
d) Error  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - To securely preserve chained structural functionality, every individual execution of `.then()` dynamically constructs and actively returns an entirely new unique Promise instance.
</details>

57. What does `fetch(url)` return immediately?  
a) A Promise  
b) The HTTP status code  
c) The response body  
d) A JSON object  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - The native browser `fetch()` API explicitly skips standard synchronous execution logic, immediately generating an integrated Promise tracking the overarching HTTP state.
</details>

58. What does `response.json()` return?  
a) A JavaScript object immediately  
b) A Promise  
c) An HTTP response object  
d) A JSON string  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Due to fundamentally asynchronous data stream parsing, the `.json()` response dynamically processes and distinctly evaluates as an asynchronous Promise object.
</details>

59. Which statement about `fetch()` is correct?  
a) It rejects the Promise for every HTTP error status  
b) A 404 response normally still fulfills the Promise  
c) It automatically throws an error for status 500  
d) It rejects only if response.json() fails  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Unlike internal exceptions, standard non-200 HTTP codes (like 404) explicitly represent successfully completed network responses, technically fulfilling the localized `fetch` Promise.
</details>

60. Consider the code below. What does await do?  
```javascript
async function f() {
  const result = await somePromise;
  console.log(result);
}
```
a) Converts the Promise into a callback  
b) Pauses execution of f() until the Promise settles  
c) Starts a new JavaScript thread  
d) Blocks the entire JavaScript runtime until the Promise resolves  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Applying `await` fundamentally blocks execution localized purely to the internal `async function` block until the underlying task actively settles natively.
</details>

61. What is true about values stored in `localStorage`?  
a) They are stored only while JavaScript is executing  
b) They persist across page reloads and browser restarts  
c) They disappear when the page is refreshed  
d) They can store JavaScript objects directly  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Standard integrated `localStorage` specifically differs from `sessionStorage` by maintaining localized system storage explicitly devoid of temporal expiration protocols.
</details>

62. Given `const user = { name: "Ana" };`, which is the correct way to store and retrieve the object using localStorage?  
a) `localStorage.setItem("user", JSON.stringify(user)); const x = JSON.parse(localStorage.getItem("user"));`  
b) `localStorage.store("user", user); const x = localStorage.load("user");`  
c) `localStorage.setObject("user", user); const x = localStorage.getObject("user");`  
d) `localStorage.setItem("user", user); const x = localStorage.getItem("user");`  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - LocalStorage structurally functions exclusively via strings; robust JavaScript objects require serialization to specific JSON strings prior to internal localized saving.
</details>

63. I promise/affirm that I completed this quiz when I was in the class / during class and answered the questions to the best of my ability.  
a) True / I agree / I affirm  
b) False / I do not agree / I do not affirm  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - Acknowledges academic completion under the standard required honor policy constraints.
</details>

64. A React component uses `const [count, setCount] = useState(0)`. After `setCount(1)` causes the component to render again, what does the next call to `useState(0)` return as the current value of count?  
a) 0, because the component function starts again  
b) 1, because React preserves the state associated with that Hook  
c) undefined, until setCount is called again  
d) A new random value chosen by React  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - React's `useState` hook stores the updated state internally across renders. When the component rerenders, `useState(0)` ignores the initial `0` and returns the preserved current state (which is `1`).
</details>

65. Why might directly modifying an array stored in React state and then passing the same array to its setter fail to update the UI as expected?  
a) React state arrays cannot contain objects  
b) React may see the same array reference rather than a new state value  
c) Array methods cannot be used inside React components  
d) State setters only work with primitive values  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - React relies on strict equality (reference checking) to determine if state has changed. If you mutate the existing array and pass it back, React sees the same memory reference and assumes no change occurred, thereby skipping the UI re-render.
</details>

66. Which statement best describes what happens when a React state setter such as `setCount` is called?  
a) It immediately modifies the local count variable in the currently executing render  
b) It updates React's state and schedules the component to render again  
c) It directly changes the corresponding DOM element  
d) It reloads the entire web page  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - State setters do not instantly update variables in the currently running function. Instead, they push the new value to React's internal queue and trigger a scheduled re-render of the component with the newly updated state.
</details>

67. What is the main purpose of props in a React component?  
a) To pass data or functions from a parent component to a child component  
b) To permanently store data between browser sessions  
c) To directly modify the browser DOM  
d) To replace all uses of React state  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - "Props" (properties) are the standard mechanism in React for facilitating one-way data flow, allowing parent components to pass variables, objects, and callback functions down to their child components.
</details>

68. A Todo app removes a task using the following code. Why is `filter()` particularly appropriate here?  
```javascript
setTodoList(todoList.filter(task => task.id !== id))
```
a) It changes the existing array in place  
b) It creates a new array containing only the tasks that should remain  
c) It forces React to reload every component in the application  
d) It automatically updates the DOM without calling a state setter  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - React strictly requires state to be treated as immutable. The `filter()` method is ideal because it generates an entirely new array in memory rather than mutating the original, ensuring React correctly registers the state change.
</details>

69. Why is it useful to extract the UI for one Todo item into a separate component after the Todo app becomes more complex?  
a) Every HTML element in React is required to be its own component  
b) It gives a distinct part of the UI its own reusable responsibility while the parent can still own shared state  
c) Child components can then directly modify the parent's state variables  
d) React cannot render a list unless every item is in a separate component  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Component extraction keeps code clean and modular. It allows the individual Todo item to handle its own specific UI rendering logic, while allowing the parent to maintain control over the overarching application state.
</details>

70. I promise that I completed this quiz when I was in the class.  
a) True  
b) False  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - Acknowledges academic completion under the standard required honor policy constraints.
</details>

71. In the following React input, what makes the input controlled?  
```jsx
<input
  type="text"
  value={name}
  onChange={e => setName(e.target.value)} 
/>
```
a) value is determined by React state  
b) The input is inside a React component  
c) The input has type="text"  
d) onChange prevents the browser from changing the input  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - By explicitly assigning a React state variable to the `value` prop, React dictates the input's visual state rather than the browser's default DOM behavior.
</details>

72. Why is `useState("")` preferable to `useState()` for a controlled text input?  
a) It prevents onChange from firing twice  
b) It ensures the input is controlled from the first render  
c) React requires all state variables to be strings  
d) It makes the component render only once  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - If initialized with `useState()`, the value is initially `undefined`, making the input uncontrolled. React will throw a warning when it switches to a controlled state later. Passing an empty string `""` avoids this completely.
</details>

73. What happens when the user types into this controlled input?  
```jsx
<input
  type="text"
  value={name}
  onChange={setName(e.target.value)} 
/>
```
a) onChange updates state, React re-renders, and value={name} determines what appears  
b) The input becomes uncontrolled after the first keystroke  
c) The DOM permanently updates itself without React  
d) React directly modifies the DOM before updating state  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - The `onChange` event strictly updates the state, and since the `value` is tied to that state, the input visually updates only when the new state triggers a component re-render.
</details>

74. What is the main purpose of `useEffect`?  
a) To store component state  
b) To calculate JSX during rendering  
c) To synchronize a component with something outside React  
d) To replace event handlers  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - `useEffect` is natively designed to handle side effects, such as syncing data with external APIs, managing subscriptions, or manually interacting with the DOM outside of React's pure rendering cycle.
</details>

75. Consider the following code. Why does `fetchData()` not normally run after every re-render?  
```javascript
useEffect(() => { fetchData(); }, []);
```
a) fetch() automatically prevents repeated requests  
b) React ignores useEffect after state changes  
c) useEffect itself is called only once  
d) An empty dependency array means there are no changing dependencies that require the effect to run again  
<details>
  <summary>Click to reveal the answer</summary>
  
  **d** - The empty dependency array `[]` explicitly instructs React that the effect has no dependencies on state or props, meaning it strictly evaluates its dependencies as unchanged and only executes once on mount.
</details>

76. What is a likely result of omitting the dependency array here?  
```javascript
useEffect(() => { fetchData().then(data => setTodoList(data)); });
```
a) React automatically adds an empty dependency array  
b) The effect never runs  
c) The state update can cause another render, which runs the effect again, potentially creating a loop  
d) The effect runs only when todoList becomes empty  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - Without a dependency array, the effect runs after *every* render. Since the effect asynchronously updates the state, that state update naturally triggers another render, immediately resulting in an infinite loop.
</details>

77. During a render, what happens when React encounters this code?  
```javascript
useEffect(() => { fetchData(); }, []);
```
a) React executes the effect before useState  
b) fetchData() runs immediately while JSX is being calculated  
c) React skips the component render until fetchData() completes  
d) React registers the effect; the effect callback runs after the UI is committed  
<details>
  <summary>Click to reveal the answer</summary>
  
  **d** - React physically processes the render logic first, calculating the JSX and committing the UI to the screen. Only *after* the browser paints does it safely execute the side effects registered by `useEffect`.
</details>

78. I promise that I completed this quiz when I was in the class.  
a) True  
b) False  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - Acknowledges academic completion under the standard required honor policy constraints.
</details>

79. What is a key difference between traditional multi-page navigation and SPA navigation?  
a) Traditional multi-page navigation typically loads a new document, while SPA navigation can update the UI without reloading the document  
b) An SPA cannot change the browser URL  
c) An SPA never communicates with a server  
d) An MPA cannot use JavaScript  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - SPAs (Single Page Applications) elegantly intercept navigation events to dynamically swap React UI components in memory without ever requesting entirely new HTML documents from the server.
</details>

80. Why can a traditional page navigation cause in-memory application state to be lost?  
a) The browser deletes all server data  
b) The current JavaScript environment is discarded when the new document is loaded  
c) The History API resets the JavaScript heap  
d) React Router clears all state before navigation  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Traditional multi-page navigations physically unload the entire page and DOM. This inherently discards the localized JavaScript environment and instantly wipes out unpersisted memory states.
</details>

81. In a nested React Router configuration, what is the purpose of an `<Outlet />` in a parent route component?  
a) It loads data for all child routes  
b) It specifies where the matched child route should render  
c) It prevents the browser from refreshing during navigation  
d) It displays the current URL in the parent component  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - The `<Outlet />` component functions as a structural placeholder within parent routes to designate the exact location in the JSX tree where the active nested child component should visually render.
</details>

82. When a user clicks About in an SPA, which sequence best describes what React Router does?  
a) Requests a new about.html document and restarts the React application  
b) Changes React state but leaves the browser URL unchanged  
c) Changes the URL, matches the new route, and renders the corresponding route UI without a document reload  
d) Reloads index.html and then manually restores the previous React state  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - React Router leverages the native HTML5 History API to update the browser's URL, instantly resolves the new route match, and injects the proper component seamlessly without ever reloading the browser.
</details>

83. Suppose `/` maps to `App`, and `about` is a child route that maps to `About`. When the current URL is `/about`, which route hierarchy is matched?  
a) Only App  
b) App followed by About  
c) Only About  
d) Home followed by About  
<details>
  <summary>Click to reveal the answer</summary>
  
  **b** - Nested routing dynamically resolves hierarchies. The parent `App` route universally matches the root `/`, and the child `About` route resolves the `/about` segment, structurally rendering `About` directly inside `App`.
</details>

84. A route has the path `users/:userId`. What happens when the browser location is `/users/42`?  
a) The route matches and the value of userId is 42  
b) React Router redirects /users/42 to /users/:userId  
c) The route does not match because :userId must literally appear in the URL  
d) React Router automatically fetches user 42 from the server  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - The colon `:` uniquely denotes a dynamic URL parameter in React Router. It correctly matches the target path segment and safely extracts `42` as the functional `userId` parameter variable.
</details>

85. In React Router Data Mode, what is the primary purpose of a route loader?  
a) To retrieve data needed by a matched route as part of navigation  
b) To create the React component associated with the route  
c) To convert a normal anchor element into a Link  
d) To store application state shared by every route  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - Route loaders are specifically engineered to asynchronously fetch and guarantee the required data for a target route occurs natively during the navigation phase, prior to rendering the component.
</details>

86. For a Data Mode route that has a loader, which ordering best represents the routing mental model?  
a) Match route -> reload document -> run loader -> restore React state  
b) Render component -> match route -> run loader -> change URL  
c) Navigation / change location -> match route -> run loader -> render route UI  
d) Run loader -> navigation -> match route -> reload page  
<details>
  <summary>Click to reveal the answer</summary>
  
  **c** - The standard React Router Data Mode lifecycle natively initiates a location change, functionally maps it to an active route, explicitly executes any associated loaders, and finally renders the fully hydrated UI.
</details>

87. I promise that I completed this quiz when I was in the class.  
a) True  
b) False  
<details>
  <summary>Click to reveal the answer</summary>
  
  **a** - Acknowledges academic completion under the standard required honor policy constraints.
</details>