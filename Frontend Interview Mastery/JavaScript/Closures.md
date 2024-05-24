## Definition Of Closures

- In JavaScript, A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
- Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.
- It has access to the variables and parameters of its outer function, even after the outer function has returned.
- In simple words, a closure gives you access to an outer function's scope from an inner function.
- Closures allow you to create private variables and functions that are only accessible to the inner function, and they are commonly used to implement modular and maintainable code.

## Uses Of Closures

1. Private variables and functions: Closures allow variables and functions to be hidden from the global scope and accessed only by specific functions. This is often used to create private variables and functions that can be used by a specific module or component, without exposing them to the rest of the code.
2. Private variables and functions: Closures allow variables and functions to be hidden from the global scope and accessed only by specific functions. This is often used to create private variables and functions that can be used by a specific module or component, without exposing them to the rest of the code.
3. Memoization: Closures can be used to implement memoization, which is a technique that stores the results of expensive function calls and returns the cached result when the same inputs occur again. This can greatly improve the performance of certain algorithms.
4. Currying and partial application: Closures can be used to implement currying and partial application, which are techniques for creating new functions from existing ones by pre-filling some of the arguments. This can make functions more modular and reusable.
5. Garbage collection: Closures can be used to prevent memory leaks and ensure proper garbage collection. When a closure is no longer needed, it can be garbage collected along with any variables or functions it references.

## Example Of A Closure

```
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    }
}

const counter = createCounter();
counter(); // 1
counter(); // 2
counter(); // 3
```
