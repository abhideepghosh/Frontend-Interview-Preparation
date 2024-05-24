## Deinfition Of Error Boundaries

1. Error boundaries are a feature in React that allows you to catch and handle errors that occur during rendering, in lifecycle methods, or in the constructor of a component. By default, if an error occurs in a React component, the entire component tree is unmounted and an error message is displayed in the browser console.
2. To handle errors in a more graceful way, you can use error boundaries. Error boundaries are components that catch errors that occur within their child components, and display a fallback UI instead of crashing the entire component tree. This helps to prevent the user from seeing a blank or broken page, and provides a better user experience.

## Example Of Error Boundary Component

```
import React, { useState, useEffect } from "react";

function ErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.log(error);
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return <h1>Something went wrong.</h1>;
  }

  return props.children;
}

export default ErrorBoundary;
```
