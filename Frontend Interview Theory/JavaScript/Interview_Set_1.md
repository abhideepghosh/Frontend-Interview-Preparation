**1. Explain the difference between `null` and `undefined`.**

* **null:** Represents an intentional absence of an object value. It's an assignment value.
* **undefined:** A variable has been declared but has not yet been assigned a value. It is the default value for undeclared variables, missing object properties, and function parameters that are not provided.

**Example:**
```javascript
let name = null; // name has no object value assigned
let age; // age is declared but undefined

function myFunction(param) {
    console.log(param); // param is undefined if not passed 
}
```

**2. What is hoisting in JavaScript?**

* **Hoisting:** Refers to the conceptual behavior where declarations (not initializations) of variables and functions are moved to the top of their scope.  
* **Important Points:**
    * **var:** Variables declared with `var` are hoisted AND initialized with `undefined`.
    * **let/const:** Hoisted but not initialized. Accessing them before their declaration line causes a `ReferenceError`.
    * **Functions:** Function declarations are hoisted fully (accessible throughout the scope), while function expressions are similar to `let/const`.

**Example:**
```javascript
console.log(myName); // undefined ('var' is hoisted)
sayHello(); // Outputs "Hello!" (function declaration hoisted)

var myName = "Alice";

function sayHello() {
  console.log("Hello!");
}
```

**3. What are closures in JavaScript?**

* **Closure:** An inner function that retains access to its outer function's variables (its lexical scope) even after the outer function has returned. 
* **Use Cases:**
    * Data Encapsulation/Privacy
    * Event listeners (keeping track of data when events happen)
    * Currying (functions returning functions)

**Example:**
```javascript
function outerFunction(name) {
  let message = "Hello, " + name;

  function innerFunction() {
    console.log(message);
  }

  return innerFunction; 
}

let greet = outerFunction("Bob");  
greet(); // Outputs "Hello, Bob" 
```

**4. Explain prototypal inheritance in JavaScript.**

* **Prototypes:** Every object in JavaScript has a prototype, which is another object it inherits properties and methods from. 
* **Prototype Chain:** When you try to access a property/method, JavaScript checks the object itself, then its prototype, then its prototype's prototype, and so on, until it's found or the chain ends with `null`.

**Example:**
```javascript
let animal = { canMove: true };
let dog = Object.create(animal); // dog inherits from animal

console.log(dog.canMove); // true (found on the prototype)
```

**5. How do you implement error handling in JavaScript?**

* **try...catch:**
    * `try` block contains the code that might throw an error.
    * `catch` block handles the error if it occurs.

* **`finally` (optional):** Executes regardless of whether an error occurred or not. 

**Example:**
```javascript
try {
   // Code that might throw an error
} catch (error) {
    console.error("Error occurred:", error); 
} finally {
   // Cleanup code (close files, release resources)
}
```

**1.  What's the difference between client-side and server-side JavaScript?**

* **Client-side JavaScript**
    * **Environment:** Runs in the user's web browser.
    * **Role:** 
        * Interacting with the DOM (Document Object Model) to add dynamic elements and behaviors
        * Making network requests (AJAX) to fetch data without a full page reload
        * Validating user input in forms
        * Creating animations and interactive graphics
* **Examples:**  Used with libraries/frameworks like React, Angular, Vue.js

* **Server-side JavaScript**
    * **Environment:** Runs on a server (e.g., a Node.js environment).
    * **Role:**  
        * Building the back-end logic of web applications
        * Handling database interactions
        * Processing requests and serving web pages
        * Creating REST APIs
* **Examples:** Using Node.js and frameworks like Express.js

**2. Explain event delegation in JavaScript.**

* **Concept:** Leveraging event bubbling to optimize event handling in scenarios with numerous similar elements.
* **Traditional Approach (inefficient):** Attach event listeners to each individual element.
* **Event Delegation:** Attach a single event listener to a parent element and use `event.target` to identify the specific element that triggered the event.

**Benefits:**
* Reduced memory usage (fewer event listeners)
* Improved performance 
* Dynamically handles elements added later to the DOM

**Example:**
```javascript
document.querySelector("#userList").addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {  // Check if clicked element is an <li>
    console.log("You clicked: ", event.target.textContent);
  }
});
```

**3. How does the spread operator (...) and rest operator (...) work?**

