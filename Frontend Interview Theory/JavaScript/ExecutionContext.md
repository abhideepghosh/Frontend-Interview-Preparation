## **What is an Execution Context?**

* An execution context is a conceptual environment where a piece of JavaScript code is evaluated and executed. It's like a self-contained box created by the JavaScript engine.
* Every time a piece of code runs in JavaScript (the global code, your functions), it does so within its own execution context.

## **What's Inside an Execution Context?**

1. **Variable Environment:** 
   * Holds variables, function declarations, and arguments within that specific scope.

2. **Scope Chain:** 
   * A link to outer execution contexts to determine variable accessibility. When looking for a variable, JavaScript engine traverses this chain. 

3. **The 'this' Keyword:**  
   * Reference to an object depending on how the code is being executed.

## **Types of Execution Contexts**

* **Global Execution Context (GEC):**
    * The base/default context, representing your global JavaScript code outside any function. 
    * There's only *one* Global Execution Context per script or program.
* **Function Execution Context (FEC):**
    * Created every time a function is *invoked* (called).
    * Each function gets its own unique execution context to prevent conflicts while running.

## **The Execution Life Cycle**

1. **Creation Phase:**
    * **Variable Object (VO):**  Space created to store variables and function declarations defined within the context. Variables are initially set to `undefined`.
    * **Scope Chain Setup:** Chain initialized to reference variables & functions in outer contexts. 
    * **this is Determined:** The value of `this` is set based on the environment.

2. **Execution Phase:**
    * **Evaluation and Assignment:** Code is run line by line.  Variables receive their actual values, functions are executed.

## **Why Execution Contexts Matter**  

While you generally don't work with them directly, understanding this under-the-hood concept is crucial because it provides clarity about:

* **Scope:**  Rules about what variables are 'visible' in certain parts of your code.
* **The `this` Keyword:** Behavior of `this` depends entirely on the current execution context.
* **Hoisting:** How variable and function declarations are conceptually 'lifted' in their contexts.
