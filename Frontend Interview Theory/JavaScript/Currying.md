## Definition Of Currying

- Currying is a technique used in functional programming to transform a function with multiple arguments into a sequence of functions that each take a single argument. The curried function returns a new function that expects the next argument in the sequence, and so on, until all the arguments have been received and the original function can be executed with all of them.
- In other words, currying is the process of breaking down a function that takes multiple arguments into a series of functions that each take a single argument and return a new function that takes the next argument in the sequence until all the arguments have been collected, and then finally return the result.
- Currying can help make functions more flexible and reusable by allowing them to be partially applied, which means that some of their arguments can be supplied ahead of time, and the partially applied function can be used as a new function with fewer arguments. This makes it easier to create variations of a function without having to define entirely new functions from scratch.

## Example
```js
const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);

// Infinite Currying
const currySum = (a) => {
  return function (b) {
    if(b) return currySum(a + b); 
    else return a;
  }
}

console.log(sum(10,20,30,40)); // Output: 100   
console.log(currySum(10)(20)(30)(40)()); // Output: 100
```