* **Spread Operator:**
    * **Syntax:** `...`
    * Expands iterables (like arrays and strings) into individual elements. 
    * **Uses:**
       * Copying arrays and objects
       * Merging arrays and objects
       * Passing multiple arguments to a function easily.
* **Rest Operator:**
    * **Syntax:** `...`
    * Used in function parameters to gather remaining arguments into an array.
    * **Uses:**
       * Creating functions that accept a variable number of arguments.

**Example:**
```javascript
// Spread
let arr1 = [1,2,3];
let arr2 = [...arr1, 4,5]; // arr2 becomes [1,2,3,4,5] 

// Rest
function sum(...numbers) {
   return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1,2,3,4)); // Outputs 10
```

**4. What is the difference between `call`, `apply`, and `bind` methods?**

All three methods are used to manipulate the `this` context within functions:

* **`call`:**
     * Invokes the function, setting `this` to the first argument. 
     * Subsequent arguments are passed to the function individually.
* **`apply`:** 
    * Also invokes the function, setting `this` to the first argument.
    * Expects the function's arguments in an array form (the second argument).
* **`bind`:**
    * Returns a new function with `this` bound to a specified value.
    * Used to create a pre-bound function for later execution. 

**Example:**
```javascript
const person = { name: "Alice" };
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

greet.call(person, "Hello");  // Outputs: Hello, Alice
greet.apply(person, ["Hi"]);  // Outputs: Hi, Alice

let boundGreet = greet.bind(person);
boundGreet("Good morning");   // Outputs: Good morning, Alice
```

Let's break down `call`, `apply`, and `bind` in detail:

**Purpose:**

All three methods are used to control the `this` context when invoking a function.  They let you explicitly set the object that should be referenced by the `this` keyword inside a function.

**How they work:**

* **`.call(thisArg, arg1, arg2, ...)**
    * **`thisArg`:** The value you want to set as `this` inside the function.
    * **`arg1, arg2, ...`:** Arguments to be passed to the function, listed individually.
    * **Immediately Invokes the Function:** The function is executed immediately.

* **`.apply(thisArg, [arg1, arg2, ...])**
    * **`thisArg`:** Similar to `call`, sets the `this` value inside the function.
    * **`[arg1, arg2, ...]`:**  Arguments to be passed to the function, provided as an array.
    * **Immediately Invokes the Function:** The function is executed immediately.

* **`.bind(thisArg, arg1, arg2, ...)**
    * **`thisArg`:** The value to be bound to `this` inside the function.
    * **`arg1, arg2, ...`** Arguments to pre-fill (similar to partial application). Note: These arguments come before any arguments passed when the new function is eventually called.
    * **Returns a New Function:** Returns a new function with `this` permanently bound, rather than executing the original function immediately.

**Example:**

```javascript
const person = { 
    name: "Alice",
    greet: function(greeting, farewell) {
        console.log(`${greeting}, ${this.name}. ${farewell}`);
    }
};

const robot = { name: "R2D2" };

person.greet.call(robot, "Hello", "Goodbye");   // Hello, R2D2. Goodbye
person.greet.apply(robot, ["Beep", "Boop"]);   // Beep, R2D2. Boop

