## Definition Of Callbacks

- Callbacks in JavaScript are functions that are passed as arguments to another function and are executed at a later time. The function that accepts the callback is known as the higher-order function.
- When the higher-order function is executed, it invokes the callback function at some point in time, allowing the callback function to perform some action.
- Callbacks are commonly used in asynchronous programming, where the result of an operation is not immediately available, and the program continues to execute while waiting for the operation to complete. In this case, the callback is executed when the operation is complete, and the program can continue with the result of the operation.
- Callbacks in JavaScript can also be used for event handling, such as click events on a button or mouse events on a web page. In this case, the callback function is executed when the event occurs.

## Examples Of Callbacks

- For example, in the setTimeout function in JavaScript, a callback function is passed as the first argument, and the time delay in milliseconds is passed as the second argument. The setTimeout function waits for the specified time and then executes the callback function.

```
setTimeout(function() {
  console.log('This message will be displayed after 3 seconds');
}, 3000);
```

- Another example of a callback is the Array.prototype.map function in JavaScript, which takes a callback function as an argument and applies it to each element of the array, returning a new array with the results.

```
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]
```
