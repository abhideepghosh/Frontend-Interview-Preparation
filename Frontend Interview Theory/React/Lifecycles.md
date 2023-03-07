## Lifecycle Events In React

1. Mounting: These methods are called when an instance of a component is created and added to the DOM.
   - constructor(): This method is called first when a component is created. It is used to initialize state and bind methods.
   - componentDidMount(): This method is called after the component is mounted and rendered to the DOM. It is used to set up any event listeners, timers or AJAX calls.
2. Updating: These methods are called when a component is updated as a result of changes to props or state.
   - shouldComponentUpdate(): This method is called before the component is updated. It is used to determine whether the component should be re-rendered or not.
   - componentDidUpdate(): This method is called after the component is updated and re-rendered to the DOM. It is used to update the state or props based on the new data.
3. Unmounting: This method is called when a component is removed from the DOM.
   - componentWillUnmount(): This method is called just before the component is removed from the DOM. It is used to perform any cleanup actions like clearing timers, event listeners or cancelling any network requests.
4. Error handling: These methods are called when an error occurs during rendering or in a lifecycle method.
   - componentDidCatch(): This method is called when an error is thrown from any child component. It is used to log the error or to display a fallback UI.

## To Sum Up

- These lifecycle methods can be useful in controlling the behavior of a component and responding to changes in props or state.
- It is important to note that not all components will use every method and that the methods are not always called in the same order.
