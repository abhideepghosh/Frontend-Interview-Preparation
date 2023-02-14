## Definition Of Closures
- In JavaScript, A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
- It has access to the variables and parameters of its outer function, even after the outer function has returned.
- In simple words, a closure gives you access to an outer function's scope from an inner function.
- Closures allow you to create private variables and functions that are only accessible to the inner function, and they are commonly used to implement modular and maintainable code.

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