let robotGreet = person.greet.bind(robot);
robotGreet("Hi", "Farewell");  //  Hi, R2D2. Farewell 
```

**Comparison Table**

| Feature         | `.call()`          | `.apply()`         | `.bind()`  |
|-----------------|--------------------|-------------------|-------------|
| Purpose         | Set `this` & invoke  | Set `this` & invoke  | Set `this` & return a new function |
| Argument Passing| Individual arguments  | An array of arguments | Pre-filled arguments (partial application) |
| Invocation      | Immediate           | Immediate            | Deferred (new function is called later) | 

**Key Points:**

* **Choice between `call` and `apply`:** Usually comes down to whether it's easier to provide your arguments as an array or a comma-separated list.
* **`bind` for Event Listeners:**  Use `bind` to permanently attach the correct `this` to functions used as event listeners.
* **Modern Alternatives:** In modern JavaScript, you can often use arrow functions, which lexically inherit `this` from their enclosing scope, lessening the need for explicit `call`, `apply`, `bind` in many cases.


**1. Explain the difference between synchronous and asynchronous code in JavaScript.**

* **Synchronous Code:**
    * Executed line-by-line in a blocking manner. Each operation must complete before the next one begins (think of a step-by-step recipe).
    * **Example:**
        ```javascript
        let result1 = calculateSomething(); 
        let result2 = doAnotherThing(result1);
        ```

* **Asynchronous Code:**
    * Allows for operations to be offloaded, preventing them from blocking the main execution thread. 
    * Results are dealt with when they're ready, typically through callbacks, promises, or async/await.
    * **Examples:**
        * Network requests (fetching data from an API)
        * Timers (`setTimeout`, `setInterval`)
        * User interactions (button clicks, etc.)

**2.  What are JavaScript modules? Explain different ways to import and export them.**

* **Modules:** Provide a way to organize and encapsulate JavaScript code into reusable units. They promote code maintainability and avoid global namespace pollution.

* **CommonJS Modules (`require` and `module.exports`)**
    * Traditional Node.js module system.
    * **Example:** 
        ```javascript
        // mathFunctions.js
        const add = (a, b) => a + b;
        module.exports = { add };

        // app.js
        const math = require('./mathFunctions');
        console.log(math.add(2,3)); // 5
        ```

* **ES Modules (`import` and `export`)**
    * Modern, standard module system in JavaScript.
    * **Example:**
        ```javascript
        // mathFunctions.js
        export const add = (a, b) => a + b;

        // app.js
        import { add } from './mathFunctions';
        console.log(add(2,3)); // 5 
        ```

**3. What is the difference between array methods map(), filter(), and reduce()?**

All are higher-order functions that operate on arrays, but with distinct purposes:

* **`.map()`:**
    * Creates a new array by applying a callback function to each element of the original array.
    *  Returns an array with the same length
    * **Example:**
        ```javascript
        const numbers = [1,2,3];
        const doubled = numbers.map(number => number * 2); 
        console.log(doubled); // [2,4,6]
        ```

* **`.filter()`:**
    * Creates a new array containing only the elements from the original array that pass a provided test (callback function returns `true`).
    * **Example:**
        ```javascript
        const ages = [12, 25, 16, 30];
        const adults = ages.filter(age => age >= 18);
        console.log(adults); // [25, 30]
        ```

* **`.reduce()`:**
    * Reduces an array to a single value by iterating through and applying a callback function (reducer) that takes an accumulator and the current value.
    * **Example:**
        ```javascript
        const total = numbers.reduce((sum, current) => sum + current, 0); // initial value 0
        console.log(total); // 6
        ```

**4. Describe Destructuring in JavaScript**

* **Destructuring** allows you to neatly extract values from arrays or properties from objects and assign them to variables.

* **Array Destructuring:**
    ```javascript
    const numbers = [1,2,3];
    const [a, b] = numbers; // a = 1, b = 2
    ```

* **Object Destructuring:**
    ```javascript
    const person = { name: "Alice", age: 30 };
    const { name, age } = person; 
    ```
What are the differences between `<script>` tag attributes like "notype", "async", "defer", and "module"

**Standard Script Behavior (no attributes)**

* Executes immediately as soon as encountered in the HTML, blocking the parsing of the rest of the page until finished.
* Executes in order of appearance in the HTML document.

**`notype`**

* **Purpose:** Primarily for historical reasons. Indicates a script is not JavaScript (an obsolete practice).
* **Modern Use:** Generally avoided.  Browsers may ignore this attribute. 

**`async`**

* **Purpose:**  Used for external scripts that should not block HTML parsing and rendering.
* **Fetching:** Script is fetched in parallel with HTML parsing.
* **Execution:** Executes as soon as it's fully downloaded, potentially out of order.
* **Guarantees:** No guarantee of execution order relative to other scripts.
* **Use Cases:**
    * Third-party analytics scripts
    * Non-critical external JavaScript files

**`defer`**

* **Purpose:** Also used for external scripts, guaranteeing the script will run *after* HTML parsing is complete, but in the order they appear in the document.
* **Fetching:** Script fetching happens in parallel with HTML parsing.
* **Execution:** Occurs after the HTML is parsed and the DOM is built, in the order encountered in the document.
* **Guarantees:**  Execution order is preserved.
* **Use Cases:**  
    * Scripts that rely on the DOM being fully available.
    * Scripts that need to run after other scripts on the page (if the order matters)

**`type="module"`**

* **Purpose:**  Identifies the script as an ES Module, enabling the use of `import` and `export` syntax.
* **Behavior:**
    * Treated as a deferred script by default (executes after DOM is ready).
    * Strict mode is enforced automatically.
    * Top-level variables and functions are scoped within the module, not the global scope.
* **Benefits:** 
    * Improved code organization and structure.
    * Better dependency management

**Table Summary**

| Attribute |  Key Points                                                        |
|-----------| -------------------------------------------------------------------|
|   none    | Default. Blocks parsing, executes immediately, in-order.             |
| `notype`  | Mostly obsolete, indicates a script is not JavaScript.           |
| `async`   | Fetched in parallel, executes as soon as ready (may be out-of-order) |
| `defer`   | Fetched in parallel, executes after DOM is ready, in-order           |
| `module`  | Designates ES Module, enables import/export, deferred by default  |

**Important Note:** 
* `async` and `defer` are not supported for inline scripts (scripts without a `src` attribute). 

Let's delve deeper into how the `<script>` tag attributes of "async", "defer", and "module" impact browser behavior and script execution.

**1. async**

* **Key Points:**
    * Fetched asynchronously, in parallel with HTML parsing.
    * Executes the moment the script is fully fetched and parsed, even if the DOM isn't completely ready.
    * Doesn't guarantee execution order, potentially leading to race conditions if scripts have dependencies.

* **In-depth Breakdown:**
    1. **Fetching:** The browser encounters a `<script async>` tag and initiates a background fetch of the script. 
    2. **Parsing Continues:** HTML parsing is **not blocked**. The parser continues to build the DOM.
    3. **Execution:**
        *  As soon as the script's downloading and parsing is complete, execution occurs.
        *  This could happen while the DOM is still being constructed.
    4. **Order Matters (Kind Of):** `async` scripts may execute out of the order they appear in the document, making them unreliable if one script depends on another.

* **Ideal for:**
    * Standalone scripts that don't interact immediately with the DOM.
    * Loading scripts like third-party trackers or counters that shouldn't delay page rendering.

**2. defer**

* **Key Points:**
    * Also downloaded asynchronously, in parallel with HTML parsing. 
    * Executes only **after** the entire HTML document has been parsed and the DOM is built. 
    * Respects execution order – scripts are run in the same order they appear in the document.

* **In-depth Breakdown:**
    1. **Fetching:** Similar to `async`, the script fetch starts as soon as the `<script defer>` tag is encountered, without blocking the HTML parser.
    2. **Parsing Continues:** The browser continues HTML parsing.
    3. **Execution:**
        *  Execution is deferred until the HTML document is completely parsed and the DOM is ready.
        *  Multiple `defer` scripts execute sequentially, preserving their relative order in the HTML.

* **Ideal for:**
    * Scripts that rely on the DOM or need to ensure they execute after other scripts (`defer` scripts will always run after regular scripts).

**3. type="module"**

* **Key Points:**
    * Indicates the script is a standard JavaScript ES module.
    * By default, implicitly behaves like `defer`.
    * Enables the use of `import` and `export` keywords for module dependency management.
    * Scopes variables to the module itself, preventing global namespace pollution.

* **In-depth Breakdown**
    1. **Fetching & Parsing:** The module is fetched (potentially in parallel), and parsing occurs.
    2. **Dependency Resolution:** Modules have their own dependency tree. The browser fetches and executes a module's dependencies before executing the module itself.
    3. **Execution:**
       *  Execution occurs after the HTML document has been parsed and built. This is similar to `defer`.
       *  All modules and their dependencies are executed in the correct order.

* **Ideal for:**
    * Organizing larger projects with well-defined dependencies.
    * Promoting good code organization and maintainability.

**What are Promises?**

* **Core Concept:** Promises are objects in JavaScript that serve as placeholders for the eventual result of an asynchronous operation. This eventual result could be a success (resolved) or a failure (rejected).
* **States:**
    * **Pending:** Initial state, the operation is still ongoing.
    * **Fulfilled (Resolved):** The operation completed successfully.
    * **Rejected:** The operation failed, and there's an error reason.

**Why use Promises?**

* **Improved Asynchronous Code Management:**  Promises help organize and structure asynchronous code, avoiding the tangled complexity of traditional callback-based approaches ('callback hell').
* **Error Handling:** Provide a centralized mechanism for handling errors in asynchronous operations.
* **Code Readability:** Make asynchronous logic more readable and easier to reason about.

**Creating a Promise**

The `Promise` constructor takes one function as an argument. This function has two parameters:

```javascript
  const myPromise = new Promise(function(resolve, reject) {
     // Asynchronous operation code here...

     if (operationSuccessful) {
       resolve(result); // Resolve the promise with the result
     } else {
       reject(error);   // Reject the promise with an error
     }
  }); 
