## Definition Of Custom Hooks In React

- Custom Hooks in React are functions that allow you to reuse stateful logic across multiple components.
- They enable you to extract stateful logic from a component and reuse it in other components without duplicating code.
- Custom Hooks are regular JavaScript functions, but they use Hooks internally, allowing them to access state, props, and other React features.

## Example Of A Custom Hook

```
import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error(`Error: ${res.status}`);
        }
        const result = await res.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);  // triggers refetch when URL changes

  return { data, loading, error };
};

export default useFetch;
```

## Conclusion

- By using a custom Hook, you can easily reuse the counter logic in multiple components without having to write the same code again and again.
