## Definition Of Generator Function

- Generator functions in JavaScript are special functions that allow us to generate a series of values using the yield keyword. Unlike regular functions that execute from beginning to end and return a value, generator functions can be paused and resumed, allowing us to control the flow of data.
- Generator functions are defined using the function\* syntax, and they return a generator object. When we call a generator function, it doesn't execute immediately; instead, it returns a generator object that we can use to control the execution of the function.

## Example Of Generator Function

```
function* numberGenerator() {
  let num = 1;
  while (true) {
    yield num;
    num++;
  }
}

const generator = numberGenerator();
console.log(generator.next().value); // Output: 1
console.log(generator.next().value); // Output: 2
console.log(generator.next().value); // Output: 3
```