```

**Executing a Promise**

Promises provide methods to attach handlers for successful or failed outcomes:

* **`.then()`:** Used to chain actions **after** a promise resolves successfully. It takes a callback function that receives the resolved value.
    ```javascript
    myPromise.then((result) => {
        console.log("Success:", result); 
    });
    ```

* **`.catch()`:**  Used for handling errors when a promise is rejected. It takes a callback function that receives the error.
    ```javascript
    myPromise.catch((error) => {
      console.error("Error:", error);
    });
    ```

* **`.finally()`:** Executes a callback function regardless of whether the promise was resolved or rejected. Useful for cleanup tasks.
    ```javascript
    myPromise.finally(() => {
      console.log("Operation complete");
    });
    ```

**Real-World Example**

```javascript
function fetchDataFromServer(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);

    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response); 
      } else {
        reject(new Error("Request failed"));
      }
    };

    xhr.send(); 
  });
}

fetchDataFromServer('https://api.example.com/data')
  .then((data) => {
    console.log(data); // Process the fetched data 
  })
  .catch((error) => {
    console.error(error); // Handle the error
  });
```

**Important Notes**

* **Promise Chaining:**  `.then()` and `.catch()` return new promises, allowing you to chain asynchronous operations elegantly.
* **Async/Await:** Modern JavaScript provides the `async` and `await` keywords which offer syntactic sugar for working with promises, making your code look more synchronous. (Let me know if you'd like a breakdown of async/await!)

The primary methods to execute multiple promises concurrently in JavaScript:

**1. Promise.all()**

* **Behavior:** Takes an iterable of promises (usually an array) as input. Returns a single new promise.
* **Resolution:**
    * The returned promise resolves when **all** input promises resolve. The results are in an array, preserving the order of the original input promises.
    * If **any** input promise rejects, the returned promise immediately rejects with the reason of the failing promise.  

**Example:**

```javascript
const promise1 = Promise.resolve(10);
const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'hello');
});
const promise3 = Promise.reject("Oops, something went wrong");

