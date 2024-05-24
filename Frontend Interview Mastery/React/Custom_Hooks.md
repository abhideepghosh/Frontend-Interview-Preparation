## Definition Of Custom Hooks In React

- Custom Hooks in React are functions that allow you to reuse stateful logic across multiple components.
- They enable you to extract stateful logic from a component and reuse it in other components without duplicating code.
- Custom Hooks are regular JavaScript functions, but they use Hooks internally, allowing them to access state, props, and other React features.

## Example Of A Custom Hook

```
// Custom Hook useCounter
import { useState } from 'react';

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
}
```

```
// Using useCounter Hook In A Component
function Counter() {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

## Conclusion

- By using a custom Hook, you can easily reuse the counter logic in multiple components without having to write the same code again and again.
