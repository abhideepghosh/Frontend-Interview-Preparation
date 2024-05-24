## Definition Of Pure Components In React

- A Pure Component in React is a component that implements the shouldComponentUpdate lifecycle method with a shallow comparison of its props and state. The shouldComponentUpdate method is called before rendering, and it determines if the component needs to be re-rendered or not.
- In a Pure Component, the shouldComponentUpdate method performs a shallow comparison of the current props and state with the next props and state. If there are no changes, the component will not re-render, which can improve performance by reducing unnecessary rendering.
- A Pure Component is a class-based component, and it is used when the component's output depends only on its props and state, and not on any other external data or side effects. Pure Components are typically used for performance optimization and can help to reduce the number of renders in the application.
- In React functional components, you can achieve similar behavior to Pure Components by using React.memo. React.memo is a higher-order component that memoizes the result of a functional component based on its props, similar to how Pure Components work.