Promise.all([promise1, promise2, promise3])
  .then(values => console.log(values)) // Will not execute due to promise3 rejecting
  .catch(error => console.error(error)); // Output: "Oops, something went wrong"
```

**Ideal Use Case:** When you need results from all promises before proceeding to the next stage of logic. 

**2. Promise.allSettled()**

* **Behavior:** Also takes an array of promises.  Returns a single promise.
* **Resolution:**
    * The returned promise resolves only after **all** the input promises have settled (either resolved or rejected).
    * The result is an array of objects, where each object describes the outcome of a corresponding input promise:
        * `{ status: 'fulfilled', value: result}` for resolved promises.
        * `{ status: 'rejected',  reason: error}` for rejected promises.  

**Example:**

```javascript
Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log(results)); 
  // Output (approximately):
  // [ 
  //   { status: 'fulfilled', value: 10 }, 
  //   { status: 'fulfilled', value: 'hello'}, 
  //   { status: 'rejected',  reason: "Oops, something went wrong" } 
  // ]
```

**Ideal Use Case:** When you need to know the outcome of all promises, regardless of whether they succeed or fail, and you want to process them accordingly.

**3. For-of Loop with async/await**

* **Behavior:** Allows sequential execution and waiting for each promise to resolve within a loop.  
* **Important:**  The loop itself must be inside an `async` function to use `await`.

**Example:**

```javascript
async function processPromises() {
  const promises = [promise1, promise2, promise3];
  const results = [];

  for (const promise of promises) {
    try {
      const result = await promise;
      results.push(result);
    } catch (error) {
      console.error("Error processing promise:", error);
    }
  }

  console.log(results);  
}
```

**Ideal Use Case:** When you need fine-grained control over how to handle the result or error of each promise, or if the result of one promise influences subsequent promises.

**Key Points**

* **Choice:** The best method is often dictated by your specific error handling requirements and if you need results in the original order.
* **Handling Errors:**  Remember to use appropriate error handling with each approach, especially with `Promise.all()` where a single failure can short-circuit the whole operation.


