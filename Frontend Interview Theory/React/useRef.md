## Defnition Of useRef Hook In React

- useRef() is a built-in React hook that returns a mutable ref object that can be used to store a value that persists between renders.
- Unlike createRef() that creates a new ref on every render, useRef() returns the same ref object on every render, making it ideal for storing values that need to persist between renders but don't need to trigger a re-render when they change.
- useRef() can also be used to store other values, such as a counter or a previous value.
