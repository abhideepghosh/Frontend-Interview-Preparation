## Side Effects In React

- In React, side effects refer to any changes that occur outside of the component, such as updating the DOM, fetching data from an API, or setting a timer.

## Side effects can be classified into two types

1. Synchronous side effects: These are side effects that occur immediately when a component is rendered. Examples of synchronous side effects include setting the document title, updating the CSS styles, or adding event listeners to the DOM. To handle synchronous side effects in React, you can use the useEffect hook.
2. Asynchronous side effects: These are side effects that occur after a certain delay or in response to an external event, such as fetching data from an API or setting a timer. To handle asynchronous side effects in React, you can use the useEffect hook with a cleanup function to prevent memory leaks.
