## Program Execution In V8 Engine

1. Parsing: The V8 engine parses the JavaScript source code and generates an Abstract Syntax Tree (AST) and a Call Stack.
2. Execution of synchronous code: The synchronous code is executed line-by-line, following the order in which it appears in the source code. Any function calls are added to the call stack, and executed in the order they appear on the stack.
3. Execution of asynchronous code with callbacks: When the engine encounters an asynchronous operation, such as a network request or a timer, it does not wait for the operation to complete before moving on to the next line of code. Instead, it registers a callback function that will be called when the operation completes. The callback is added to the event queue.
4. Event loop: While the call stack is empty, the V8 engine checks the event queue for any pending callbacks. If there are any, it pulls the first one off the queue and adds it to the call stack for execution.
5. Execution of asynchronous code with promises: Promises provide a more structured way to handle asynchronous code. When a promise is created, it immediately starts executing its executor function synchronously. If the executor function contains any asynchronous operations, it returns a promise that will be resolved or rejected when the operation completes.
6. Handling promise resolution: When a promise is resolved, the callback registered using .then() is added to the microtask queue. Microtasks are executed after the call stack is empty, but before the event loop checks for new events.
7. Handling promise rejection: When a promise is rejected, the callback registered using .catch() is called immediately, and the rejection is propagated up the call stack until it is handled by a try/catch block or an unhandled rejection occurs.
8. Execution of microtasks: When the call stack is empty, the V8 engine checks the microtask queue for any pending callbacks. If there are any, it pulls the first one off the queue and adds it to the call stack for execution.
9. Repeat: The V8 engine repeats steps 4-8 until all callbacks and microtasks have been executed.
